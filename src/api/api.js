import axios from "axios";

const BASE_URL = "https://wookie.codesubmit.io";

export const getMovies = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(`${BASE_URL}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};
