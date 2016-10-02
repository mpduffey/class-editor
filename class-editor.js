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
                        return _this.selectedClass;
                        break;
                    case "document":
                        var docOutput = _this.convertClassToDocument(_this.selectedClass);
                        return docOutput;
                        break;
                }
            }
        };
        data.getAllClasses().subscribe(function (x) { _this.classes = x; });
    }
    ClassEditor = __decorate([
        core_1.Component({
            selector: 'class-editor',
            template: "\n\t\t<h1>Class Editor</h1>\n\t\t<select #editorType>\n\t\t\t<option value=\"document\">Document</option>\n\t\t\t<option value=\"class\">Class</option>\n\t\t</select>\n\t\t<select [(ngModel)]=\"selectedClass\">\n\t\t\t<option value=\"newClass\">Create New Class</option>\n\t\t\t<option *ngFor=\"let class of classes\" [ngValue]=\"class\">{{class.name}}</option>\n\t\t</select>\n\t\t<modeled-form slimscroll [formObject]=\"getFormObject(editorType.value)\" class=\"flex-item\"></modeled-form>\n\t",
            styles: ["\n\t\tselect {color: black}\n\t\t.form-group {margin-bottom: 5px;}\n\t\tmodeled-form {margin-top: 20px;}\n\t"],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof data_service_1.DataService !== 'undefined' && data_service_1.DataService) === 'function' && _a) || Object])
    ], ClassEditor);
    return ClassEditor;
    var _a;
}());
exports.ClassEditor = ClassEditor;
//# sourceMappingURL=class-editor.js.map