module.exports = (sequelize, dataTypes) => {
const Alumno = sequelize.define(`Alumnos`, {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    nombre :{
        type: dataTypes.STRING,
    },
    apellido :{
        type: dataTypes.STRING,
    },
    pass :{
        type: dataTypes.STRING,
    }
  },{
      timestamps: false,
  });
  return Alumno;
};
