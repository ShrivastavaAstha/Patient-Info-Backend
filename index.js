const express = require("express");
const app = express();
const patientmodel = require("./models/patientinfo");
const { connectDatabase } = require("./connection/connect");
app.use(express.json());

app.post("/api/addbtn", async (req, res) => {
  try {
    const newobj = {
      PatientName: req.body.patientname,
      PatientAge: req.body.patientage,
      Gender: req.body.gender,
      Address: req.body.address,
      PatientBg: req.body.patientbg,
      Problem: req.body.problem,
      Date: req.body.date,
      Allergy: req.body.allergy,
      MedicalHistory: req.body.medicalhistory,
      Appointment: req.body.appointment,
      RegistrationId: req.body.registrationid,
      Registration: req.body.registration,
    };
    console.log(newobj);
    const patientinfo = new patientmodel(newobj);
    await patientinfo.save();
    return res.status(200).json({ success: true, message: "Data Saved" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/api/getpatient", async (req, res) => {
  try {
    const patient = await patientmodel.find();
    return res.status(200).json({ success: true, patient: patient });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
connectDatabase();
const PORT = 5000;
app.listen(PORT, async () => {
  await console.log(`Server is running at Port ${PORT}`);
});
