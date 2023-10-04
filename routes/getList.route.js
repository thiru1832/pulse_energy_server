const express = require("express");
const router = express.Router();
const meterData = require('../db_models/data.model')

router.get('/', async (req, res) => {
    if(!req.query.charge_point_id){
        res.status(400).json("charge_point_id required in params")
    }

    let charge_point_id = req.query.charge_point_id

    const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit:5
    }

   const count =  await meterData.countDocuments({charge_point_id:charge_point_id})
   console.log(count)

   if (count == 0 || count <= pageOptions.page*pageOptions.limit){
    res.status(200).json("charge point id does not exist or page limit exceeded ")
   }
   else{
    meterData.find({charge_point_id:charge_point_id})
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .then( (doc)=> {
        res.status(200).json(doc);
    })
    .catch((err)=>{
        console.log(err);
    })

   }
  });

  module.exports = router;