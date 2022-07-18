const { Actividad_Turistica, Pais } = require("../db");
const Todo_los_Paises = async () => {
  let new_countries = await Pais.findAll({
    include:Actividad_Turistica
  });
  return new_countries;
};

module.exports = {
  Todo_los_Paises,
};
