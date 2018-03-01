var recipes = {}; 

function updateObjectWithKeyAndValue (object, key, value) {
var newObject = Object.assign(object, object.key = value);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value; 
  return object; 
}
