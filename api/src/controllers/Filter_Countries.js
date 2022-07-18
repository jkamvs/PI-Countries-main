const { Actividad_Turistica, Pais } = require("../db");

const Filter_Countries = async (item) => {
  let new_countries = await Pais.findAll({
    include:Actividad_Turistica
  });
  return new_countries.filter((index) => {
    return index.Nombre.includes(item);
  });
};

module.exports = {
  Filter_Countries,
};
