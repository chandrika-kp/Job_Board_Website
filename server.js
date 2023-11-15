const express = require("express");
const mongoose = require("mongoose");

const app = express();

// database connection
const uri = "mongodb://127.0.0.1:27017/JobBoard"
mongoose.connect(uri)
        .then(() => console.log("DB connected"))
        .catch((err) => console.log(err));

const jobsSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    about: String,
    responsibility: String,
    openings: Number,
    salary: String,
    experience: String,
    type: String
});

const jobsModel = mongoose.model('Jobs', jobsSchema);

app.get('/jobs', async (req, res) => {
    try {
        const jobs = await jobsModel.find();
        console.log('Number of jobs:', jobs.length); // Add this line to log the number of jobs retrieved
        console.log('Jobs:', jobs); // Add this line to log the actual jobs retrieved
        res.json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// const PORT = process.env.PORT || 8080;
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
