const app = require("./app.js");

const fetchGigData = async () => {
  try {
    const response = await fetch("http://localhost:3000/gigs");
    const gigData = await response.json();
    return gigData;
  } catch (error) {
    throw error;
  }
};

const fetchGigDataById = async (index) => {
  try {
    const response = await fetch(`http://localhost:3000/gigs/${index}`);
    const gigDataById = await response.json();
    console.log(gigDataById);
    return gigDataById;
  } catch (error) {
    throw error;
  }
};

const deleteGigDataById = async (index) => {
  try {
    const response = await fetch(`http://localhost:3000/gigs/${index}`, {
      method: "DELETE",
    });
    const updatedGigs = await response.json();
    return updatedGigs;
  } catch (error) {
    throw error;
  }
};

const updateGigData = async (gigData) => {
  try {
    const response = await fetch("http://localhost:3000/gigs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tells server we’re sending JSON
      },
      body: JSON.stringify(gigData),
    });
    const updatedGigs = await response.json();
    console.log(updatedGigs);
    return updatedGigs;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchGigData,
  fetchGigDataById,
  deleteGigDataById,
  updateGigData,
};
