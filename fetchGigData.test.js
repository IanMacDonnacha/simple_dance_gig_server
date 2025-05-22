const {
  fetchGigData,
  fetchGigDataById,
  deleteGigDataById,
  updateGigData,
} = require("./fetchGigData");

describe("fetchGigData", () => {
  test("Aquire all gigs from GET /gigs route", async () => {
    const response = await fetchGigData();
    expect(response).toEqual([
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
    ]);
  });
});

describe("fetchGigDataById", () => {
  test("Aquire a single gig by its specific id", async () => {
    const response = await fetchGigDataById(2);
    expect(response).toEqual({
      id: 2,
      name: "Kygo Sunset Show",
      image:
        "https://media.pitchfork.com/photos/64f0fdc8245395309dfc5f7e/16:9/w_1280,c_limit/Kygo.jpg",
      description:
        "An intimate beachside sunset set by Kygo with guest vocalists and live instruments.",
      date: new Date(2025, 7, 5).toLocaleDateString(),
      location: "Ibiza, Spain",
    });
  });
});

describe("deleteGigDataById", () => {
  test("Aquire gigs list with the deleted gig missing", async () => {
    const response = await deleteGigDataById(2);
    expect(response.message).toEqual("Gig 2 has been deleted");
    expect(response.data).toEqual([
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
        id: 3,
        name: "Kygo: Electric Nights Tour",
        image:
          "https://www.billboard.com/wp-content/uploads/2023/09/Kygo-press-2023-cr-Anton-Santegoeds-billboard-1548.jpg",
        description:
          "Kygo kicks off his international Electric Nights tour with lights, visuals, and iconic tracks.",
        date: new Date(2025, 9, 15).toLocaleDateString(),
        location: "Oslo, Norway",
      },
    ]);
  });
});

describe("updateGigData", () => {
  test("Aquire updated gigs list after new gig has been posted", async () => {
    const gigData = {
      id: 4,
      name: "Kygo: Midnight Vibes",
      image:
        "https://media.gq-magazine.co.uk/photos/5f3ab237bb3c18d13b09ff0e/3:2/w_1500,h_1000,c_limit/kygo-06-gq-17jul20_b.jpg",
      description:
        "A one-night-only rooftop set by Kygo with chill tropical house tracks and city skyline views.",
      date: "11/20/2025",
      location: "Los Angeles, USA",
    };
    const response = await updateGigData(gigData);
    expect(response.data).toEqual([
      {
        id: 1,
        name: "Kygo Live at Red Rocks",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kygo_%40_World_Club_Dome_Winter_Edition_2019_01.jpg/640px-Kygo_%40_World_Club_Dome_Winter_Edition_2019_01.jpg",
        description:
          "Experience Kygo's tropical house vibes under the stars at the iconic Red Rocks Amphitheatre.",
        date: "9/10/2025",
        location: "Morrison, Colorado",
      },
      {
        id: 2,
        name: "Kygo Sunset Show",
        image:
          "https://media.pitchfork.com/photos/64f0fdc8245395309dfc5f7e/16:9/w_1280,c_limit/Kygo.jpg",
        description:
          "An intimate beachside sunset set by Kygo with guest vocalists and live instruments.",
        date: "8/5/2025",
        location: "Ibiza, Spain",
      },
      {
        id: 3,
        name: "Kygo: Electric Nights Tour",
        image:
          "https://www.billboard.com/wp-content/uploads/2023/09/Kygo-press-2023-cr-Anton-Santegoeds-billboard-1548.jpg",
        description:
          "Kygo kicks off his international Electric Nights tour with lights, visuals, and iconic tracks.",
        date: "10/15/2025",
        location: "Oslo, Norway",
      },
      {
        id: 4,
        name: "Kygo: Midnight Vibes",
        image:
          "https://media.gq-magazine.co.uk/photos/5f3ab237bb3c18d13b09ff0e/3:2/w_1500,h_1000,c_limit/kygo-06-gq-17jul20_b.jpg",
        description:
          "A one-night-only rooftop set by Kygo with chill tropical house tracks and city skyline views.",
        date: "11/20/2025",
        location: "Los Angeles, USA",
      },
    ]);
  });
});
