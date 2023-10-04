const express = require("express")
const cors = require('cors');
const create = require('./routes/create.route')
const connectDB = require('./database/db.connection')
const getList = require('./routes/getList.route')
const getDetail = require('./routes/getDetails')


const app = express()
app.use(express.json());
app.use(cors());

require("dotenv").config();

connectDB();

const PORT = process.env.PORT||5000

app.use("/createRecord",create)
app.use("/getList",getList)
app.use("/getDetail",getDetail)



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})