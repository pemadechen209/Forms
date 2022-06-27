const express = require('express');
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const app = express();
app.use(cors(corsOptions));
const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'];


app.get('/', (req, res, next) => {
    try {
        return res.status(200).json({
            status: 200,
            data: projects
        })
    } catch (error) {
        return res.status(409).json({
            status: 409,
            message: error?.message ? error?.message : 'Failed to list all projects'
        })
    }
})

app.listen(4000, () => console.log('Listening to port 4000'))