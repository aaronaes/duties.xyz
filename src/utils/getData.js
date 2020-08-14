import { execute, makePromise } from "apollo-link";
import { HttpLink } from "apollo-link-http";

const token = "033dd18b57d8391b42f307dd51443d";

const graphLink = new HttpLink({
  uri: "https://graphql.datocms.com/",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`
  }
});

const getData = operation => {
  return makePromise(execute(graphLink, operation))
    .then(response => response)
    .catch(err => {
      console.log(err);
    });
};

export default getData;
