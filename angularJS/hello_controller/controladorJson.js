var izi = angular.module("theApp",["LocalStorageModule"])

izi.controller("verdadero",function($scope,localStorageService, $http){
    $scope.todo =[];
    var qcyo =localStorageService.get("angular-todolist");
    if(qcyo){
      $scope.todo = qcyo;
    }else{
      $scope.todo= [];
    }
    $scope.addAct = function(){
      $scope.todo.push($scope.newAct);
      $scope.newAct = {};
    }
    $scope.clean = function(){
        $scope.todo= [];
    }
    $scope.$watchCollection('todo',function(newValue,oldValue){
      localStorageService.set("angular-todolist",$scope.todo);
    });


    $scope.nombre = "perro loco";

    setTimeout(function(){
      $scope.$apply(function(){
        $scope.nombre = "SECOND NAME";
        console.log($scope.nombre);
      });
      /*$scope.$digest();
      la direncia que hay entre $apply y $digest
      es que apply va a mandar a llamar al 2do
      cuando haya un cambio en cambio fuera de un
      apply solo se actualiza de forma terca*/
    },2000);


    $scope.posts = [
      {
        title: "NEW BEST MOVIE EVER",
        body: "never give up he told us, but is that a good advice?"
      },
      {
        title: "NEW BEST MOVIE EVER 2",
        body: "never give up he told us, but is that a good advice?"
      }
]



});
