const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { default: mongoose } = require("mongoose");
const schema = require("./schema/schema");

const app = express();

mongoose.connect(
  "mongodb+srv://admin-hhs:Hs337515@cluster0.kojcq.mongodb.net/?retryWrites=true&w=majority"
);
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
