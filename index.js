var recipes = {}; 

function updateObjectWithKeyAndValue (object, key, value) {
var  newObject = (Object.assign({recipes}, {key:value}));
  return newObject;
}

function updateObjectWithKeyAndValue(object, key, value) {
  object.key = value; 
  return object; 
}
