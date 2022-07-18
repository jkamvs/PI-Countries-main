const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Actividad_Turistica",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Dificultad: {
        //Entre 1 y 5
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1, 5]
        },
      },
      Duracion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Temporada: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["Verano", "Otoño", "Invierno", "Primavera"]],
        },
        
      },
    },
    { timestamps: false }
  );
};
