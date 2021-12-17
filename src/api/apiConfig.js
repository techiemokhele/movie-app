/* Declare API Endpoints */
const apiConfig = {
  baseApiUrl: "https://api.themoviedb.org/3/",
  apiKey: "d4f7b87d7cedfdfbbb297f46aa3e8779",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
