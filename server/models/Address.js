const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  houseName: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  locality: {
    type: String,
    required: true 
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  isDefault: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Address", addressSchema);
