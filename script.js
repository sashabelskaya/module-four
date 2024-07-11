
// Wrap the entire contents of script.js inside an IIFE
(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // Create an object called 'helloSpeaker'
    var helloSpeaker = {
        speak: function (name) {
            console.log("Hello " + name);
        }
    };

    // Create an object called 'byeSpeaker'
    var byeSpeaker = {
        speak: function (name) {
            console.log("Goodbye " + name);
        }
    };

    // Loop over the names array and call the appropriate speak method
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

})();
