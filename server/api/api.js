const axios = require("axios").default;
// const express = require("express"), router = express.router();

module.exports = app => {
    app.get("/play", (req, res) => {
        console.log("fuck you");
        axios.get("https://deckofcardsapi.com/api/deck/new/").then((res) => {
            ans = [...res];
            console.log(ans);
        })
        // https://deckofcardsapi.com/api/deck/new/
        console.log("made API call");
        res.json("info", ans);
    });
}