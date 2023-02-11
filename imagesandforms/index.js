const express = require("express");

app = express();
app.set("view engine", "ejs");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.get("/getform", (req, res) => {
  res.render("getforms");
});
app.get("/postform", (req, res) => {
  res.render("postforms");
});

app.listen(4000, () => console.log(`server is running at 4000`));
