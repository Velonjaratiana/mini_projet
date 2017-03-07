angular.module("appPhoto").controller("mainController", function ($scope,$http,photoFactory)
{
  
  //----pagination
  angular.module("appPhoto").config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  });
  $scope.currentPage = 1;
  $scope.pageSize = 6;
  //----recupère la liste d'image----------------------//
  $http.get('./PHP/listePhoto.php').then(function(response){
   // alert("dfdfd"+JSON.stringify(response.data));
    $scope.photos=response.data;
    },function(error,status){
      alert("error:"+JSON.stringify(error));
  });   
}) ;