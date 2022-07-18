const fs = require("fs");
let All_Countrie = fs.readFileSync("./src/data/All.json");
let Countries = JSON.parse(All_Countrie);
const { Actividad_Turistica, Pais } = require("../db");

const Carry_Countrie = async () => {
  
  let data = await Pais.findAll();
  if (data.length === 0) {
    Countries.forEach(async (item) => {
      const jane = Pais.build({
        ID_Pais: item.cca3,
        Nombre: item.name.common,
        Img_Bandera: item.flags[1],
        Continente: item.continents,
        Capital: item.capital,
        Subregion: item.subregion,
        Area: item.area,
        Poblacion:item.population
      });
      await jane.save();
    });
  }
};

module.exports = {
  Carry_Countrie,
};
