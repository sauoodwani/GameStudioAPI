const express = require('express');
const router = express.Router();

router.get('/api/users/', (req, res) => {
    res.send('Hello World');
});

module.exports = router;