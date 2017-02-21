alert("funciona!");
var peliculas = angular.module('myFirstApp', []);

peliculas.controller('peli',function($scope){
  $scope.titulo = 'La bella y la bestia';
  $scope.autor = 'Bryan Myers';
  $scope.duracion = '2 horas'
});
