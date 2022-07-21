const { Router } = require("express");
const { Todo_los_Paises } = require("../controllers/Countries_All");
const { Filter_Countries } = require("../controllers/Filter_Countries");
const { ID_Countrie } = require("../controllers/IdCountrie");
const router = Router();

router.get("/", async (req, res) => {
  if (req.query.name) {
    return res.status(200).json(await Filter_Countries(req.query.name.toUpperCase()));
  }
  res.status(200).json(await Todo_los_Paises());
});
router.get("/:idPais", async (req, res) => {
  res.status(200).json(await ID_Countrie(req.params.idPais));
});

module.exports = router;
