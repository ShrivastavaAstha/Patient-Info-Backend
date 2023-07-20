const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  PatientName: { type: String },
  PatientAge: { type: Number },
  Gender: { type: String },
  Address: { type: String },
  PatientBg: { type: String },
  Problem: { type: String },
  Date: { type: String },
  Allergy: { type: String },
  MedicalHistory: { type: String },
  Appointment: { type: String },
  RegistrationId: { type: String },
  Registration: { type: String, enum: ["", "Old Patient", "New Patient"] },
});

const patientmodel = mongoose.model("Patient_info", patientSchema);
module.exports = patientmodel;
