var typeToDimensionMapping = {
  "v": "2560",
  "q": "1600",
  "w": "760",
  "r": "300",
  "t": "150",
  "f": "140"
}

function mapImageServerToIIIF(request, response) {
  // TODO: b,d,x types
  // TODO: Account for output filetype
  // TODO: Case insensitivity of "t" param key.
  // TODO: Look into case sensitivity of 'type' value
  // TODO: Support 'download' parameter
  // turn query string to hash
  var arrayOfKeyValues = request.variables['query_string'].split('&');
  var paramsHash = {};

  // Turns ['a=1', 'b=2', 'c=3'] and stores it into paramsHash as {"a": "1", "b": "2", "c": "3"}
  for (var i = 0; i < arrayOfKeyValues.length; i++) {
    paramsHash[arrayOfKeyValues[i].split('=')[0]] = arrayOfKeyValues[i].split('=')[1];
  }

  // Dimension Stuff
  var imageType = paramsHash['t'].toLowerCase();
  var dimension = typeToDimensionMapping[imageType];
  var urlSegment = "!" + dimension + "," + dimension;

  // Identifier Stuff
  var identitifier = paramsHash['id']
  return "http://cantaloupe-qa-357093291.us-east-1.elb.amazonaws.com/iiif/2/"+ identitifier + "/full/"+ urlSegment +"/0/default.jpg"
}
