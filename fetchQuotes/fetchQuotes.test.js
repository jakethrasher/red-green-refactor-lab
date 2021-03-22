const fetchQuotes = require('./fetchQuotes');

describe('fetchQuotes function', () => {
  it('should fetch data and return a formatted response', async() => {
    const data = await fetchQuotes();

    // const expectation = {
    //   name: 'Bender',
    //   text: 'Bite my shiny metal ass.',
    //   image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
    // }; 
  
    expect(data).toEqual(expect.objectContaining({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
        
    }));
  });
});
