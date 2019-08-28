const router = require("express").Router();

const Donuts = require("./donut-model");

// CREATE - POST /api/donuts
router.post("/", (req, res) => {
  const donut = req.body;
  Donuts.add(donut)
    .then(donut => {
      res.status(201).json(donut);
    })
    .catch(err => {
      res.status(500).json({ message: "Error creating donut" });
    });
});

// READ - GET /api/donuts
router.get("/", (req, res) => {
  Donuts.find()
    .then(donuts => {
      res.status(200).json(donuts);
    })
    .catch(error => {
      res.status(500).json({ message: "Error retrieving donuts" });
    });
});

// READ - GET /api/donuts/:id
router.get("/:id", (req, res) => {});

// UPDATE - PUT /api/donuts/:id
router.put("/:id", (req, res) => {});

// DELETE - DELETE /api/donuts/:id
router.delete("/:id", (req, res) => {});

module.exports = router;
