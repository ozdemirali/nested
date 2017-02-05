/**
 * The controller doesn't do much more than setting the initial data model
 */
var app = angular.module("demo", ["dndLists"]);
app.controller("NestedListsDemoController", function ($scope) {

    //$scope.deneme = "Deneme çalýþýyor...";
    
    $scope.models = {
        selected: null,
        templates: [
            {type: "item", id: 2 },
            {type:"text",id:3},
            {type: "container", id: 1, columns: [[], []]}
        ],
        dropzones: {
            "A": [
               
                {
                    "type": "item",
                    "id": "4"
                },
                {
                    "type": "item",
                    "id": "5"
                },
                {
                    "type": "item",
                    "id": "6"
                }
            ],
            "B": [
                {
                    "type": "item",
                    "id": 7
                },
                {
                    "type": "item",
                    "id": "8"
                },
               
                {
                    "type": "item",
                    "id": "9"
                }
            ]
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
