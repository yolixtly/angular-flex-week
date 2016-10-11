var app = angular.module("myModule", []);

/*
 PROVIDER:
  - the first time that Angular calls this provider, the $get gets called only once. 
  - Angular stores caches the value. and subsecuent calls to our provider return that 
    stored value
  - Requires to assign the value to pass, to a $get method
  - it allows you configurations
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
  - like in an http request, what we return is the entire data or Object 
        -that is the key difference Factory vs Service 
  - factories return any kind of value
 */

 // function myObject(){
 //  this.getValue = function(){
 //    return "My Object Value";
 //  };
 // }

/*
 Services: 
  - Out of the 3 Services require less code 
  - Although you can do the same with all 
  - A service only returns specific data, yes like an object and also lets you instanciate it.
  - factories take care of all of the data request handling.

 */ 

app.service("myService", function(){
    console.log("myService function is called once");
    return "service data here";
});

app.controller("FirstController", function(myService){
  console.log("myService data is called");
});

app.controller("SecondController", function(myService){
  console.log("myService data is called");
});

