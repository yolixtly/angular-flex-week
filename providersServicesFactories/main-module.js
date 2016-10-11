var app = angular.module("myModule", []);

/*
 PROVIDER:
  - the first time that Angular calls this provider, the $get gets called only once. 
  - Angular stores caches the value. and subsecuent calls to our provider return that 
    stored value
  - Requires to assign the value to pass, to a $get method
  - it allows you configurations

  - you can add aditional function to it. you can access them during the config face
 */
app.provider("myProvider", function(){
    this.value = "my configurable value";

    this.setValue = function(newValue){
        this.value = newValue;
    };
    this.$get = function(){
    console.log("changing a value");
    return this.value;
  };
});

/*
 Factory:
  - we simply assign the value, without the need of a $get service
  - in many cases what we return instead of a string, usually we pass an object
  - like in an http request, what we return is the entire data or Object 
        -that is the key difference Factory vs Service 
  - factories return any kind of value
  - Useful cases: 
    -when we make a calculation
    -when we call data from another API
 */

 // function myObject(){
 //  this.getValue = function(){
 //    return "My Object Value";
 //  };
 // }

function Person(name){
  this.name = name;
}

app.factory("myFactory", function(){
  console.log("factory function called");
  //this can only be done with factories
  return new Person("John");
});
/*
 Services: 
  - Out of the 3 Services require less code 
  - Although you can do the same with all 
  - A service only returns specific data, yes like an object and also lets you instanciate it.
  - factories take care of all of the data request handling.
  - we cannot pass Constructor objects to services 

 */ 

// app.service("myProvider", function(){
//     console.log("myProvider function is called once");
//     return "service data here";
// });

app.controller("FirstController", function(myFactory){
  console.log("myFactory: " + myFactory.name);
});

app.controller("SecondController", function(myFactory){
  console.log("myFactory: " + myFactory.name);
});

//Configuring the provider (config Face)
//we are setting argument as myProviderProvider to get the entire provider not only the returned value

// app.config(function(myProviderProvider){
//  myProviderProvider.setValue('my new Configured value');
// });


