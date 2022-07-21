import style from "./Card.module.css";
import { Link } from "react-router-dom";
export default function CardCountries({
  idCountrie,
  Img_Bandera,
  Nombre,
  Continente,
}) {
  return (
    <Link to={`/Home/${idCountrie}`} className={style.card}>
      <img className={style.img} src={Img_Bandera} alt={Nombre} />
      <div className={style.contexto}>
        <h3 className={style.countrie}>{Nombre}</h3>
        <p className={style.continente}>Continente: {Continente}</p>
      </div>
    </Link>
  );
}
