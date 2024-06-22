const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//Create a new folder named views by default as we have selected view engine in EJS
app.listen(port, () => {
  console.log(`app is listening to the port ${3000}`);
});

// Activity: Creating a Basic template for instagram page baed on following route:
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  console.log(data);
  res.render("instagram.ejs", { data });
});
