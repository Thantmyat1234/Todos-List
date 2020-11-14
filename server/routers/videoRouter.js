const router = require("express").Router();
const fetch = require("node-fetch");

router.get('/', (req, res) => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${process.env.PLAYLIST_ID}&key=${process.env.GOOGLE_API_KEY}&part=snippet&maxResults=50`)
        .then(response => response.json())
        .then(data => res.json(data.items))
        .catch(error => {
            res.json({
                error
            });
        });
});

module.exports = router;