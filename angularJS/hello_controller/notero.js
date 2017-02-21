
var myApp = angular.module('mainApp',[]);

myApp.controller('coments', function($scope){
  $scope.newComent={};
$scope.comentarios =[
{
  comentario : "Continua! buen trabajo ggg izi",
  username : "Pedro Jorge"
},
{
  comentario: "nice",
  username: "Ricky el rico"
},
{
  comentario: "Don't u have other idea?",
  username: "iunou"
}
]
$scope.addComent = function(){
  $scope.comentarios.push($scope.newComent);
  $scope.newComent = {};
}
});



myApp.controller('listas', function($scope){
$scope.frutas = ['Kiwi','Manzana','Pera','Basura','Melon','Naranja'];
});

myApp.controller('operaciones',function($scope){
$scope.valorA = 0;
$scope.valorB = 0;

$scope.sumar = function(){
  $scope.resultado = $scope.valorA + $scope.valorB;
  return resultado;
}

$scope.multiplicar = function(){
  $scope.resultado = $scope.valorA * $scope.valorB;
  return resultado;
}

$scope.restar = function(){
  $scope.resultado = $scope.valorA - $scope.valorB;
  return resultado;
}
});


myApp.controller('styleController',function($scope){

$scope.opcionA = function(){

}
$scope.opcionB = function(){

}
$scope.cambiarEstilo = function(){
  $scope.angularStyle = {
    width:"200px",
    height:"200px",
    borderRadius: "40px"
  }
}
$scope.cambiarClase = function(){
$scope.claseAngular = "segundoEstilo"
}
$scope.ocultarCajas = function(){

}
$scope.mostrarCajas = function(){

}


});
