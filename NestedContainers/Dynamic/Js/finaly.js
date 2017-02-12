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

 
    $http.post("../Api/mobil/generalData/Fields").then(function (data) {
        $scope.fields = data.data
    });


    //Sayfa butonlarý  SAVE ATTACH PDF CANCEL CLOSE
    $scope.buttons = ["CALL", "SMS", "TTT"]
    $scope.parentField=["Customer","Price","Total"]

    $scope.trueFalse=[true,false]
    $scope.models = {
        selected: null,
        buttons: ["Save", "Cancel", "Attach"],
        //CALL NFC MESSAGE BARCODE SEND_MAIL LOCATION MAP
        tempWidgetButtons: ["CALL", "SMS", "TTT"],
        tempEntity: ["Stok", "Personel", "Yonetici"],
        tempShowActionButton: ["true", "false"],
        tempActionButtonLink: ["Form1", "From2", "From3"],

        templates: [
            
            { widgetType:"BUTTON", id: 1, field: "",  label: "Button", required:false, enable:false,mask:false,defaultValue:"Text",icon: "fa fa-sign-in", buttons: [] },
            { widgetType: "CHECKBOX", id: 2, field: "", label: "Checkbox", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-check-square-o", buttons: [] },
            { widgetType: "DATEPICKER", id: 3, field: "", label: "DatePicker", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-calendar", buttons: [] },
            { widgetType: "DROPDOWN", id: 4, field: "", label: "DropDown", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-caret-square-o-down", buttons: [] },
            { widgetType: "TEXTVIEW", id: 5, field: "", label: "Label", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-font", buttons: [] },
            { widgetType: "SUBFORM", id: 6, field: "", label: "SubFrom", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-window-maximize", buttons: [] },
            { widgetType: "EDITVIEW", id: 7, field: "", label: "TextBox", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-align-justify", buttons: [] },
            { widgetType: "TIMEPICKER", id: 8, field: "", label: "TimePicker", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-calendar", buttons: [] },

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
