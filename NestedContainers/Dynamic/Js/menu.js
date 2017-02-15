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

            { widgetType: "menu", id: 2, label: "Menu", icon: "fa fa-bars", data: [[]] },
            { widgetType: "item", id: 1, label: "MenuItem", icon: "fa fa-minus" },


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
        for (var i = 0; i < $scope.models.dropzones.group.length; i++) {
             
            if ($scope.models.dropzones.group[i].widgetType == "item") {
                console.log($scope.models.dropzones.group[i].widgetType);
                $scope.models.dropzones.group.splice(i,1);
            }
        }
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);



});
