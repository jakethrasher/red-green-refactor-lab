const fetch = require('node-fetch');

const fetchQuotes = async() => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes');

  const body = await res.json();
  const formattedResponse = body.map(item => ({
    name:item.character,
    text:item.quote,
    image:item.image,
  }));
  
  return formattedResponse[0];
};
module.exports = fetchQuotes;
