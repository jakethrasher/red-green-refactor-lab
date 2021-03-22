const capitalizeAndFilter = arr => {

  const newArray = [];

  const regex = /^f|F/;

  for(const item of arr){
    if(!regex.test(item.charAt(0)))
    {
      newArray.push(item.toUpperCase());
    }
  }
  console.log(newArray);

  return newArray;
};

module.exports = capitalizeAndFilter; 
