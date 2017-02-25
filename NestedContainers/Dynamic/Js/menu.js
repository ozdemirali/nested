/**
 * The controller doesn't do much more than setting the initial data model
 */
var app = angular.module("menu", ["dndLists"]);
app.controller("menuCtrl", function ($scope) {


    $scope.formType = ["LIST", "FORM", "REPORT", "OPPORTUNITY"];


    $scope.models = {
        selected: null,
      
        templates: [

            { widgetType: "menu", id: 2, label: "Menu",name:"Activite", icon: "fa fa-bars", data: [[]] },
            { widgetType: "menuItem", id: 1, label: "MenuItem", icon: "fa fa-minus" },


        ],


        dropzones: {
            "menuName": "",
            "menuTitle":"",
            "Widget": {
                "group": [
                    {
                        "widgetType": "menu",
                        "id": 2,
                        "label": "Menu",
                        "name": "Activite",
                        "icon": "fa fa-bars",
                        "data": [
                          [
                            {
                                "widgetType": "menuItem",
                                "id": 1,
                                "label": "MenuItem",
                                "icon": "fa fa-minus"
                            }
                          ]
                        ]

                    }

                ]
            },


        }
    };

    //    dropzones: {
         
    //        "group": [
    //            {
    //                "widgetType": "menu",
    //                "id": 2,
    //                "label": "Menu",
    //                "name": "Activite",
    //                "icon": "fa fa-bars",
    //                "data": [
    //                  [
    //                    {
    //                        "widgetType": "menuItem",
    //                        "id": 1,
    //                        "label": "MenuItem",
    //                        "icon": "fa fa-minus"
    //                    }
    //                  ]
    //                ]

    //            }
    //        ],

    //    }
    //};

    /**********************************************************************/
    $scope.$watch('models.dropzones', function (model) {
        for (var i = 0; i < $scope.models.dropzones.Widget.group.length; i++) {
            if ($scope.models.dropzones.Widget.group[i].widgetType == "menuItem") {
                $scope.models.dropzones.Widget.group.splice(i, 1);
            }
            if ($scope.models.dropzones.Widget.group[i].widgetType == "menu") {
                for (var j = 0; j < $scope.models.dropzones.Widget.group[i].data.length; j++) {
                    for (var k = 0; k < $scope.models.dropzones.Widget.group[i].data[j].length; k++) {
                        if ($scope.models.dropzones.Widget.group[i].data[j][k].widgetType=="menu") {
                            $scope.models.dropzones.Widget.group[i].data[j].splice(k, 1)
                        }
                    }

                }
            }
        }
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);



});
