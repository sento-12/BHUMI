const twilio = require("twilio");
const { connectMongoDB } = require("../connect"); // Import the function to connect to MongoDB

// Your Twilio account SID and auth token
const accountSid = process.env.TWILIO_ID;
const authToken = process.env.TWILIO_TOKEN;
const sendTailio = new twilio(accountSid, authToken);

const sendWhatsapp = async (req, res) => {
  async function send() {
    //connect to mongoDB
    const client = await connectMongoDB();

    try {
      // Access your database and collection
      const database = client.db("BHUMI"); // Replace with your database name
      const collection = database.collection("orders"); // Replace with your collection name

      // Find party names
      const partyNames = await collection.findOne({}, { sort: { _id: -1 } });

      const subject = partyNames.party;
      const item = partyNames.item;
      console.log(partyNames);
      console.log(`item ${item}`);
      let sendData = `Order by *${subject}*

    *_Product_*      
      `;
      item.forEach((e) => {
        sendData += `
    Brand :${e.brand}
    Bag : ${e.bag} 
    Weight :${e.wieght} 
    Price :${e.price} 

    -->
       `;
      });

      const from = "whatsapp:+14155238886"; // Replace with your Twilio phone number
      const body = sendData;
      sendTailio.messages
        .create({
          body: body,
          from: from,
          to: "whatsapp:+919409196514",
        })
        .then((message) => res.send("done"))
        .catch((error) =>
          console.error(`Failed to send message: ${error.message}`)
        );
    } catch (error) {
      console.log(`Error sending message to ${error}: `);
    }
  }

  send();
};

module.exports = sendWhatsapp;
