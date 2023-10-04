const express = require("express");
const router = express.Router();
const meterData = require('../db_models/data.model')

router.get('/', async (req, res) => {
    if(!req.query.objectId){
        res.status(400).json("object Id required in params")
    }

    let objectId = req.query.objectId

    meterData.find({_id:objectId})
        .then((data)=> res.json(data))
        .catch((error) => res.status(500).json({error: "Internal server error"}))
   
  });

  module.exports = router;