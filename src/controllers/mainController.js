const { validationResult } = require("express-validator");

const colors = {
  pink: {
    name: 'Rosa',
    hexa: '#f14791'
  },
  black: {
    name: 'Negro',
    hexa: '#000000',
  },
  red: {
    name: 'Rojo',
    hexa: '#ff2b2b'
  },
}

module.exports = {
  index: (req, res) => {
    return res.render("index");
  },
  formulario: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let { name, email, color, remember, age } = req.body;

      req.session.user = {
        color: colors[color],
        name: name.toUpperCase(),
        email,
        age,
        remember
      };

      if (remember) {
        res.cookie("user", req.session.user, {
          maxAge: 1000 * 60 * 60 * 24,
        });
      }

      return res.redirect("/user/perfil");
    } else {
      return res.render("index", {
        errors: errors.mapped(),
      });
    }
  },
  borrar: (req, res) => {
    req.session.destroy();
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/");
  },
};
