const express = require("express");
const cors = require("cors");

const { getProfileSummary } = require("./controllers/getProfileSummary");
const { getWorkExperience } = require("./controllers/getWorkExperience");
const { getProjects } = require("./controllers/getProjects");
const timeout = require("./middlewares/timeout");

const app = express();

app.use(cors());

app.get("/getProfileSummary", timeout, getProfileSummary);
app.get("/getWorkExperience", timeout, getWorkExperience);
app.get("/getProjects", timeout, getProjects);

module.exports = app;
