import { useEffect } from "react";
import { fetchAllCountries } from "../../Store/slices/countries";
import { useDispatch, useSelector } from "react-redux";
import CardCountries from "../../components/Card_Countries/Card_Countries";
import SearchCountries from "../../components/Search_Countries/Search_Countries";

const Home = () => {
  const { All_Countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <div>
      <SearchCountries />
      <br />
      {All_Countries.length === 0 ? (
        <p>Cargando</p>
      ) : (
        All_Countries.map((item, index) => (
          <CardCountries
            idCountrie={item.ID_Pais}
            Nombre={item.Nombre}
            Continente={item.Continente}
            Img_Bandera={item.Img_Bandera}
            key={index}
          />
        ))
      )}
    </div>
  );
};
export default Home;
