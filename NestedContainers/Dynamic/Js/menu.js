/**
 * The controller doesn't do much more than setting the initial data model
 */
var app = angular.module("menu", ["dndLists"]);
app.controller("menuCtrl", function ($scope) {

    $scope.deneme = "Deneme çalýþýyor...";

    //$scope.buttons=["CALL","SMS","TTT"]

    $scope.models = {
        selected: null,
        buttons: ["Save", "Cancel", "Attach"],
        tempWidgetButtons: ["CALL", "SMS", "TTT"],
        tempEntity: ["Stok", "Personel", "Yonetici"],
        tempShowActionButton: ["true", "false"],
        tempActionButtonLink: ["Form1", "From2", "From3"],

        templates: [

            { type: "item", id: 1, name: "Item", icon: "fa fa-sign-in"},
            { type: "menu", id: 2, name: "Menu", icon: "fa fa-check-square-o", columns: [[]] },
            { type: "list", id: 3, name: "list", icon: "fa fa-sign-in" },
          

        ],

        dropzones: {
            "Form": {},
            "Buttons": [],
            "Widget": {
                "Widgets": [


                ]
            },


        }
    };

    /*Dropzone içindeki Buttons Dizisinin içindeki   buttons'larý seçereken kullanýlýyor  */
    $scope.buttonsSelection = function buttonsSelection(item) {

        var idx = $scope.models.dropzones.Buttons.indexOf(item);

        // is currently selected
        if (idx > -1) {
            $scope.models.dropzones.Buttons.splice(idx, 1);
        }

            // is newly selected
        else {
            $scope.models.dropzones.Buttons.push(item);
        }
    };

    /**********************************************************************/

    /*Dropzone içindeki Widget Dizisinin içindeki   buttons'larý seçereken kullanýlýyor  */
    $scope.widgetButtonsSelection = function widgetButtonsSelection(item) {

        var idx = $scope.models.selected.buttons.indexOf(item);

        // is currently selected
        if (idx > -1) {
            $scope.models.selected.buttons.splice(idx, 1);
        }

            // is newly selected
        else {
            $scope.models.selected.buttons.push(item);
        }
    };

    /**********************************************************************/
    $scope.$watch('models.dropzones', function (model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);



});
