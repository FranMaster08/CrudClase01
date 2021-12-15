const db = require("../database/models");
const alumnosModelOld = {
  findAll: () => {
    return db.Alumnos.findAll()
      .then((item) => item)
      .catch((err) => {throw new Error ('sin conexion')});
  },
  findOne: (id) => {
    return db.Alumnos.findByPk(id)
      .then((item) => item)
      .catch((err) => {throw new Error ('sin conexion')});
  },
  create: (alumno) => {
    return db.Alumnos.create(alumno)
      .then((item) => item)
      .catch((err) => {throw new Error ('sin conexion')});
  },
  update: (alumno, id) => {
    return db.Alumnos.update(alumno, {
      where: {
        id: id,
      },
    })
      .then((item) => item)
      .catch((err) => {throw new Error ('sin conexion')});
  },
  delete: (id) => {
   return db.Alumnos.destroy({
      where: {
        id: id,
      },
    })
      .then((item) => item)
      .catch((err) => {throw new Error ('sin conexion')});
  },
};


module.exports = alumnosModelOld;
