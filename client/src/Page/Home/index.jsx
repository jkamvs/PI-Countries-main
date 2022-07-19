import { useEffect } from "react";
import { fetchAllCountries } from "../../Store/slices/countries";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { All_Countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <div>
      {All_Countries.length === 0 ? (
        <p>Cargando</p>
      ) : (
        All_Countries.map((item, index) => (
          <div key={index}>
            <img src={item.Img_Bandera} alt={item.Nombre} />
            <h3>{item.Nombre}</h3>
            <p>{item.Continente}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default Home;
