// Code your solution in this file.


function lowerCaseDrivers(collection) {
  const newCollection = collection.map(function(driver) {
    return driver.toLowerCase();
  });
  return newCollection;
}
