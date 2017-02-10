/**
 * The controller doesn't do much more than setting the initial data model
 */
var app = angular.module("menu", ["dndLists"]);
app.controller("menuCtrl", function ($scope) {

    $scope.deneme = "Deneme çalýþýyor...";

    //$scope.buttons=["CALL","SMS","TTT"]

    $scope.models = {
        selected: null,
      
        templates: [

            { type: "menu", id: 2, name: "Menu", icon: "fa fa-bars", data: [[]] },
            { type: "item", id: 1, link: "", name: "MenuItem", icon: "fa fa-minus" },


        ],

        dropzones: {
         
            "group": [
                {

                }
            ],

        }
    };

    

    /**********************************************************************/
    $scope.$watch('models.dropzones', function (model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);



});
