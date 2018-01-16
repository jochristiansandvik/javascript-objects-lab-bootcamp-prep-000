var recipes = {
  milk: "2dl",
  sugar: "2ts",
  cocoa: "2ts",
};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    Object.assign(object, object, {[key]: value});
    return object;
}

function deleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

