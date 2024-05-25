import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "First Name is required."],
    trim: true,
    minLength: [2, "First Name must be larger than 2 characters"],
    maxLength: [50, "First Name must be lesser than 50 characters"],
  },
  lastname: {
    type: String,
    required: [true, "Last Name is required."],
    trim: true,
    minLength: [2, "Last Name must be larger than 2 characters"],
    maxLength: [50, "Last Name must be lesser than 50 characters"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required."],
    trim: true,
    minLength: [2, "Phone number must be larger than 2 characters"],
    maxLength: [10, "Phone number must be lesser than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  message: {
    type: String,
    required: [true, "Message is required."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;