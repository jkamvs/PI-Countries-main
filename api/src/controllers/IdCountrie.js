const { Actividad_Turistica, Pais } = require("../db");

const ID_Countrie = async(id) => {
  let new_countries = await Pais.findAll({
    include:Actividad_Turistica
  });
  let dato = new_countries.filter((item) => {
     return item.ID_Pais === id;
  });
  return dato;
};

module.exports = {ID_Countrie};
