const fetch = require('node-fetch');

const fetchQuotes = async() => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');

  const body = await res.json();
  const formattedResponse = body.map(({ character, quote, image }) => ({
    name:character,
    text:quote,
    image,
  }));
  
  return formattedResponse[0];
};
module.exports = fetchQuotes;
