import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const toDoPersonal = [];
const toDoWork = [];
const currentYear = new Date().getFullYear();
var newListItemPersonal = [];
var newListItemWork = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs", {newListItemPersonal: newListItemPersonal, toDoPersonal: toDoPersonal, currentYear: currentYear});
});

app.get("/index", (req, res) => {
    res.render("index.ejs", {newListItemPersonal: newListItemPersonal, toDoPersonal: toDoPersonal, currentYear: currentYear});
});

app.get("/work", (req, res) => {
    res.render("work.ejs", {newListItemWork: newListItemWork, toDoWork: toDoWork, currentYear: currentYear});
});

app.post("/index", (req, res) => {
    newListItemPersonal = req.body["listPersonal"];
    toDoPersonal.push(newListItemPersonal);
    res.render("index.ejs", {newListItemPersonal: newListItemPersonal, toDoPersonal: toDoPersonal, currentYear: currentYear}); 
});

app.post("/work", (req, res) => {
    newListItemWork = req.body["listWork"];
    toDoWork.push(newListItemWork);
    res.render("work.ejs", {newListItemWork: newListItemWork, toDoWork: toDoWork, currentYear: currentYear}); 
});

app.listen(port, () => {
    console.log(`Server is now running on port ${port}`);
});