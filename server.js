const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Mars");
});

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`${host} is listening on ${port}`);
})