import { getAPIUrl } from "../config.js";

function constructOptions(httpVerb, requestBody) {
    const options = {
      method: httpVerb,
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    options.body = JSON.stringify(requestBody);
    return options;
}

function fetchFromServer(path, httpVerb, requestBody) {
    const options = constructOptions(httpVerb, requestBody);
  
    return fetch(`${getAPIUrl()}${path}`, options)
        .then(response => response.json())
        .then(jsonResponseToParse => {
        if (jsonResponseToParse.failure) { 
          throw jsonResponseToParse; 
        }
        return jsonResponseToParse;
      });
}

export { fetchFromServer };