var app = angular.module("myModule", []);

/*
 PROVIDER:
  - the first time that Angular calls this provider, the $get gets called only once. 
  - Angular stores caches the value. and subsecuent calls to our provider return that 
    stored value
  - Requires to assign the value to pass, to a $get method
 */
// app.provider("myProvider", function(){
//     this.$get = function(){
//     console.log("myProvider.$get() called");
//     return "my Value";
//   };
// });

/*
 Factory:
  - we simply assign the value, without the need of a $get service
  - in many cases what we return instead of a string, usually we pass an object
 */


app.factory("myFactory", function(){
    console.log("MyFactory is called");
    return "my Value";
});

app.controller("FirstController", function(myFactory){
  console.log("myFactory: " + myFactory);
});

app.controller("SecondController", function(myFactory){
  console.log("myFactory: " + myFactory);
});