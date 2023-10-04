const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    charge_point_id: String,
    payload: String
});

const MeterData = mongoose.model("data",dataSchema);

module.exports = MeterData