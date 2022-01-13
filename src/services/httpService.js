import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.defaults.timeout = 5000;

// axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

//? request, response
// axios.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     // Edit response ...
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject();
//   }
// );

// axios.interceptors.request.use(
//   (request) => {
//     console.log(request);
//     // Edit request ...
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject();
//   }
// );

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
