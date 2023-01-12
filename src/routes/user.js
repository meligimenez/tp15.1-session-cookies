const router = require("express").Router();
const { perfil, next } = require("../controllers/userController");


router
  .get("/perfil", perfil)
  .get("/next", next)

module.exports = router;
