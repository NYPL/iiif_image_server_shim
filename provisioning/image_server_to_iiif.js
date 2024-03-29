var typeToDimensionMapping = {
  "v": "2560",
  "q": "1600",
  "w": "760",
  "r": "300",
  "t": "150",
  "f": "140",
  "b": "100"
}
function mapImageServerToIIIF(request, response) {
  // turn query string to hash
  var requestVars = request.variables['query_string'];
  var arrayOfKeyValues;

  if (requestVars) {
  	arrayOfKeyValues = requestVars.split('&');
  }
  
  var paramsHash = {};
  // Turns ['a=1', 'b=2', 'c=3'] and stores it into paramsHash as {"a": "1", "b": "2", "c": "3"}
  for (var i = 0; i < arrayOfKeyValues.length; i++) {
    paramsHash[arrayOfKeyValues[i].split('=')[0]] = arrayOfKeyValues[i].split('=')[1];
  }
  
  // Dimension Stuff
  var imageType = paramsHash['t'].toLowerCase();
  var dimension = typeToDimensionMapping[imageType];
  var urlSegment;
  var crop;
  if (imageType == 'u' || imageType == 'j' || imageType == 's') {
    urlSegment = "full";
  } else {
    urlSegment = "!" + dimension + "," + dimension;
  }
  var identitifier = paramsHash['id']
  if (paramsHash['t'] == 'b') {
    crop = "square"
  } else {
    crop = "full"
  }
  
  // test http://0.0.0.0:8182/iiif/2/TH-09814/full/full/0/default.jpg
  var imageUrl = "http://172.16.1.195:8182/iiif/2/"+ identitifier + "/" + crop + "/" + urlSegment +"/0/default.jpg"
  
  //  When DR-1470 is complete, delegates.rb will need to know what derivative type is being requested.
  if (paramsHash['t'] == 'u' || paramsHash['t'] == 'j' || paramsHash['t'] == 's') {
    request.headersOut['X-Ufile'] = 'true';
    return imageUrl + "?ufile=true";
  }  else {
    return imageUrl + "?type=" + paramsHash['t'];
  }
}