import Booklist from "./components/Booklist";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AddBook from "./components/AddBook";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <Booklist />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
