const { Actividad_Turistica, Pais } = require("../db");

const Create_Activity = async ({
  Nombre,
  Dificultad,
  Duracion,
  Temporada,
  Nombre_Pais,
}) => {
  try {
    const New_Activity = await Actividad_Turistica.create({
      Nombre,
      Dificultad,
      Duracion,
      Temporada,
    });
    const PaisDB = await Pais.findAll({
      where: { Nombre: Nombre_Pais },
    });
    await New_Activity.addPais(PaisDB);
    return { Data: "Dato creado Exitosamente" };
  } catch (err) {
    return {
      Info: "Error al registrar",
      Error: err,
    };
  }
};

module.exports = {
  Create_Activity,
};
