# Bootcamp GoStack - RocketSeat

RocketSeat bootcamp, an educational startup that teaches basic and avanced topics in software development though Javascript stack Node.js, React.JS and React Native.

## Challenge 03

Basic ReactJS concepts, using TDD to develop a GitHub repositories simple app, to list, add and remove Git repositories, integrated with the api from [Challenge 02](thub.com/dhaubert/rocketseat-gostack-desafio02)

### Config API
Change baseURL of the running API on `services/api.js`. Default address is localhost on port 3333.

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
```

### Dependencies
Run inside the project directory to install all the dependencies.
```bash
yarn
```

### Development
Run inside the project directory. Make sure you have port 3333 available. It will automatically open a browser window on http://localhost:3000/.
```bash
yarn start
```

### Tests
Run inside the project directory. 2 tests, 1 suites. Implemented on Jest.
```bash
yarn test
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
