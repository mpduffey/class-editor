import {Component}		from '@angular/core';
import {DataService}	from 'modules/data-service/data-service';

@Component({
	selector:				'class-editor',
	template:				`
		<h1>Class Editor</h1>
		<select #editorType>
			<option value="document">Document</option>
			<option value="class">Class</option>
		</select>
		<select [(ngModel)]="selectedClass">
			<option value="newClass">Create New Class</option>
			<option *ngFor="let class of classes" [ngValue]="class">{{class.name}}</option>
		</select>
		<div class="spacer"></div>
		<reactive-form *ngIf="selectedClass" [formObject]="classObject" [valueObject]="selectedClass" show-buttons="true" class="flex-item flex-container-column"></reactive-form>
	`,
	styles:					[`
		select {color: black}
		.form-group {margin-bottom: 5px;}
		.spacer {margin-bottom: 20px;}
	`],
})

export class ClassEditor {
	propertyFields = [
		{name: "@type", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "@version", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "collate", type: "STRING", custom: {controlType: "select", options: ["ci", "cs", "default"], defaultValue: "ci", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "customFields", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "defaultValue", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "description", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "globalId", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "mandatory", type: "STRING", custom: {controlType: "checkbox", labelLeft: true, css: {input: {width: "auto"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "max", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "min", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "name", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "notNull", type: "STRING", custom: {controlType: "checkbox", labelLeft: true, css: {input: {width: "auto"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "readonly", type: "STRING", custom: {controlType: "checkbox", labelLeft: true, css: {input: {width: "auto"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "type", type: "STRING", custom: {controlType: "select", options: [{value: 0, label: "BOOLEAN"},{value: 1, label: "INTEGER"},{value: 2, label: "SHORT"},{value: 3, label: "LONG"},{value: 4, label: "FLOAT"},{value: 5, label: "DOUBLE"},{value: 6, label: "DATETIME"},{value: 7, label: "STRING"},{value: 8, label: "BINARY"},{value: 9, label: "EMBEDDED"},{value: 10, label: "EMBEDDEDLIST"},{value: 11, label: "EMBEDDEDSET"},{value: 12, label: "EMBEDDEDMAP"},{value: 13, label: "LINK"},{value: 14, label: "LINKLIST"},{value: 15, label: "LINKSET"},{value: 16, label: "LINKMAP"},{value: 17, label: "BYTE"},{value: 18, label: "TRANSIENT"},{value: 19, label: "DATE"},{value: 20, label: "CUSTOM"},{value: 21, label: "DECIMAL"},{value: 22, label: "LINKBAG"},{value: 23, label: "ANY"}], defaultValue: "STRING", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
	];
	propertyForm =	{
		showButtons: true,
		submitLabel:	"Submit",
		submit:				(x) => {console.log(x);},
		buttons:	[
			{label: "Save", func: () => {console.log("test");}, class: "btn-primary"}
		],
		controls: [
			{
				type: "fieldset",
				name: "Name Group",
				fields: [
					{classField: this.propertyFields[10]},
					{classField: this.propertyFields[13]},
					{classField: this.propertyFields[11]},
					{classField: this.propertyFields[12]},
					{classField: this.propertyFields[7]},
					{classField: this.propertyFields[4]},
					{classField: this.propertyFields[5]},
					{classField: this.propertyFields[6]},
					{classField: this.propertyFields[8]},
					{classField: this.propertyFields[9]},
					{classField: this.propertyFields[2]},
					{classField: this.propertyFields[3]},
				]
			}
		]
	};
	propertyObject = {
		fieldObject:	this.propertyFields,
		formObject:		this.propertyForm
	};
	classFields = [
		{name: "name", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "abstract", type: "BOOLEAN", custom: {controlType: "checkbox", labelLeft: true, css: {input: {width: "auto"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "clusterIds", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "clusterSelection", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "customFields", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "defaultClusterId", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "description", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "overSize", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "properties", type: "array", custom: {controlType: "array", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}},formObject: this.propertyObject},
		{name: "shortName", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "strictMode", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "superClass", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "superClasses", type: "STRING", custom: {controlType: "input", labelLeft: true, css: {input: {width: "175px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
	];
	classForm =	{
		submitLabel:	"Submit",
		submit:				(x) => {console.log(x);},
		controls: [
			{
				type: "fieldset",
				name: "Name Group",
				fields: [
					{classField: this.classFields[0]},
					{classField: this.classFields[1]},
					{classField: this.classFields[2]},
					{classField: this.classFields[3]},
					{classField: this.classFields[4]},
					{classField: this.classFields[5]},
					{classField: this.classFields[6]},
					{classField: this.classFields[7]},
					{classField: this.classFields[8]},
					{classField: this.classFields[9]},
				]
			}
		]
	};
	classObject = {
		fieldObject: this.classFields,
		formObject: this.classForm
	};

	constructor(private data: DataService) {
		data.getAllClasses().subscribe(x => {
			this.classes = x;
			console.log(x);
			this.selectedClass=x[0];
		});
	}
	convertClassToDocument = (classObject) => {
		let docClass = {};
		
		for(let i=0;i<classObject.properties.length;i++) {
			let prop = classObject.properties[i].name
			docClass[prop] = null;
		}
		return docClass;
	}
	getFormObject = (editorType) => {
		if(typeof this.selectedClass !== 'undefined') {
			switch(editorType) {
				case "class":
					console.log(this.selectedClass);
					break;
				case "document":
					let docOutput = this.convertClassToDocument(this.selectedClass);
					return docOutput;
					break;
			}
		}
	}
}