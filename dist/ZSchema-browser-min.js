require=function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){function c(){}var d=b.exports={};d.nextTick=function(){var a="undefined"!=typeof window&&window.setImmediate,b="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(a)return function(a){return window.setImmediate(a)};if(b){var c=[];return window.addEventListener("message",function(a){var b=a.source;if((b===window||null===b)&&"process-tick"===a.data&&(a.stopPropagation(),c.length>0)){var d=c.shift();d()}},!0),function(a){c.push(a),window.postMessage("process-tick","*")}}return function(a){setTimeout(a,0)}}(),d.title="browser",d.browser=!0,d.env={},d.argv=[],d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.binding=function(){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(){throw new Error("process.chdir is not supported")}},{}],2:[function(a,b){"use strict";b.exports={INVALID_TYPE:"Expected type {0} but found type {1}",INVALID_FORMAT:"Object didn't pass validation for format {0}: {1}",ENUM_MISMATCH:"No enum match for: {0}",ANY_OF_MISSING:"Data does not match any schemas from 'anyOf'",ONE_OF_MISSING:"Data does not match any schemas from 'oneOf'",ONE_OF_MULTIPLE:"Data is valid against more than one schema from 'oneOf'",NOT_PASSED:"Data matches schema from 'not'",ARRAY_LENGTH_SHORT:"Array is too short ({0}), minimum {1}",ARRAY_LENGTH_LONG:"Array is too long ({0}), maximum {1}",ARRAY_UNIQUE:"Array items are not unique (indexes {0} and {1})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",MULTIPLE_OF:"Value {0} is not a multiple of {1}",MINIMUM:"Value {0} is less than minimum {1}",MINIMUM_EXCLUSIVE:"Value {0} is equal or less than exclusive minimum {1}",MAXIMUM:"Value {0} is greater than maximum {1}",MAXIMUM_EXCLUSIVE:"Value {0} is equal or greater than exclusive maximum {1}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({0}), minimum {1}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({0}), maximum {1}",OBJECT_MISSING_REQUIRED_PROPERTY:"Missing required property: {0}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed: {0}",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {0} (due to key: {1})",MIN_LENGTH:"String is too short ({0} chars), minimum {1}",MAX_LENGTH:"String is too long ({0} chars), maximum {1}",PATTERN:"String does not match pattern {0}: {1}",KEYWORD_TYPE_EXPECTED:"Keyword '{0}' is expected to be of type '{1}'",KEYWORD_UNDEFINED_STRICT:"Keyword '{0}' must be defined in strict mode",KEYWORD_UNEXPECTED:"Keyword '{0}' is not expected to appear in the schema",KEYWORD_MUST_BE:"Keyword '{0}' must be {1}",KEYWORD_DEPENDENCY:"Keyword '{0}' requires keyword '{1}'",KEYWORD_PATTERN:"Keyword '{0}' is not a valid RegExp pattern: {1}",KEYWORD_VALUE_TYPE:"Each element of keyword '{0}' array must be a '{1}'",UNKNOWN_FORMAT:"There is no validation function for format '{0}'",CUSTOM_MODE_FORCE_PROPERTIES:"{0} must define at least one property if present",REF_UNRESOLVED:"Reference has not been resolved during compilation: {0}",UNRESOLVABLE_REFERENCE:"Reference could not be resolved: {0}",SCHEMA_NOT_REACHABLE:"Validator was not able to read schema with uri: {0}",SCHEMA_TYPE_EXPECTED:"Schema is expected to be of type 'object'",SCHEMA_NOT_AN_OBJECT:"Schema is not an object: {0}",ASYNC_TIMEOUT:"{0} asynchronous task(s) have timed out after {1} ms",PARENT_SCHEMA_VALIDATION_FAILED:"Schema failed to validate against its parent schema, see inner errors for details."}},{}],3:[function(a,b){var c={date:function(a){if("string"!=typeof a)return!0;var b=/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(a);return null===b?!1:b[2]<"01"||b[2]>"12"||b[3]<"01"||b[3]>"31"?!1:!0},"date-time":function(a){if("string"!=typeof a)return!0;var b=a.toLowerCase().split("t");if(!c.date(b[0]))return!1;var d=/^([0-9]{2}):([0-9]{2}):([0-9]{2})(.[0-9]+)?(z|([+-][0-9]{2}:[0-9]{2}))$/.exec(b[1]);return null===d?!1:d[1]>"23"||d[2]>"59"||d[3]>"59"?!1:!0},email:function(a){return"string"!=typeof a?!0:/^[a-zA-Z0-9+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/.test(a)},hostname:function(a){if("string"!=typeof a)return!0;var b=/^[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?(\.[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?)*$/.test(a);if(b){if(a.length>255)return!1;for(var c=a.split("."),d=0;d<c.length;d++)if(c[d].length>63)return!1}return b},"host-name":function(a){return c.hostname.call(this,a)},ipv4:function(a){return"string"!=typeof a?!0:-1===a.indexOf(".")?!1:/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(a)},ipv6:function(a){return"string"!=typeof a||/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(a)},regex:function(a){try{return RegExp(a),!0}catch(b){return!1}},uri:function(a){return this.options.strictUris?c["strict-uri"].apply(this,arguments):"string"!=typeof a||RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?").test(a)},"strict-uri":function(a){return"string"!=typeof a||RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!10(?:\\.\\d{1,3}){3})(?!127(?:\\.\\d{1,3}){3})(?!169\\.254(?:\\.\\d{1,3}){2})(?!192\\.168(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/[^\\s]*)?$","i").test(a)}};b.exports=c},{}],4:[function(a,b,c){"use strict";var d=a("./FormatValidators"),e=a("./Report"),f=a("./Utils"),g={multipleOf:function(a,b,c){"number"==typeof c&&"integer"!==f.whatIs(c/b.multipleOf)&&a.addError("MULTIPLE_OF",[c,b.multipleOf])},maximum:function(a,b,c){"number"==typeof c&&(b.exclusiveMaximum!==!0?c>b.maximum&&a.addError("MAXIMUM",[c,b.maximum]):c>=b.maximum&&a.addError("MAXIMUM_EXCLUSIVE",[c,b.maximum]))},exclusiveMaximum:function(){},minimum:function(a,b,c){"number"==typeof c&&(b.exclusiveMinimum!==!0?c<b.minimum&&a.addError("MINIMUM",[c,b.minimum]):c<=b.minimum&&a.addError("MINIMUM_EXCLUSIVE",[c,b.minimum]))},exclusiveMinimum:function(){},maxLength:function(a,b,c){"string"==typeof c&&c.length>b.maxLength&&a.addError("MAX_LENGTH",[c.length,b.maxLength])},minLength:function(a,b,c){"string"==typeof c&&c.length<b.minLength&&a.addError("MIN_LENGTH",[c.length,b.minLength])},pattern:function(a,b,c){"string"==typeof c&&RegExp(b.pattern).test(c)===!1&&a.addError("PATTERN",[b.pattern,c])},additionalItems:function(a,b,c){Array.isArray(c)&&b.additionalItems===!1&&Array.isArray(b.items)&&c.length>b.items.length&&a.addError("ARRAY_ADDITIONAL_ITEMS")},items:function(){},maxItems:function(a,b,c){Array.isArray(c)&&c.length>b.maxItems&&a.addError("ARRAY_LENGTH_LONG",[c.length,b.maxItems])},minItems:function(a,b,c){Array.isArray(c)&&c.length<b.minItems&&a.addError("ARRAY_LENGTH_SHORT",[c.length,b.minItems])},uniqueItems:function(a,b,c){if(Array.isArray(c)&&b.uniqueItems===!0){var d=[];f.isUniqueArray(c,d)===!1&&a.addError("ARRAY_UNIQUE",d)}},maxProperties:function(a,b,c){if("object"===f.whatIs(c)){var d=Object.keys(c).length;d>b.maxProperties&&a.addError("OBJECT_PROPERTIES_MAXIMUM",[d,b.maxProperties])}},minProperties:function(a,b,c){if("object"===f.whatIs(c)){var d=Object.keys(c).length;d<b.minProperties&&a.addError("OBJECT_PROPERTIES_MINIMUM",[d,b.minProperties])}},required:function(a,b,c){if("object"===f.whatIs(c))for(var d=b.required.length;d--;){var e=b.required[d];void 0===c[e]&&a.addError("OBJECT_MISSING_REQUIRED_PROPERTY",[e])}},additionalProperties:function(a,b,c){return void 0===b.properties&&void 0===b.patternProperties?g.properties.call(this,a,b,c):void 0},patternProperties:function(a,b,c){return void 0===b.properties?g.properties.call(this,a,b,c):void 0},properties:function(a,b,c){if("object"===f.whatIs(c)){var d=void 0!==b.properties?b.properties:{},e=void 0!==b.patternProperties?b.patternProperties:{};if(b.additionalProperties===!1){var g=Object.keys(c),h=Object.keys(d),i=Object.keys(e);g=f.difference(g,h);for(var j=i.length;j--;)for(var k=RegExp(i[j]),l=g.length;l--;)k.test(g[l])===!0&&g.splice(l,1);g.length>0&&a.addError("OBJECT_ADDITIONAL_PROPERTIES",[g])}}},dependencies:function(a,b,d){if("object"===f.whatIs(d))for(var e=Object.keys(b.dependencies),g=e.length;g--;){var h=e[g];if(d[h]){var i=b.dependencies[h];if("object"===f.whatIs(i))c.validate.call(this,a,i,d);else for(var j=i.length;j--;){var k=i[j];void 0===d[k]&&a.addError("OBJECT_DEPENDENCY_KEY",[k,h])}}}},"enum":function(a,b,c){for(var d=!1,e=b.enum.length;e--;)if(f.areEqual(c,b.enum[e])){d=!0;break}d===!1&&a.addError("ENUM_MISMATCH",[c])},type:function(a,b,c){var d=f.whatIs(c);"string"==typeof b.type?d===b.type||"integer"===d&&"number"===b.type||a.addError("INVALID_TYPE",[b.type,d]):-1!==b.type.indexOf(d)||"integer"===d&&-1!==b.type.indexOf("number")||a.addError("INVALID_TYPE",[b.type,d])},allOf:function(a,b,d){for(var e=b.allOf.length;e--&&c.validate.call(this,a,b.allOf[e],d)!==!1;);},anyOf:function(a,b,d){for(var f=[],g=!1,h=b.anyOf.length;h--&&g===!1;){var i=new e(a);f.push(i),g=c.validate.call(this,i,b.anyOf[h],d)}g===!1&&a.addError("ANY_OF_MISSING",void 0,f)},oneOf:function(a,b,d){for(var f=0,g=[],h=b.oneOf.length;h--;){var i=new e(a);g.push(i),c.validate.call(this,i,b.oneOf[h],d)===!0&&f++}0===f?a.addError("ONE_OF_MISSING",void 0,g):f>1&&a.addError("ONE_OF_MULTIPLE")},not:function(a,b,d){var f=new e(a);c.validate.call(this,f,b.not,d)===!0&&a.addError("NOT_PASSED")},definitions:function(){},format:function(a,b,c){var e=d[b.format];"function"==typeof e?2===e.length?a.addAsyncTask(e,[c],function(d){d!==!0&&a.addError("INVALID_FORMAT",[b.format,c])}):e.call(this,c)!==!0&&a.addError("INVALID_FORMAT",[b.format,c]):a.addError("UNKNOWN_FORMAT",[b.format])}},h=function(a,b,d){var e=d.length;if(Array.isArray(b.items))for(;e--;)e<b.items.length?(a.path.push("["+e+"]"),c.validate.call(this,a,b.items[e],d[e]),a.path.pop()):"object"==typeof b.additionalItems&&(a.path.push("["+e+"]"),c.validate.call(this,a,b.additionalItems,d[e]),a.path.pop());else if("object"==typeof b.items)for(;e--;)a.path.push("["+e+"]"),c.validate.call(this,a,b.items,d[e]),a.path.pop()},i=function(a,b,d){var e=b.additionalProperties;(e===!0||void 0===e)&&(e={});for(var f=b.properties?Object.keys(b.properties):[],g=b.patternProperties?Object.keys(b.patternProperties):[],h=Object.keys(d),i=h.length;i--;){var j=h[i],k=d[j],l=[];-1!==f.indexOf(j)&&l.push(b.properties[j]);for(var m=g.length;m--;){var n=g[m];RegExp(n).test(j)===!0&&l.push(b.patternProperties[n])}for(0===l.length&&e!==!1&&l.push(e),m=l.length;m--;)a.path.push(j),c.validate.call(this,a,l[m],k),a.path.pop()}};c.validate=function(a,b,c){var d=f.whatIs(b);if("object"!==d)return a.addError("SCHEMA_NOT_AN_OBJECT",[d]),!1;var e=Object.keys(b);if(0===e.length)return!0;var j=!1;if(a.rootSchema||(a.rootSchema=b,j=!0),void 0!==b.$ref){for(var k=99;b.$ref&&k>0;){if(!b.__$refResolved){a.addError("REF_UNRESOLVED",[b.$ref]);break}if(b.__$refResolved===b)break;b=b.__$refResolved,e=Object.keys(b),k--}if(0===k)throw new Error("Circular dependency by $ref references!")}for(var l=e.length;l--&&(!g[e[l]]||(g[e[l]].call(this,a,b,c),!a.errors.length)););return"object"==typeof c&&(Array.isArray(c)?h.call(this,a,b,c):null!==c&&i.call(this,a,b,c)),j&&(a.rootSchema=void 0),0===a.errors.length}},{"./FormatValidators":3,"./Report":6,"./Utils":10}],5:[function(){"function"!=typeof Number.isFinite&&(Number.isFinite=function(a){return"number"!=typeof a?!1:a!==a||1/0===a||a===-1/0?!1:!0})},{}],6:[function(a,b){(function(c){"use strict";function d(a){this.parentReport=a||void 0,this.errors=[],this.path=[],this.asyncTasks=[]}var e=a("./Errors");d.prototype.isValid=function(){if(this.asyncTasks.length>0)throw new Error("Async tasks pending, can't answer isValid");return 0===this.errors.length},d.prototype.addAsyncTask=function(a,b,c){this.asyncTasks.push([a,b,c])},d.prototype.processAsyncTasks=function(a,b){function d(){c.nextTick(function(){var a=0===j.errors.length,c=a?void 0:j.errors;b(c,a)})}function e(a){return function(b){i||(a(b),0===--g&&d())}}var f=a||2e3,g=this.asyncTasks.length,h=g,i=!1,j=this;if(0===g||this.errors.length>0)return void d();for(;h--;){var k=this.asyncTasks[h];k[0].apply(null,k[1].concat(e(k[2])))}setTimeout(function(){g>0&&(i=!0,j.addError("ASYNC_TIMEOUT",[g,f]),b(j.errors,!1))},f)},d.prototype.getPath=function(){var a=["#"];return this.parentReport&&(a=a.concat(this.parentReport.path)),a=a.concat(this.path),1===a.length?"#/":a.join("/")},d.prototype.addError=function(a,b,c){if(!a)throw new Error("No errorCode passed into addError()");if(!e[a])throw new Error("No errorMessage known for code "+a);b=b||[];for(var d=b.length,f=e[a];d--;)f=f.replace("{"+d+"}",b[d]);var g={code:a,message:f,path:this.getPath()};if(void 0!==c){for(Array.isArray(c)||(c=[c]),g.inner=[],d=c.length;d--;)for(var h=c[d],i=h.errors.length;i--;)g.inner.push(h.errors[i]);0===g.inner.length&&(g.inner=void 0)}this.errors.push(g)},b.exports=d}).call(this,a("+NscNm"))},{"+NscNm":1,"./Errors":2}],7:[function(a,b,c){"use strict";function d(a){return decodeURIComponent(a).replace(/~[0-1]/g,function(a){return"~1"===a?"/":"~"})}function e(a){var b=a.indexOf("#");return-1===b?a:a.slice(0,b)}function f(a){var b=a.indexOf("#"),c=-1===b?void 0:a.slice(b+1);return c}function g(a,b){if("object"==typeof a&&null!==a){if(!b||a.id===b)return a;var c,d;if(Array.isArray(a)){for(c=a.length;c--;)if(d=g(a[c],b))return d}else{var e=Object.keys(a);for(c=e.length;c--;)if(d=g(a[e[c]],b))return d}}}var h=a("./SchemaCompilation"),i=a("./SchemaValidation");c.cacheSchemaByUri=function(a,b){var c=e(a);c&&(this.cache[c]=b)},c.removeFromCacheByUri=function(a){var b=e(a);b&&(this.cache[b]=void 0)},c.getSchemaByUri=function(a,b,c){var j=e(b),k=f(b),l=j?this.cache[j]:c;if(l&&j){var m=l!==c;if(m){a.path.push(j);var n=h.compileSchema.call(this,a,l);if(n&&(n=i.validateSchema.call(this,a,l)),a.path.pop(),!n)return void 0}}if(l&&k)for(var o=k.split("/"),p=0,q=o.length;q>p;p++){var r=d(o[p]);l=0===p?g(l,r):l[r]}return l}},{"./SchemaCompilation":8,"./SchemaValidation":9}],8:[function(a,b,c){"use strict";function d(a){return/^https?:\/\//.test(a)}function e(a,b){if(d(b))return b;var c=a.join(""),e=c.match(/[^#/]+$/);e&&(c=c.slice(0,e.index));var f=c+b;return f=f.replace(/##/,"#")}function f(a,b,c,d){if(b=b||[],c=c||[],d=d||[],"object"!=typeof a||null===a)return b;"string"==typeof a.id&&c.push(a.id),"string"==typeof a.$ref&&b.push({ref:e(c,a.$ref),key:"$ref",obj:a,path:d.join("/")}),"string"==typeof a.$schema&&b.push({ref:e(c,a.$schema),key:"$schema",obj:a,path:d.join("/")});var g;if(Array.isArray(a))for(g=a.length;g--;)d.push(g),f(a[g],b,c,d),d.pop();else{var h=Object.keys(a);for(g=h.length;g--;)0!==h[g].indexOf("__$")&&(d.push(h[g]),f(a[h[g]],b,c,d),d.pop())}return"string"==typeof a.id&&c.pop(),b}var g=a("./Report"),h=a("./SchemaCache"),i=function(a,b){for(var d=b.length,e=0;d--;){var f=new g(a),h=c.compileSchema.call(this,f,b[d]);h&&e++,a.errors=a.errors.concat(f.errors)}return e},j=function(a,b){var c,d=0;do{for(var e=a.errors.length;e--;)"UNRESOLVABLE_REFERENCE"===a.errors[e].code&&a.errors.splice(e,1);c=d,d=i.call(this,a,b)}while(d!==b.length&&d!==c);return a.isValid()};c.compileSchema=function(a,b){if("string"==typeof b){var c=h.getSchemaByUri.call(this,a,b);if(!c)return a.addError("SCHEMA_NOT_REACHABLE",[b]),!1;b=c}if(Array.isArray(b))return j.call(this,a,b);if(b.__$compiled)return!0;b.id&&h.cacheSchemaByUri.call(this,b.id,b);for(var e=f.call(this,b),g=e.length;g--;){var i=e[g],k=h.getSchemaByUri.call(this,a,i.ref,b);if(!(k||d(i.ref)&&this.options.ignoreUnresolvableReferences===!0))return a.path.push(i.path),a.addError("UNRESOLVABLE_REFERENCE",[i.ref]),a.path.pop(),!1;i.obj["__"+i.key+"Resolved"]=k}var l=a.isValid();return l?b.__$compiled=!0:b.id&&h.removeFromCacheByUri.call(this,b.id),l}},{"./Report":6,"./SchemaCache":7}],9:[function(a,b,c){"use strict";var d=a("./FormatValidators"),e=a("./JsonValidation"),f=a("./Report"),g=a("./Utils"),h={$ref:function(a,b){"string"!=typeof b.$ref&&a.addError("KEYWORD_TYPE_EXPECTED",["$ref","string"])},$schema:function(a,b){"string"!=typeof b.$schema&&a.addError("KEYWORD_TYPE_EXPECTED",["$schema","string"])},multipleOf:function(a,b){"number"!=typeof b.multipleOf?a.addError("KEYWORD_TYPE_EXPECTED",["multipleOf","number"]):b.multipleOf<=0&&a.addError("KEYWORD_MUST_BE",["multipleOf","strictly greater than 0"])},maximum:function(a,b){"number"!=typeof b.maximum&&a.addError("KEYWORD_TYPE_EXPECTED",["maximum","number"])},exclusiveMaximum:function(a,b){"boolean"!=typeof b.exclusiveMaximum?a.addError("KEYWORD_TYPE_EXPECTED",["exclusiveMaximum","boolean"]):void 0===b.maximum&&a.addError("KEYWORD_DEPENDENCY",["exclusiveMaximum","maximum"])},minimum:function(a,b){"number"!=typeof b.minimum&&a.addError("KEYWORD_TYPE_EXPECTED",["minimum","number"])},exclusiveMinimum:function(a,b){"boolean"!=typeof b.exclusiveMinimum?a.addError("KEYWORD_TYPE_EXPECTED",["exclusiveMinimum","boolean"]):void 0===b.minimum&&a.addError("KEYWORD_DEPENDENCY",["exclusiveMinimum","minimum"])},maxLength:function(a,b){"integer"!==g.whatIs(b.maxLength)?a.addError("KEYWORD_TYPE_EXPECTED",["maxLength","integer"]):b.maxLength<0&&a.addError("KEYWORD_MUST_BE",["maxLength","greater than, or equal to 0"])},minLength:function(a,b){"integer"!==g.whatIs(b.minLength)?a.addError("KEYWORD_TYPE_EXPECTED",["minLength","integer"]):b.minLength<0&&a.addError("KEYWORD_MUST_BE",["minLength","greater than, or equal to 0"])},pattern:function(a,b){if("string"!=typeof b.pattern)a.addError("KEYWORD_TYPE_EXPECTED",["pattern","string"]);else try{RegExp(b.pattern)}catch(c){a.addError("KEYWORD_PATTERN",["pattern",b.pattern])}},additionalItems:function(a,b){var d=g.whatIs(b.additionalItems);"boolean"!==d&&"object"!==d?a.addError("KEYWORD_TYPE_EXPECTED",["additionalItems",["boolean","object"]]):"object"===d&&(a.path.push("additionalItems"),c.validateSchema.call(this,a,b.additionalItems),a.path.pop())},items:function(a,b){var d=g.whatIs(b.items);if("object"===d)a.path.push("items"),c.validateSchema.call(this,a,b.items),a.path.pop();else if("array"===d)for(var e=b.items.length;e--;)a.path.push("items["+e+"]"),c.validateSchema.call(this,a,b.items[e]),a.path.pop();else a.addError("KEYWORD_TYPE_EXPECTED",["items",["array","object"]]);this.options.forceAdditional===!0&&void 0===b.additionalItems&&Array.isArray(b.items)&&a.addError("KEYWORD_UNDEFINED_STRICT",["additionalItems"]),this.options.assumeAdditional===!0&&void 0===b.additionalItems&&Array.isArray(b.items)&&(b.additionalItems=!1)},maxItems:function(a,b){"number"!=typeof b.maxItems?a.addError("KEYWORD_TYPE_EXPECTED",["maxItems","integer"]):b.maxItems<0&&a.addError("KEYWORD_MUST_BE",["maxItems","greater than, or equal to 0"])},minItems:function(a,b){"integer"!==g.whatIs(b.minItems)?a.addError("KEYWORD_TYPE_EXPECTED",["minItems","integer"]):b.minItems<0&&a.addError("KEYWORD_MUST_BE",["minItems","greater than, or equal to 0"])},uniqueItems:function(a,b){"boolean"!=typeof b.uniqueItems&&a.addError("KEYWORD_TYPE_EXPECTED",["uniqueItems","boolean"])},maxProperties:function(a,b){"integer"!==g.whatIs(b.maxProperties)?a.addError("KEYWORD_TYPE_EXPECTED",["maxProperties","integer"]):b.maxProperties<0&&a.addError("KEYWORD_MUST_BE",["maxProperties","greater than, or equal to 0"])},minProperties:function(a,b){"integer"!==g.whatIs(b.minProperties)?a.addError("KEYWORD_TYPE_EXPECTED",["minProperties","integer"]):b.minProperties<0&&a.addError("KEYWORD_MUST_BE",["minProperties","greater than, or equal to 0"])},required:function(a,b){if("array"!==g.whatIs(b.required))a.addError("KEYWORD_TYPE_EXPECTED",["required","array"]);else if(0===b.required.length)a.addError("KEYWORD_MUST_BE",["required","an array with at least one element"]);else{for(var c=b.required.length;c--;)"string"!=typeof b.required[c]&&a.addError("KEYWORD_VALUE_TYPE",["required","string"]);g.isUniqueArray(b.required)===!1&&a.addError("KEYWORD_MUST_BE",["required","an array with unique items"])}},additionalProperties:function(a,b){var d=g.whatIs(b.additionalProperties);"boolean"!==d&&"object"!==d?a.addError("KEYWORD_TYPE_EXPECTED",["additionalProperties",["boolean","object"]]):"object"===d&&(a.path.push("additionalProperties"),c.validateSchema.call(this,a,b.additionalProperties),a.path.pop())},properties:function(a,b){if("object"!==g.whatIs(b.properties))return void a.addError("KEYWORD_TYPE_EXPECTED",["properties","object"]);for(var d=Object.keys(b.properties),e=d.length;e--;){var f=d[e],h=b.properties[f];a.path.push("properties["+f+"]"),c.validateSchema.call(this,a,h),a.path.pop()}this.options.forceAdditional===!0&&void 0===b.additionalProperties&&a.addError("KEYWORD_UNDEFINED_STRICT",["additionalProperties"]),this.options.assumeAdditional===!0&&void 0===b.additionalProperties&&(b.additionalProperties=!1),this.options.forceProperties===!0&&0===d.length&&a.addError("CUSTOM_MODE_FORCE_PROPERTIES",["properties"])},patternProperties:function(a,b){if("object"!==g.whatIs(b.patternProperties))return void a.addError("KEYWORD_TYPE_EXPECTED",["patternProperties","object"]);for(var d=Object.keys(b.patternProperties),e=d.length;e--;){var f=d[e],h=b.patternProperties[f];try{RegExp(f)}catch(i){a.addError("KEYWORD_PATTERN",["patternProperties",f])}a.path.push("patternProperties["+f+"]"),c.validateSchema.call(this,a,h),a.path.pop()}this.options.forceProperties===!0&&0===d.length&&a.addError("CUSTOM_MODE_FORCE_PROPERTIES",["patternProperties"])},dependencies:function(a,b){if("object"!==g.whatIs(b.dependencies))a.addError("KEYWORD_TYPE_EXPECTED",["dependencies","object"]);else for(var d=Object.keys(b.dependencies),e=d.length;e--;){var f=d[e],h=b.dependencies[f],i=g.whatIs(h);if("object"===i)a.path.push("dependencies["+f+"]"),c.validateSchema.call(this,a,h),a.path.pop();else if("array"===i){var j=h.length;for(0===j&&a.addError("KEYWORD_MUST_BE",["dependencies","not empty array"]);j--;)"string"!=typeof h[j]&&a.addError("KEYWORD_VALUE_TYPE",["dependensices","string"]);g.isUniqueArray(h)===!1&&a.addError("KEYWORD_MUST_BE",["dependencies","an array with unique items"])}else a.addError("KEYWORD_VALUE_TYPE",["dependencies","object or array"])}},"enum":function(a,b){Array.isArray(b.enum)===!1?a.addError("KEYWORD_TYPE_EXPECTED",["enum","array"]):0===b.enum.length?a.addError("KEYWORD_MUST_BE",["enum","an array with at least one element"]):g.isUniqueArray(b.enum)===!1&&a.addError("KEYWORD_MUST_BE",["enum","an array with unique elements"])},type:function(a,b){var c=["array","boolean","integer","number","null","object","string"],d=c.join(","),e=Array.isArray(b.type);if(e){for(var f=b.type.length;f--;)-1===c.indexOf(b.type[f])&&a.addError("KEYWORD_TYPE_EXPECTED",["type",d]);g.isUniqueArray(b.type)===!1&&a.addError("KEYWORD_MUST_BE",["type","an object with unique properties"])}else"string"==typeof b.type?-1===c.indexOf(b.type)&&a.addError("KEYWORD_TYPE_EXPECTED",["type",d]):a.addError("KEYWORD_TYPE_EXPECTED",["type",["string","array"]]);this.options.noEmptyStrings===!0&&("string"===b.type||e&&-1!==b.type.indexOf("string"))&&void 0===b.minLength&&(b.minLength=1),this.options.forceProperties===!0&&("object"===b.type||e&&-1!==b.type.indexOf("object"))&&void 0===b.properties&&void 0===b.patternProperties&&a.addError("KEYWORD_UNDEFINED_STRICT",["properties"]),this.options.forceItems===!0&&("array"===b.type||e&&-1!==b.type.indexOf("array"))&&void 0===b.items&&a.addError("KEYWORD_UNDEFINED_STRICT",["items"]),this.options.forceMaxLength===!0&&("string"===b.type||e&&-1!==b.type.indexOf("string"))&&void 0===b.maxLength&&void 0===b.format&&void 0===b.enum&&a.addError("KEYWORD_UNDEFINED_STRICT",["maxLength"])},allOf:function(a,b){if(Array.isArray(b.allOf)===!1)a.addError("KEYWORD_TYPE_EXPECTED",["allOf","array"]);else if(0===b.allOf.length)a.addError("KEYWORD_MUST_BE",["allOf","an array with at least one element"]);else for(var d=b.allOf.length;d--;)a.path.push("allOf["+d+"]"),c.validateSchema.call(this,a,b.allOf[d]),a.path.pop()},anyOf:function(a,b){if(Array.isArray(b.anyOf)===!1)a.addError("KEYWORD_TYPE_EXPECTED",["anyOf","array"]);else if(0===b.anyOf.length)a.addError("KEYWORD_MUST_BE",["anyOf","an array with at least one element"]);else for(var d=b.anyOf.length;d--;)a.path.push("anyOf["+d+"]"),c.validateSchema.call(this,a,b.anyOf[d]),a.path.pop()},oneOf:function(a,b){if(Array.isArray(b.oneOf)===!1)a.addError("KEYWORD_TYPE_EXPECTED",["oneOf","array"]);else if(0===b.oneOf.length)a.addError("KEYWORD_MUST_BE",["oneOf","an array with at least one element"]);else for(var d=b.oneOf.length;d--;)a.path.push("oneOf["+d+"]"),c.validateSchema.call(this,a,b.oneOf[d]),a.path.pop()},not:function(a,b){"object"!==g.whatIs(b.not)?a.addError("KEYWORD_TYPE_EXPECTED",["not","object"]):(a.path.push("not"),c.validateSchema.call(this,a,b.not),a.path.pop())},definitions:function(a,b){if("object"!==g.whatIs(b.definitions))a.addError("KEYWORD_TYPE_EXPECTED",["definitions","object"]);else for(var d=Object.keys(b.definitions),e=d.length;e--;){var f=d[e],h=b.definitions[f];a.path.push("definitions["+f+"]"),c.validateSchema.call(this,a,h),a.path.pop()}},format:function(a,b){"string"!=typeof b.format?a.addError("KEYWORD_TYPE_EXPECTED",["format","string"]):void 0===d[b.format]&&a.addError("UNKNOWN_FORMAT",[b.format])},id:function(a,b){"string"!=typeof b.id&&a.addError("KEYWORD_TYPE_EXPECTED",["id","string"])},title:function(a,b){"string"!=typeof b.title&&a.addError("KEYWORD_TYPE_EXPECTED",["title","string"])},description:function(a,b){"string"!=typeof b.description&&a.addError("KEYWORD_TYPE_EXPECTED",["description","string"])},"default":function(){}},i=function(a,b){for(var d=b.length;d--;)c.validateSchema.call(this,a,b[d]);return a.isValid()};c.validateSchema=function(a,b){if(Array.isArray(b))return i.call(this,a,b);if(b.__$validated)return!0;var c=b.$schema&&b.id!==b.$schema;if(c)if(b.__$schemaResolved&&b.__$schemaResolved!==b){var d=new f(a),g=e.validate.call(this,d,b.__$schemaResolved,b);g===!1&&a.addError("PARENT_SCHEMA_VALIDATION_FAILED",null,d)}else this.options.ignoreUnresolvableReferences!==!0&&a.addError("REF_UNRESOLVED",[b.$schema]);if(this.options.noTypeless===!0){if(void 0!==b.type){var j=[];Array.isArray(b.anyOf)&&(j=j.concat(b.anyOf)),Array.isArray(b.oneOf)&&(j=j.concat(b.oneOf)),Array.isArray(b.allOf)&&(j=j.concat(b.allOf)),j.forEach(function(a){a.type||(a.type=b.type)})}void 0===b.type&&void 0===b.anyOf&&void 0===b.oneOf&&void 0===b.not&&void 0===b.$ref&&a.addError("KEYWORD_UNDEFINED_STRICT",["type"])}for(var k=Object.keys(b),l=k.length;l--;){var m=k[l];0!==m.indexOf("__")&&(void 0!==h[m]?h[m].call(this,a,b):c||this.options.noExtraKeywords===!0&&a.addError("KEYWORD_UNEXPECTED",[m]))}var n=a.isValid();return n&&(b.__$validated=!0),n}},{"./FormatValidators":3,"./JsonValidation":4,"./Report":6,"./Utils":10}],10:[function(a,b,c){"use strict";c.whatIs=function(a){var b=typeof a;return"object"===b?null===a?"null":Array.isArray(a)?"array":"object":"number"===b?Number.isFinite(a)?a%1===0?"integer":"number":Number.isNaN(a)?"not-a-number":"unknown-number":b},c.areEqual=function d(a,b){if(a===b)return!0;var e,f;if(Array.isArray(a)&&Array.isArray(b)){if(a.length!==b.length)return!1;for(f=a.length,e=0;f>e;e++)if(!d(a[e],b[e]))return!1;return!0}if("object"===c.whatIs(a)&&"object"===c.whatIs(b)){var g=Object.keys(a),h=Object.keys(b);if(!d(g,h))return!1;for(f=g.length,e=0;f>e;e++)if(!d(a[g[e]],b[g[e]]))return!1;return!0}return!1},c.isUniqueArray=function(a,b){var d,e,f=a.length;for(d=0;f>d;d++)for(e=d+1;f>e;e++)if(c.areEqual(a[d],a[e]))return b&&b.push(d,e),!1;return!0},c.difference=function(a,b){for(var c=[],d=a.length;d--;)-1===b.indexOf(a[d])&&c.push(a[d]);return c},c.clone=function(a){if("object"!=typeof a||null===a)return a;var b,c;if(Array.isArray(a))for(b=[],c=a.length;c--;)b[c]=a[c];else{b={};var d=Object.keys(a);for(c=d.length;c--;){var e=d[c];b[e]=a[e]}}return b}},{}],ZSchema:[function(a,b){b.exports=a("C768cZ")},{}],C768cZ:[function(a,b){"use strict";function c(a){if(this.cache={},"object"==typeof a){for(var b=Object.keys(a),c=b.length;c--;){var d=b[c];if(void 0===k[d])throw new Error("Unexpected option passed to constructor: "+d)}this.options=a}else this.options=j.clone(k);this.options.strictMode===!0&&(this.options.forceAdditional=!0,this.options.forceItems=!0,this.options.forceMaxLength=!0,this.options.forceProperties=!0,this.options.noExtraKeywords=!0,this.options.noTypeless=!0,this.options.noEmptyStrings=!0)}a("./Polyfills");var d=a("./Report"),e=a("./FormatValidators"),f=a("./JsonValidation"),g=a("./SchemaCache"),h=a("./SchemaCompilation"),i=a("./SchemaValidation"),j=a("./Utils"),k={asyncTimeout:2e3,forceAdditional:!1,assumeAdditional:!1,forceItems:!1,forceMaxLength:!1,forceProperties:!1,ignoreUnresolvableReferences:!1,noExtraKeywords:!1,noTypeless:!1,noEmptyStrings:!1,strictUris:!1,strictMode:!1};c.prototype.compileSchema=function(a){var b=new d;return"string"==typeof a&&(a=g.getSchemaByUri.call(this,b,a)),h.compileSchema.call(this,b,a),this.lastReport=b,b.isValid()},c.prototype.validateSchema=function(a){var b=new d;"string"==typeof a&&(a=g.getSchemaByUri.call(this,b,a));var c=h.compileSchema.call(this,b,a);return c&&i.validateSchema.call(this,b,a),this.lastReport=b,b.isValid()},c.prototype.validate=function(a,b,c){var e=new d;"string"==typeof b&&(b=g.getSchemaByUri.call(this,e,b));var j=h.compileSchema.call(this,e,b);if(!j)return this.lastReport=e,!1;var k=i.validateSchema.call(this,e,b);if(!k)return this.lastReport=e,!1;if(f.validate.call(this,e,b,a),c)return void e.processAsyncTasks(this.options.asyncTimeout,c);if(e.asyncTasks.length>0)throw new Error("This validation has async tasks and cannot be done in sync mode, please provide callback argument.");return this.lastReport=e,e.isValid()},c.prototype.getLastError=function(){return this.lastReport.errors.length>0?this.lastReport.errors:void 0},c.prototype.setRemoteReference=function(a,b){"string"==typeof b&&(b=JSON.parse(b)),g.cacheSchemaByUri.call(this,a,b)},c.registerFormat=function(a,b){e[a]=b},c.registerFormatter=function(){},b.exports=c},{"./FormatValidators":3,"./JsonValidation":4,"./Polyfills":5,"./Report":6,"./SchemaCache":7,"./SchemaCompilation":8,"./SchemaValidation":9,"./Utils":10}]},{},[2,3,4,5,6,7,8,9,10,"C768cZ"]);