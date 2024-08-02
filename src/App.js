import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCardsList } from "./redux/actions/location.action";

const App = () => {
  const [selectionCity, setSelectionCity] = useState(
    localStorage.getItem("city_name") || "City"
  );
  const [selectionLocality, setSelectionLocality] = useState("");
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState([]);
  const [locality, setLocality] = useState([]);

  const dispatch = useDispatch();
  const cityName = localStorage.getItem("city_name");

  useEffect(() => {
    localStorage.setItem("city_name", selectionCity);
  }, [selectionCity]);

  useEffect(() => {
    dispatch(setCardsList(onSuccess, onError));
  }, []);

  const filterCity = locality.filter(
    (city) => city.city_name === selectionCity
  );

  const onSuccess = (data) => {
    setLocality(data.data.data.locality);
    setCity(data.data.data.city);
    setLoading(false);
  };

  const onError = (err) => {
    console.log(err);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Select Your Location</h1>
      <div className="center">
        <select
          name="location"
          id="cars"
          onClick={(e) => setSelectionCity(e.target.value)}
        >
          <option value={cityName ? cityName : "City"} selected>
            {cityName ? cityName : "City"}
          </option>
          {loading
            ? "loading..."
            : city.map((value, id) => (
                <option key={id} value={value.city_name}>
                  {value.city_name}
                </option>
              ))}
        </select>
        {filterCity.length ? (
          <select
            name="location"
            id="cars"
            onClick={(e) => setSelectionLocality(e.target.value)}
          >
            {loading
              ? "loading..."
              : filterCity.map((value, id) => (
                  <option key={id} value={value.locality_name}>
                    {value.locality_name}
                  </option>
                ))}
          </select>
        ) : (
          ""
        )}
      </div>

      <h4>
        <span>location:</span>
        {selectionLocality}
      </h4>
    </div>
  );
};

export default App;
