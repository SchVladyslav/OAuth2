const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  projectSecret: {
    type: String,
    required: true,
    unique: true,
  },
  projectID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURLs: [
    {
      type: String,
      required: true,
    },
  ],
  scope: {
    type: String,
    enum: ["default", "email", "phone", "full"],
    default: "default",
  },
  createdBy: {
    type: Schema.ObjectId,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("Project", projectSchema);
