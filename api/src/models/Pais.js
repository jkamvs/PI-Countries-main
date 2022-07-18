const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Pais",
    {
      ID_Pais: {
        type: DataTypes.STRING,
        primaryKey: true,
        max: 3,
        min: 3,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Img_Bandera: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Continente: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      Capital: {
        type: DataTypes.ARRAY(DataTypes.STRING),
       // allowNull: false,
      },
      Subregion: {
        type: DataTypes.STRING,
      },
      Area: {
        type: DataTypes.DECIMAL,
      },
      Poblacion: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
