const express = require("express");
const app = express();
const { Musician } = require("./Musician");
const { sequelize } = require("./db");

const port = 3000;

//TODO
app.get("/musicians", async (request, response) => {
  response.json(await Musician.findAll());
});

//Part 2
app.get("/musicians/:id", async (request, response) => {
  const musician = await Musician.findByPk(request.params.id);
  response.json(musician);
});

app.listen(port, () => {
  sequelize.sync();
  console.log(`Listening on port ${port}`);
});
