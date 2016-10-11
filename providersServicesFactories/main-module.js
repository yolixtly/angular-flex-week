var app = angular.module("myModule", []);

app.provider("myProvider", function(){
  //the first time that Angular calls this provider, the $get gets called only once. 
  //Angular stores caches the value. and subsecuent calls to our provider return that stored value
    this.$get = function(){
    console.log("myProvider.$get() called");
    return "my Value";
  };
});

app.controller("FirstController", function(myProvider){
  console.log("myProvider: " + myProvider);
});

app.controller("SecondController", function(myProvider){
  console.log("myProvider: " + myProvider);
});