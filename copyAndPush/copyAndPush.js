const copyAndPush = (array, num) => {

  const newArray = [];
  
  newArray.push(...array, num);
 
  return newArray;
  
};

module.exports = copyAndPush; 
