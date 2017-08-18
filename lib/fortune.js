
var fortuneCookies = [
          "Conquer your fears or they will conquer you.",
          "Do not fear what you don't know",
          "Change your story and you will change your life"
];

exports.getFortune = function(){
        var idx =  Math.floor(Math.random() * fortuneCookies.length);
        return fortuneCookies[idx];
};
