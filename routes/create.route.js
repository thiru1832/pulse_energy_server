const express = require("express");
const router = express.Router();
const meterData = require('../db_models/data.model')

router.post("/",async (req,res) =>{
    try {
        const data = req.body.data;

        charge_point_id = data.charge_point_id
        payload = data.payload
        console.log(req.body);
        const newData = new meterData ({ 
            charge_point_id,
            payload
         });
    
        newData.save()
        .then(() => res.status(201).json({ message: 'data registered successfully' }))
        .catch((error) => res.status(500).json({ error: 'Internal server error' }));
    
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;