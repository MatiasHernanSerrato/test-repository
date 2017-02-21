var aplic = angular.module("newApp",["ngRoute","ngResource"])
                 aplic.config(function($routeProvider/*$locationProvider*/){
                   $routeProvider.when("/",{
                     controller: "homeController",
                     templateUrl:"notaTemp/home.html"

                   })
                   .when("/movies",{
                     templateUrl:"notaTemp/movies.html",
                     controller: "moviesController"
                   })
                   .when("/users",{
                     templateUrl:"notaTemp/users.html",
                     controller: "usersController"
                   });
                   /*$locationProvider.html5Mode({
                     enabled:true,
                     requireBase:false

                   })*/
                 });
                 aplic.controller("homeController", function($scope){
                 $scope.messageTr ="prueba3";
                 });
                 aplic.factory('moviesLoad', function($resource) {
                   var Post = $resource('https://jsonplaceholder.typicode.com/posts/:id',{id:"@id"});
                   return Post;
                   });

                 aplic.controller("moviesController",function($scope,$resource,moviesLoad){
                   $scope.posts = moviesLoad.query();
                   });
                    /*var movie = $resource("https://jsonplaceholder.typicode.com/posts/:id",{id:"@id"}).get();
                   $scope.posts= post.query;
                 });*/
                /* $scope.movies=[
                     {
                       nombre: "Ted",
                       anio: "2012",
                       resumen: "When John Bennett (Mark Wahlberg) was a little boy, he made a wish that Ted (Seth MacFarlane), his beloved teddy bear, would come alive. Thirty years later, foul-mouthed Ted is still John's constant companion, much to the chagrin of Lori (Mila Kunis), John's girlfriend. Though Lori's displeasure is exacerbated by the pair's constant consumption of beer and weed, she's not the one who's most disappointed with John; it may take the intervention of John's boyhood toy to help him grow up at last."
                     },
                     {
                       nombre:"Basoura",
                       anio: "2017",
                       resumen: "Television"
                     }
                   ]
                 }); */
                 aplic.controller("usersController",function($scope){
                   $scope.message="FUNCIONA KAWAII!";
                 });
