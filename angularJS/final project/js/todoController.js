var appTodo = angular.module("todoList",["LocalStorageModule","ngRoute"])
              appTodo.config(function($routeProvider){
                $routeProvider.when("/",{
                  controller: "introduction",
                  templateUrl:"templates/introduction.html"
                })
                .when("/homePage",{
                  controller: "todoListController",
                  templateUrl:"templates/homePage.html"
                })
              });

                appTodo.controller("introduction",function($scope,$location){
                  $scope.go = function ( path ) {
                    $location.path( path );
                  };
                  //oculto my header para mejor uso luego.
                  $scope.showHeader=false;
                });

                appTodo.controller("todoListController",function($scope,localStorageService){
                $scope.showHeader=true;
                $scope.name ="To-Do List"
                $scope.gtTask = [new changeListTask("Learn some language"),new changeListTask("Learn how to do a thing")]
              //  $scope.gtTask= JSON.parse( LocalStorage.getItem("My tasks") || "[]");
                $scope.addTask = function(){
                  $scope.gtTask.push(new changeListTask($scope.newTask));
                  $scope.newTask ="";
                  enter.focus();
                }
                $scope.remove = function(deTask){
                  $scope.gtTask.splice($scope.gtTask.indexOf(deTask),1)
                }
                $scope.clearAll = function(){
                  $scope.gtTask = [];
                }
                $scope.clearCompleted = function(){
                //  for(var i = 0; i < $scope.gtTask.length; i++){
                  //  if(!$scope.gtTask[i].done) $scope.gtTask.splice(i, 1);
                  //}
                  //ver mas del splice lol. y reduce
                  var dTask = $scope.gtTask;
                  $scope.gtTask = [];
                  angular.forEach(dTask,function(deTask){
                    if(!deTask.done) $scope.gtTask.push(deTask);
                  });
                }
                /*$scope.save = function(){
                  LocalStorage.setItem('My tasks', JSON.stringify($scope.gtTask));
                }
*/
              });

              function changeListTask(vectorTask){
                this.text = vectorTask;
                this.done = false;
              }
