// dotenv must be required as early as possible for env vars to propogate
require("dotenv").config();
const app = require('./app');
const port = 3001;
const host = process.env.SERVER_HOST;


app.listen(port, host, () => console.log(`Server is running on ${port}`));
