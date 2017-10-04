// Code your solution in this file.


function lowerCaseDrivers(collection) {
  const newCollection = collection.map(function(driver) {
    return driver.toLowerCase();
  });
  return newCollection;
}

function nameToAttributes(collection) {
  const newCollection = [];
  collection.map(function(driver) {
    const nameArr = driver.split(' ');
    const nameObject = {
      firstName: nameArr[0],
      lastName: nameArr[1]
    }
    newCollection.push(nameObject);
  });
  return newCollection;
}
