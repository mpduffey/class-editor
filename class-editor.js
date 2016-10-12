"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_1 = require('modules/data-service/data-service');
var ClassEditor = (function () {
    function ClassEditor(data) {
        var _this = this;
        this.data = data;
        this.propertyFields = [
            { name: "@type", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "@version", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "collate", type: "STRING", custom: { controlType: "select", options: ["ci", "cs", "default"], defaultValue: "ci", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "customFields", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "defaultValue", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "description", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "globalId", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "mandatory", type: "STRING", custom: { controlType: "checkbox", labelLeft: true, css: { input: { width: "auto" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "max", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "min", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "name", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "notNull", type: "STRING", custom: { controlType: "checkbox", labelLeft: true, css: { input: { width: "auto" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "readonly", type: "STRING", custom: { controlType: "checkbox", labelLeft: true, css: { input: { width: "auto" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "type", type: "STRING", custom: { controlType: "select", options: [{ value: 0, label: "BOOLEAN" }, { value: 1, label: "INTEGER" }, { value: 2, label: "SHORT" }, { value: 3, label: "LONG" }, { value: 4, label: "FLOAT" }, { value: 5, label: "DOUBLE" }, { value: 6, label: "DATETIME" }, { value: 7, label: "STRING" }, { value: 8, label: "BINARY" }, { value: 9, label: "EMBEDDED" }, { value: 10, label: "EMBEDDEDLIST" }, { value: 11, label: "EMBEDDEDSET" }, { value: 12, label: "EMBEDDEDMAP" }, { value: 13, label: "LINK" }, { value: 14, label: "LINKLIST" }, { value: 15, label: "LINKSET" }, { value: 16, label: "LINKMAP" }, { value: 17, label: "BYTE" }, { value: 18, label: "TRANSIENT" }, { value: 19, label: "DATE" }, { value: 20, label: "CUSTOM" }, { value: 21, label: "DECIMAL" }, { value: 22, label: "LINKBAG" }, { value: 23, label: "ANY" }], defaultValue: "STRING", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
        ];
        this.propertyForm = {
            showButtons: true,
            submitLabel: "Submit",
            submit: function (x) { console.log(x); },
            buttons: [
                { label: "Save", func: function () { console.log("test"); }, class: "btn-primary" }
            ],
            controls: [
                {
                    type: "fieldset",
                    name: "Name Group",
                    fields: [
                        { classField: this.propertyFields[10] },
                        { classField: this.propertyFields[13] },
                        { classField: this.propertyFields[11] },
                        { classField: this.propertyFields[12] },
                        { classField: this.propertyFields[7] },
                        { classField: this.propertyFields[4] },
                        { classField: this.propertyFields[5] },
                        { classField: this.propertyFields[6] },
                        { classField: this.propertyFields[8] },
                        { classField: this.propertyFields[9] },
                        { classField: this.propertyFields[2] },
                        { classField: this.propertyFields[3] },
                    ]
                }
            ]
        };
        this.propertyObject = {
            fieldObject: this.propertyFields,
            formObject: this.propertyForm
        };
        this.classFields = [
            { name: "name", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "abstract", type: "BOOLEAN", custom: { controlType: "checkbox", labelLeft: true, css: { input: { width: "auto" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "clusterIds", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "clusterSelection", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "customFields", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "defaultClusterId", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "description", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "overSize", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "properties", type: "array", custom: { controlType: "array", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } }, formObject: this.propertyObject },
            { name: "shortName", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "strictMode", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "superClass", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "superClasses", type: "STRING", custom: { controlType: "input", labelLeft: true, css: { input: { width: "175px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
        ];
        this.classForm = {
            submitLabel: "Submit",
            submit: function (x) { console.log(x); },
            controls: [
                {
                    type: "fieldset",
                    name: "Name Group",
                    fields: [
                        { classField: this.classFields[0] },
                        { classField: this.classFields[1] },
                        { classField: this.classFields[2] },
                        { classField: this.classFields[3] },
                        { classField: this.classFields[4] },
                        { classField: this.classFields[5] },
                        { classField: this.classFields[6] },
                        { classField: this.classFields[7] },
                        { classField: this.classFields[8] },
                        { classField: this.classFields[9] },
                    ]
                }
            ]
        };
        this.classObject = {
            fieldObject: this.classFields,
            formObject: this.classForm
        };
        this.convertClassToDocument = function (classObject) {
            var docClass = {};
            for (var i = 0; i < classObject.properties.length; i++) {
                var prop = classObject.properties[i].name;
                docClass[prop] = null;
            }
            return docClass;
        };
        this.getFormObject = function (editorType) {
            if (typeof _this.selectedClass !== 'undefined') {
                switch (editorType) {
                    case "class":
                        console.log(_this.selectedClass);
                        break;
                    case "document":
                        var docOutput = _this.convertClassToDocument(_this.selectedClass);
                        return docOutput;
                        break;
                }
            }
        };
        data.getAllClasses().subscribe(function (x) {
            _this.classes = x;
            console.log(x);
            _this.selectedClass = x[0];
        });
    }
    ClassEditor = __decorate([
        core_1.Component({
            selector: 'class-editor',
            template: "\n\t\t<h1>Class Editor</h1>\n\t\t<select #editorType>\n\t\t\t<option value=\"document\">Document</option>\n\t\t\t<option value=\"class\">Class</option>\n\t\t</select>\n\t\t<select [(ngModel)]=\"selectedClass\">\n\t\t\t<option value=\"newClass\">Create New Class</option>\n\t\t\t<option *ngFor=\"let class of classes\" [ngValue]=\"class\">{{class.name}}</option>\n\t\t</select>\n\t\t<div class=\"spacer\"></div>\n\t\t<reactive-form *ngIf=\"selectedClass\" [formObject]=\"classObject\" [valueObject]=\"selectedClass\" show-buttons=\"true\" class=\"flex-item flex-container-column\"></reactive-form>\n\t",
            styles: ["\n\t\tselect {color: black}\n\t\t.form-group {margin-bottom: 5px;}\n\t\t.spacer {margin-bottom: 20px;}\n\t"],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof data_service_1.DataService !== 'undefined' && data_service_1.DataService) === 'function' && _a) || Object])
    ], ClassEditor);
    return ClassEditor;
    var _a;
}());
exports.ClassEditor = ClassEditor;
//# sourceMappingURL=class-editor.js.map