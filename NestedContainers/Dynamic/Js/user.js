/**
 * The controller doesn't do much more than setting the initial data model
 */
var app = angular.module("user", ["dndLists"]);

app.controller("userCtrl", ["$scope", "$http", function ($scope, $http) {

    /*Menu Fake detalar*/
    $scope.menus = [
          {
              
             "menuName": "Silme",
             "menuTitle": "Merhaba",
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
              }
          },
               {
                
                          "menuName": "Kayit",
                          "menuTitle": "Merhaba",
             
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
                      }
                  },

    ];
    /**************************************************************/
    /*Form Fake Data *****************/

    $scope.forms = [
        {
            "formName": "Ornek",
            "formTitle": "ASD",
            "formType": "LIST",
            "entity": "Company",
            "actionButtonFormType": "LIST",
            "actionButtonIsVisible": true,
            "actionButtonLink": "Form1",
        
            "Buttons": [
              "SAVE"
            ],
            "Widget": {
                "Widgets": [
                  {
                      "widgetType": "CHECKBOX",
                      "id": 1,
                      "visible": true,
                      "field": "",
                      "label": "Checkbox",
                      "required": false,
                      "enable": false,
                      "mask": false,
                      "defaultValue": "Text",
                      "icon": "fa fa-check-square-o",
                      "buttons": [
                        "CALL"
                      ]
                  },
                  {}
                ]
            }
        },
        {
            "formName": "Deneme",
            "formTitle": "ASD",
            "formType": "LIST",
            "entity": "Company",
            "actionButtonFormType": "LIST",
            "actionButtonIsVisible": true,
            "actionButtonLink": "Form1",
            "Buttons": [
              "SAVE"
            ],
            "Widget": {
                "Widgets": [
                  {
                      "widgetType": "CHECKBOX",
                      "id": 1,
                      "visible": true,
                      "field": "",
                      "label": "Checkbox",
                      "required": false,
                      "enable": false,
                      "mask": false,
                      "defaultValue": "Text",
                      "icon": "fa fa-check-square-o",
                      "buttons": [
                        "CALL"
                      ]
                  },
                  {}
                ]
            }
        }
    ];
  
    /*****************************/


    /*List Fake Data*****************************/
    $scope.lists =
        [
            {
                "listPageSize": "2",
                "editLink": "Listleme",
                "editFormType": "FORM",
                "formName": "list",
                "formTitle": "asd",
                "entity": "Company",
                "formType": "LIST",
                "actionButtonFormType": "",
                "actionButtonIsVisible": true,
                "actionButtonLink": "",
                "parentField": "",
                "searchField": "as",
                "sortField": "asd",
                "sqlId": "asd",
                "Widget": {
                    "Widgets": [
                      {
                          "field": "ASDSA",
                          "label": "Asd"
                      },
                      {
                          "field": "Description",
                          "label": "Item"
                      },
                      {
                          "field": "Description",
                          "label": "Item"
                      },
                      {
                          "field": "Description",
                          "label": "Item"
                      }
                    ]
                }
            },
            {
                "listPageSize": "2",
                "editLink": "Deneme",
                "editFormType": "FORM",
                "formName": "list",
                "formTitle": "asd",
                "entity": "Company",
                "formType": "LIST",
                "actionButtonFormType": "",
                "actionButtonIsVisible": true,
                "actionButtonLink": "",
                "parentField": "",
                "searchField": "as",
                "sortField": "asd",
                "sqlId": "asd",
                "Widget": {
                    "Widgets": [
                      {
                          "field": "ASDSA",
                          "label": "Asd"
                      },
                      {
                          "field": "Description",
                          "label": "Item"
                      },
                      {
                          "field": "Description",
                          "label": "Item"
                      },
                      {
                          "field": "Description",
                          "label": "Item"
                      }
                    ]
                }
            }

        ];
    $scope.list = {
        "listPageSize": "12",
        "editLink": "deneme",
        "editFormType": "FORM",
        "formName": "List",
        "formTitle": "LÝstTitle",
        "entity": "Company",
        "formType": "LIST",
        "actionButtonFormType": "",
        "actionButtonIsVisible": true,
        "actionButtonLink": "",
        "parentField": "",
        "searchField": "asd",
        "sortField": "asd",
        "sqlId": "1",
        "Widget": {
            "Widgets": [
              {
                  "field": "Description",
                  "label": "Item"
              },
              {
                  "field": "Description",
                  "label": "Item"
              },
              {
                  "field": "Description",
                  "label": "Item"
              },
              {
                  "field": "Description",
                  "label": "Item"
              }
            ]
        }
    };




    $scope.buttons = ["SAVE", "ATTACH", "PDF", "CANCEL", "CLOSE"]
    $scope.parentField = ["Customer", "Price", "Total"]
    $scope.trueFalse = [true, false]




    $scope.models = {
        selected: null,
          };

   

    /**********************************************************************/
    $scope.$watch('models.selected', function (model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);



}]);