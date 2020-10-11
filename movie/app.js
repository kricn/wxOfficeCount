const express = require("express")
const router = require("./routers")
const db = require("./db")
const bodyParser = require("body-parser")

const app = express()

app.set("views", "./views")
app.set("view engine", "ejs")

;(async () => {
	await db
	app.use(router)
})()


app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3009, () => {
	console.log("server is running...")
})
