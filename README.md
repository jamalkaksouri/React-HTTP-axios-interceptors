<p align="center">
  <img src="https://github.com/jamalkaksouri/React-HTTP-axios-interceptors/blob/master/public/cover.png">
  <img src="https://github.com/jamalkaksouri/React-HTTP-axios-interceptors/blob/master/public/conver2.png">
</p>


# How to setup

1. Change the base url:

`axios.defaults.baseURL = "http://localhost:4000";`

`axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";`

2. In terminal(in vs-code) enter `npm start` or `yarn start`
3. In another terminal enter `json-server --watch data/db.json --port 3006` for run local database.(if port 3006 is bussy, change it)

# If want to use the default base URL for a specific component using the below function

```javascript
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

instance.defaults.headers.common["Authorization"] = "AUTH_TUKEN";

export default instance;

```
