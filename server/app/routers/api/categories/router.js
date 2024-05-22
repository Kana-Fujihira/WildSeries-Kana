// const express = require("express");

// const router = express.Router();

// const { browse } = require("../../../controllers/programActions");

// router.get("/", browse);

// // ...

const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read } = require("../../../controllers/categoryActions");

// Route to get a list of items
router.get("/", browse);
router.get("/:id", read); // Complete path is: /api/programs/:id

/* ************************************************************************* */

module.exports = router;
