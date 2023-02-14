require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
app = express();
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hellow there");
});

app.post("/order", async (req, res) => {
  const amount = req.body.amount;

  var instance = new Razorpay({
    key_id: process.env.YOUR_KEY_ID,
    key_secret: process.env.YOUR_SECRET,
  });

  var options = {
    amount: amount * 100,
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  // instance.orders.create(options, function (err, order) {
  //     console.log(order);
  // });

  const myOrder = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    amount,
    order: myOrder,
  });
});

app.listen(4000, () => {
  console.log(`server is running at port 4000`);
});
