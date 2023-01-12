const router = require("express").Router();
const { index, formulario, borrar } = require("../controllers/mainController");
const formValidator = require("../validators/formValidator");

router
  .get("/", index)
  .post("/", formValidator, formulario)
  .get("/borrar", borrar);

module.exports = router;
