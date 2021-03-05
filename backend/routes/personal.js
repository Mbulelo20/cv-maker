const express = require('express')
const router = require('express').Router();
const CV = require('../model/cv');

router.route('/').get((req, res) => {
    CV.find()
    .then(cv => res.json(cv))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const dateOfBirth = req.body.dateOfBirth;
    const region = req.body.region;
    const nationality = req.body.nationality;
    const phone = req.body.phone;
    const email = req.body.email;

    const newCv = new CV({
        firstName,
        lastName,
        gender,
        dateOfBirth,
        region,
        nationality,
        phone,
        email
    });

    newCv.save()
    .then(() => res.json('Success!!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;