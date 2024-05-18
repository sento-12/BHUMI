const nodemailer = require("nodemailer");
const { connectMongoDB } = require("../connect"); // Import the function to connect to MongoDB

const sendMail = async (req, res) => {
  async function partyName() {
    // Connect to MongoDB
    const client = await connectMongoDB();

    try {
      // Access your database and collection
      const database = client.db("BHUMI"); // Replace with your database name
      const collection = database.collection("orders"); // Replace with your collection name

      // Find party names
      const partyNames = await collection.findOne({}, { sort: { _id: -1 } });

      //const all data for email
      const subject = partyNames.party;
      const item = partyNames.item;
      console.log(partyNames);
      console.log(`item ${item}`)
      function formating(){
        let htmlContent = 
        `
        <html>
            <head>
            <style>
            table {
                border-collapse: collapse;
                width: 100%;
            }
            th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: left;
            }
                </style>
            </head>
            <body>
        <b><h3>Order By ${subject} <h3></b>
        <br>
        <br>
        <table border="1">
        <tr>
        <th>bag</th>
        <th>Wiegth</th>
        <th>Price</th>
        <th>Brand</th>
    </tr>


        `

            item.forEach(e => {
                console.log(e)
                htmlContent += `
                <tr>
                <td>${e.bag}</td>
                <td>${e.wieght}</td>
                <td>${e.price}</td>
                <td>${e.brand}</td>
            </tr>
            `;
            });
             
            htmlContent+=
            `
            </table>
        </body>
        </html>`

        return htmlContent;
    }

      // console.log('Party Names:', subject);
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "email",
        // port: 465,
        // secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "sentobirl@gmail.com",
          pass: "jsaccfxkidbueivi",
        },
      });

      const info = {
        from: '"ORDER" <sentobirl@gmail.com>', // sender address
        to: "info.bhumiindustries@gmail.com", // list of receivers
        subject: `Order By ${subject}`, // Subject line
        text: "Hello world?", // plain text body
        html: formating()        // html body
      };

      transporter.sendMail(info, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Message sent: %s", info.messageID);
        }
      });

      res.send("send the email");
    } catch (error) {
      console.error("Error finding party names:", error);
      throw error;
    } finally {
      // Close the connection when done
      await client.close();
      // console.log('Disconnected from the database');
    }
  }

  partyName();
};

module.exports = sendMail;
