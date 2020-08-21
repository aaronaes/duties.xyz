import { execute, makePromise } from "apollo-link";
import { HttpLink } from "apollo-link-http";

const token = "daf1c99998d196724b941d5cce121c";

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
      throw new Error(err);
    });
};

export default getData;
