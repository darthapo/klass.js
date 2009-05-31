// Todo, support defining default argument values...

function parseArgs() {
  var callerArgs = parseArgs.caller.arguments;
  for (var i=0; i < arguments.length; i++) {
    var matchArgs = [],
        matchNames = [],
        matchCount = 0;
        matched = { matchedOn:i };
    for (var prop in arguments[i]) {
      if(arguments[i].hasOwnProperty(prop)) {
        matchArgs.push( arguments[i][prop] );
        matchNames.push( prop );
      }
    }   
    if(callerArgs.length == matchArgs.length) {
      for (var j=0; j < matchArgs.length; j++) {
        if( callerArgs[j] && callerArgs[j].constructor === matchArgs[j] ) {
          matched[matchNames[j]] = callerArgs[j]; matchCount++;
        } else {
          isMatched = false;
        }
      };
      if(matchCount == callerArgs.length)
        return matched;
    } 
  }
  return { matchedOn:-1 };
//  throw "Parameters didn't match any definitions!";
}