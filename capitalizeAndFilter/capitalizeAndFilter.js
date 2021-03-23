const capitalizeAndFilter = arr => {

  const regex = /^f|F/;

  const newArray = arr.filter(item => !regex.test(item));

  return newArray.map(item => item.toUpperCase());
};

module.exports = capitalizeAndFilter; 
