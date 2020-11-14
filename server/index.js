const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

// Variables
const app = express();
const PORT = process.env.PORT || 2020;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/video', require('./routers/videoRouter'));


const notFound = (req, res, next) => {
    res.status(404);
    const error = new Error('Not Found');
    next(error);
}

const errorHandler = (error, req, res, next) => {
    res.status(res.statusCode || 500);
    res.json({
        message: error.message
    });
}

app.use(notFound);
app.use(errorHandler);

// Listener
app.listen(PORT, () => console.log(`Application is running on http://localhost:${PORT}`));