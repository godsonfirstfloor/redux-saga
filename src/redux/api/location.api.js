import axios from "axios";

export const locationApi = () => {
  return axios.post(
    "https://api.zameensquare.com/api/search/auto-complete?page_no=0",
    {
      city_name: "",
      search_string: "",
    }
  );
};
