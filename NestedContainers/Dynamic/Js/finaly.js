/**
 * The controller doesn't do much more than setting the initial data model
 */
var app = angular.module("finaly", ["dndLists"]);
app.controller("finalyCtrl", ["$scope", "$http", function ($scope, $http) {

    $scope.formType=["LIST","FORM","REPORT","OPPORTUNITY"];
    //$http.post("/api/myData/FormType").then(function (data) {
    //    $scope.formType = data.data;
    //    //console.log($scope.FormType);
    //});

    //Sayfa butonlarý  SAVE ATTACH PDF CANCEL CLOSE
    $scope.buttons = ["CALL", "SMS", "TTT"]
    $scope.parentField=["Customer","Price","Total"]

    $scope.models = {
        selected: null,
        buttons: ["Save", "Cancel", "Attach"],
        //CALL NFC MESSAGE BARCODE SEND_MAIL LOCATION MAP
        tempWidgetButtons: ["CALL", "SMS", "TTT"],
        tempEntity: ["Stok", "Personel", "Yonetici"],
        tempShowActionButton: ["true", "false"],
        tempActionButtonLink: ["Form1", "From2", "From3"],

        templates: [
            
            { type: "button", widgetType:"BUTTON", id: 1, field: "",  label: "Button", icon: "fa fa-sign-in", buttons: [] },
            { type: "checkbox",widgetType:"CHECKBOX", id: 2, field: "", label: "Checkbox", icon: "fa fa-check-square-o", buttons: [] },
            { type: "dateTimePicker",widgetType:"DATEPICKER", id: 3, field: "", label: "DateTimePicker", icon: "fa fa-calendar", buttons: [] },
            { type: "label", id: 4,widgetType:"TEXTVIEW", field: "", label: "Label", icon: "fa fa-font", buttons: [] },
            { type: "subForm",widgetType:"SUBFORM", id: 8,  field: "", label: "SubFrom", icon: "fa fa-window-maximize", buttons: [] },
            { type: "textBox",widgetType:"EDITVIEW", id: 9, field: "", label: "TextBox", icon: "fa fa-align-justify", buttons: [] },
            { type: "timePicker",widgetType:"TIMEPICKER", id: 10,  field: "", label: "TimePicker", icon: "fa fa-calendar", buttons: [] },
            { type: "dropdown",widgetType:"DROPDOWN", id: 10,  field: "", label: "TimePicker", icon: "fa fa-calendar", buttons: [] },

        ],

        dropzones: {
            "Form":{},
            "Buttons":[],
            "Widget":{"Widgets": [
               
                {

                }

        ]},

           
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
    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);



}]);
