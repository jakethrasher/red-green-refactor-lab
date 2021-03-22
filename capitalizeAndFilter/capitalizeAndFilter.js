const capitalizeAndFilter = arr => {

  const newArray = [];

  const regex = /[fF]/;
  
  for(const item of arr){
    if(!regex.test(item))
    {
      newArray.push(item.toUpperCase());
    }
  }
  return newArray;
};

module.exports = capitalizeAndFilter; 
