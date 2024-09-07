const express = require("express");
const router = express.Router();
const { Doctor } = require("../models/Doctor");
const { Compounder } = require("../models/Compounder");

router.get("/doctors", async (req, res) => {
  const allDoctors = await Doctor.find();
  // filter out name, degree and timing from allDoctors
  // and send the result
  const schedule = allDoctors.map((doctor) => {
    const timing = doctor.timing;
    return {
      name: doctor.name,
      degree: doctor.degree,
      timing: [
        [timing.sunAT, timing.sunDT],
        [timing.monAT, timing.monDT],
        [timing.tueAT, timing.tueDT],
        [timing.wedAT, timing.wedDT],
        [timing.thuAT, timing.thuDT],
        [timing.friAT, timing.friDT],
        [timing.satAT, timing.satDT],
      ],
    };
  });

  res.send(schedule);
});

router.get("/compounders", async (req, res) => {
  const allCompounders = await Compounder.find();
  // filter out name, degree and timing from allCompounders
  // and send the result
  const schedule = allCompounders.map((compounder) => {
    const timing = compounder.timing;
    return {
      name: compounder.name,
      degree: compounder.degree,
      timing: [
        [timing.sunAT, timing.sunDT],
        [timing.monAT, timing.monDT],
        [timing.tueAT, timing.tueDT],
        [timing.wedAT, timing.wedDT],
        [timing.thuAT, timing.thuDT],
        [timing.friAT, timing.friDT],
        [timing.satAT, timing.satDT],
      ],
    };
  });
  res.send(schedule);
});

router.get("/available", async (req, res) => {
  const allDoctors = await Doctor.find();
  const currDoctors = allDoctors.filter((doctor) => {
    return doctor.availability;
  });

  // filter out name, degree from currDoctors
  // and send the result
  const available = currDoctors.map((doctor) => {
    return {
      name: doctor.name,
      degree: doctor.degree,
    };
  });

  res.send(available);
});

module.exports = router;
