const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");
const cache = require("../middleware/cache");

/**
 * @swagger
 * /api/data/{city}:
 *   get:
 *     summary: Get data for a specific city
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: City name
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: City not found
 *       500:
 *         description: Failed to fetch data
 */

router.get("/:city", cache, dataController.getData);

module.exports = router;
