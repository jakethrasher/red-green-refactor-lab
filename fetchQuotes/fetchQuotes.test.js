const fetchQuotes = require('./fetchQuotes');

describe('fetchQuotes function', () => {
    
  it('should fetch data and return a formatted response', async() => {
    const data = await fetchQuotes();

    expect(data).toEqual(expect.objectContaining({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
        
    }));
  });
});
