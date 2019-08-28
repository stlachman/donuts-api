const router = require("express").Router();

// CREATE - POST /api/donuts
router.post("/", (req, res) => {});

// READ - GET /api/donuts
router.get("/", (req, res) => {
  res.status(200).json({ message: "Donuts" });
});

// READ - GET /api/donuts/:id
router.get("/:id", (req, res) => {});

// UPDATE - PUT /api/donuts/:id
router.put("/:id", (req, res) => {});

// DELETE - DELETE /api/donuts/:id
router.delete("/:id", (req, res) => {});

module.exports = router;
