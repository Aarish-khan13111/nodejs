const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const fileUpload = require("express-fileupload");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(fileUpload());

let courses = [
  {
    id: "11",
    name: "React Cources",
    price: 500,
  },
  {
    id: "22",
    name: "nextjs Cources",
    price: 400,
  },
  {
    id: "33",
    name: "Gatsby Cources",
    price: 300,
  },
];

app.get("/", (req, res) => {
  res.send("hellow world");
});

app.get("/api/v1/lco", (req, res) => {
  res.send("hellow lco docs");
});

app.get("/api/v1/lcoobject", (req, res) => {
  res.send({ id: "55", name: "learn backend", price: "400" });
});

app.get("/api/v1/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/v1/mycourse/:courseId", (req, res) => {
  const mycourse = courses.find((course) => course.id === req.params.courseId);
  res.send(mycourse);
});

app.post("/api/v1/addCourse", (req, res) => {
  console.log(req.body);
  courses.push(req.body);
  res.send(true);
});
app.get("/api/v1/coursequery", (req, res) => {
  let location = req.query.location;
  let device = req.query.device;
  res.send({ location, device });
});
app.post("/api/v1/courseupload", (req, res) => {
  const file = req.files.file;
  let path = __dirname + "/images/" + Date.now() + ".jpg";

  file.mv(path, (err) => {
    res.send(true);
  });
});

app.listen(3000, () => console.log("server is running at port 3000...."));
