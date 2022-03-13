const router = require("express").Router();
const {
  createTripProcess,
  getAllTripsProcess,
  getOneTripProcess,
  getAllPlacesFromTripProcess,
  updateTripProcess,
  deleteTripProcess,
} = require("../controllers/trips.controller");
const { verifyToken } = require("../middleware/jwt.middleware");

// Create one trip
router.post("/create", verifyToken, createTripProcess);

// List all trips
router.get("/", verifyToken, getAllTripsProcess);

// Get one trip
router.get("/:id", verifyToken, getOneTripProcess);

// Get all places from one trip
router.get("/:id/places", verifyToken, getAllPlacesFromTripProcess);

// Update one trip
router.patch("/update/:id", verifyToken, updateTripProcess);

// Delete one trip
router.delete("/delete/:id", verifyToken, deleteTripProcess);

module.exports = router;
