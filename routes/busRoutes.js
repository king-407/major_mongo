const express = require("express");
const {
  createBus,
  getBus,
  update,
  findBusById,
} = require("../controller/busController");
const router = express.Router();
router.post("/createBus", createBus);
router.get("/getBus", getBus);
router.put("/update/:busId", update);
router.get("/spec/:id", findBusById);
module.exports = router;
