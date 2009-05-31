var typeOf = (function(){
  var arrayCtor  = (new Array).constructor,
      dateCtor   = (new Date).constructor,
      regexpCtor = (new RegExp).constructor;

  return function(v) {
    var typeStr = typeof(v);
    if (typeStr == "object" || typeStr == 'function') {
      if (v === null) return "null";
      if (v.constructor == arrayCtor) return "array";
      if (v.constructor == dateCtor) return "date";
      if (v.constructor == regexpCtor) return "regexp";
    }
    return typeStr;
  }
})();