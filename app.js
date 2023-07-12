const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return res.json("trial node app")
});

app.listen(3000, () => console.log(`Listening on port 3000`));