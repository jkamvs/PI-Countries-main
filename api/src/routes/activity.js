const { Router } = require("express");
const { Create_Activity } = require("../controllers/Create_Activity");

const router = Router();

router.post("/", async (req, res) => {
  res.status(201).json( await Create_Activity(req.body));
});

module.exports = router;
