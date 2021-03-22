const copyAndPush = require('./copyAndPush');

describe('copyAndPush function', () => {
  const numbers = [1, 2, 3];

  it('takes in an array and an item and should return a new array with the new item pushed to to the end', () => {

    
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  
  });
  
  it('does not alter the original array', () => {
    
    expect(numbers).toEqual([1, 2, 3]);
    
  });
    
});

    

