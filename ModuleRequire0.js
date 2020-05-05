let counter = function(arr){
    return "There are "+ arr.length + " elements on the array."
}
// console.log(counter(["RUN", "GUN", "SUN"]));

// Now export above function to ModuleRequire
module.exports = counter;