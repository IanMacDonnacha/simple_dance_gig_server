const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log("Now listening on port", port);
});

app.get("/me", (req, res) => {
  const data = { name: "Ian" };
  res.send(data);
});

app.get("/cities", (req, res) => {
  const data = { cityList: ["Nairobi", "Tokyo", "Helsinki", "Berlin"] };
  res.send(data);
});

app.get("/countries", (req, res) => {
  const data = {
    countriesList: [
      { country: "France", language: "French", id: "1" },
      { country: "Spain", language: "Spanish", id: 2 },
    ],
  };
  res.send(data);
});

const currentServerRunningTime = new Date();
let visitCount = 0;

app.get("/count", (req, res) => {
  visitCount += 1;
  res.send(`The current counter is ${visitCount}`);
});

app.get("/time", (req, res) => {
  res.send(`The current time is ${currentServerRunningTime}`);
});

const lastHitTimes = {};

app.get("/last-hit/:routeName", (req, res) => {
  const { routeName } = req.params;
  const now = new Date();

  const lastTime = lastHitTimes[routeName];
  lastHitTimes[routeName] = now;

  if (lastTime) {
    const secondsAgo = Math.floor((now - lastTime) / 1000);
    res.send(
      `It has been ${secondsAgo} seconds since /last-hit/${routeName} was it`
    );
  } else {
    res.send(`This is the first time /last-hit/${routeName} has been hit`);
  }
});
