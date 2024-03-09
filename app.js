const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5050

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use()

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))