require('dotenv').config()
const express = require("express");
const cors = require("cors")
const { graphqlHTTP } = require("express-graphql");
const { default: mongoose } = require("mongoose");
const schema = require("./schema/schema");

const app = express();

//allow cross origin requests
app.use(cors())

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.once("open", () => console.log("connected to DB"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
