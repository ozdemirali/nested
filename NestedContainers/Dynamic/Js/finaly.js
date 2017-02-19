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

    $http.post("../Api/mobil/generalData/Entity").then(function (data) {
        $scope.entity = data.data
    });

    $http.post("../Api/mobil/formData/Forms").then(function (data) {
        $scope.forms = data.data
    });
  
    $scope.format = ["MM/DD/YY", "MM/DD/YYYY", "YY.MM.DD", "YYYY.MM.DD", "DD/MM/YY", "DD/MM/YYYY", "DD.MM.YY"]
    $scope.buttons = ["SAVE", "ATTACH", "PDF","CANCEL","CLOSE"]
    $scope.parentField=["Customer","Price","Total"]
    $scope.trueFalse=[true,false]

    $scope.models = {
        selected: null,
        tempWidgetButtons: ["CALL", "NFC", "MESSAGE", "BARCODE", "SEND_MAIL", "LOCATION", "MAP"],

        templates: [
            { widgetType: "CHECKBOX", id: 1,visible:true, field: "", label: "Checkbox", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-check-square-o", buttons: [] },
            { widgetType: "DATEPICKER", id: 2, visible: true, field: "",format:"", label: "DatePicker", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-calendar", buttons: [] },
            { widgetType: "DROPDOWN", id: 3, visible: true, field: "", label: "DropDown", required: false, enable: false, mask: false,sqlId:"",textKey:"",valueKey:"", defaultValue: "Text", icon: "fa fa-caret-square-o-down", buttons: [] },
            { widgetType: "IMAGE", id: 3, visible: true, field: "", label: "Image", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-caret-square-o-down", buttons: [] },
            { widgetType: "TEXTVIEW", id: 4, visible: true, field: "", label: "TextView", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-font", buttons: [] },
            { widgetType: "SUBFORM", id: 5, visible: true, field: "", label: "SubFrom",subForm:"",subFormType:"", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-window-maximize", buttons: [] },
            { widgetType: "EDITVIEW", id: 6, visible: true, field: "", label: "EditView", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-align-justify", buttons: [] },
            { widgetType: "TIMEPICKER", id: 7, visible: true, field: "", label: "TimePicker", required: false, enable: false, mask: false, defaultValue: "Text", icon: "fa fa-calendar", buttons: [] },
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
