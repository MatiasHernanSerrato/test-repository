var filtrosApp = angular.module('filtros', []);

filtrosApp.filter('cambiar',function(){

  var cambiarFiltro = function(datosOriginales,primerValor){
    var nuevosDatos = datosOriginales.replace(RegExp("o","g"),"_");
    return  nuevosDatos;
  }
return cambiarFiltro;
});
