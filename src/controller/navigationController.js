const model = require("../model");

const navigationController = {
  getHome: (req, res, next) => {
    model.alumnosOld.findAll()
      .then((item) => {
        res.render("index", { title: "Crud", data: item });
      })
      .catch((err) => next(err));
  },
  getActualizar: (req, res, next) => {
    const {id} = req.params;
    model.alumnosOld.findOne(id)
      .then((item) => {
        res.render("update", { title: "Crud", alumno: item });
      })
      .catch((err) => next(err));
  },
  crearAlumno :(req, res, next) => {
    const {nombre, apellido ,pass} = req.body;
    model.alumnosOld.create({nombre, apellido ,pass})
    .then((item) => {
      res.redirect('/');
    })
    .catch((err) => next(err));
  },
  borrarAlumno : (req, res, next) => {
    const {id} = req.params;
    model.alumnosOld.delete(id)
    .then((item) => {
      res.redirect('/');
    })
    .catch((err) => next(err));
  },
  actualizarAlumnos :(req, res, next) => {
    const {nombre, apellido ,pass} = req.body;
    const {id} = req.params;
    model.alumnosOld.update({nombre, apellido ,pass},id)
    .then((item) => {
      res.redirect('/');
    })
    .catch((err) => next(err));
  },

};

module.exports = navigationController;
