const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

const kygoGigs = [
  {
    id: 1,
    name: "Kygo Live at Red Rocks",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kygo_%40_World_Club_Dome_Winter_Edition_2019_01.jpg/640px-Kygo_%40_World_Club_Dome_Winter_Edition_2019_01.jpg",
    description:
      "Experience Kygo's tropical house vibes under the stars at the iconic Red Rocks Amphitheatre.",
    date: new Date(2025, 8, 10).toLocaleDateString(),
    location: "Morrison, Colorado",
  },
  {
    id: 2,
    name: "Kygo Sunset Show",
    image:
      "https://media.pitchfork.com/photos/64f0fdc8245395309dfc5f7e/16:9/w_1280,c_limit/Kygo.jpg",
    description:
      "An intimate beachside sunset set by Kygo with guest vocalists and live instruments.",
    date: new Date(2025, 7, 5).toLocaleDateString(),
    location: "Ibiza, Spain",
  },
  {
    id: 3,
    name: "Kygo: Electric Nights Tour",
    image:
      "https://www.billboard.com/wp-content/uploads/2023/09/Kygo-press-2023-cr-Anton-Santegoeds-billboard-1548.jpg",
    description:
      "Kygo kicks off his international Electric Nights tour with lights, visuals, and iconic tracks.",
    date: new Date(2025, 9, 15).toLocaleDateString(),
    location: "Oslo, Norway",
  },
];

app.get("/gigs", (req, res) => {
  res.send(kygoGigs);
});

app.get("/gigs/:id", (req, res) => {
  const id = Number(req.params.id);
  const findGig = kygoGigs.find((x) => x.id === id);
  res.send(findGig);
});

app.delete("/gigs/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedGigs = kygoGigs.filter((x) => x.id !== id);
  res.json({
    message: `Gig ${id} has been deleted`,
    data: updatedGigs,
  });
});

app.post("/gigs", (req, res) => {
  const newGig = req.body;
  console.log(newGig);
  kygoGigs.push(newGig);
  res.json({
    message: "A new gig has been added",
    data: kygoGigs,
  });
});

module.exports = app;
