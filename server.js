const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.URI;
const Person = require("./models/person");

mongoose
  .connect(URI)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const createPersons = async () => {
  try {
    await Person.insertMany([
      {
        name: "Juliette",
        age: 23,
        favoriteFood: [
          "Croissant",
          "Cordon Bleu",
          "Terrine de poulet",
          "Profiteroles",
        ],
      },
      {
        name: "Franco",
        age: 27,
        favoriteFood: ["Lasagna", "Fettucini Alfredo", "Ravioli", "Risotto"],
      },
      {
        name: "Fumiko",
        age: 23,
        favoriteFood: ["Sushi", "Takoyaki", "Ramen", "Tonkatsu"],
      },
      {
        name: "Mohamed",
        age: 30,
        favoriteFood: ["Couscous", "Tajin", "Salade Mechweya", "Meloukheya"],
      },
    ]);
    console.log("Users were created successfully");
  } catch (error) {}
};
// createPersons();

const getPersons = async () => {
  try {
    const data = await Person.find();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// getPersons();

const getPersonByName = async () => {
  try {
    const data = await Person.find({ name: "Franco" });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// getPersonByName();

const getPersonByAge = async () => {
  try {
    const data = await Person.findOne({ age: { $lt: 25 } });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// getPersonByAge()

const getPersonByFood = async () => {
  try {
    const data = await Person.findOne({ favoriteFood: "Sushi" });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// getPersonByFood()

const getPersonById = async () => {
  try {
    const data = await Person.findById("67868b18dc26cde780305f29");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// getPersonById();

const updatePersonById = async () => {
  try {
    const data = await Person.findByIdAndUpdate("67868b18dc26cde780305f29", {
      $push: {
        favoriteFood: "hamburger",
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// updatePersonById();

const updatePersonByName = async () => {
  try {
    const data = await Person.findOneAndUpdate(
      { name: "Juliette" },
      {
        $set: {
          age: 20,
        },
      },
      {
        new: true,
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// updatePersonByName();

const deletePersonById = async () => {
  try {
    const data = await Person.findByIdAndDelete("67868b18dc26cde780305f28");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// deletePersonById();
const deletePersons = async () => {
  try {
    const data = await Person.deleteMany({ name: "Franco" });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// deletePersons()

const queryUsers = async () => {
  try {
    const data = await Person.find().select({ age: 0 });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
queryUsers();
