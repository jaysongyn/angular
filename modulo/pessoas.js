/**
 * Created by jayson.inf on 26/07/2015.
 */
angular
    .module('pessoas',['ngRoute'])
    .directive('sonClick', function() {

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    scope.$eval(attrs.sonClick);
                })
            }
        };

    })
    .directive('sonClic', function() {

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<button ng-transclude></button>',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    scope.$eval(attrs.click);
                })
            }
        };

    })
    .controller('CtrlApp', function($scope) {
        $scope.executa = function() {
            alert('Diretiva clicada');
        }
    })
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'listar.html'
            })
            .when('/pessoa/adicionar',{
                templateUrl: 'adicionar.html',
                controller: 'CtrlAdicionar'
            })
            .when('/pessoa/:index',{
                templateUrl: 'editar.html',
                controller: 'CtrlEditar'
            });
    })

    .controller('CtrlPessoas', function($scope){
    $scope.pessoas = [
            {nome:'jayson',cidade: 'goiania'},
            {nome:'Issis',cidade: 'sao'},
            {nome:'Cida',cidade: 'teresina'},
            {nome:'Jose',cidade: 'acreuna'}
        ];
        $scope.remover = function(index){
            $scope.pessoas.splice(index,1);
        }
    })
    .controller('CtrlAdicionar', function($scope){
        $scope.add = function()
        {
            $scope.pessoas.push($scope.pessoa);

            $scope.result = "registro adicionado com sucesso!";

            $scope.pessoa = "";
        }
    })
    .controller('CtrlEditar', function($scope, $routeParams){
        $scope.pessoa = $scope.pessoas[$routeParams.index];
    });