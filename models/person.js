const mongoose = require("mongoose");
const schema = mongoose.Schema;

const personSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFood: [String],
});

module.exports = Person = mongoose.model("persons", personSchema);
