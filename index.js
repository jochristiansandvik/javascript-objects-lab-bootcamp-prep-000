var recipes = {
  milk: "2dl",
  sugar: "2ts",
  cocoa: "2ts",
};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    var newObject =
    Object.assign({}, object, {[key]: value});
    return newObject;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

