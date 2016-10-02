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
		<modeled-form slimscroll [formObject]="getFormObject(editorType.value)" class="flex-item"></modeled-form>
	`,
	styles:					[`
		select {color: black}
		.form-group {margin-bottom: 5px;}
		modeled-form {margin-top: 20px;}
	`],
})

export class ClassEditor {
	constructor(private data: DataService) {
		data.getAllClasses().subscribe(x => {this.classes = x;})
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
					return this.selectedClass;
					break;
				case "document":
					let docOutput = this.convertClassToDocument(this.selectedClass);
					return docOutput;
					break;
			}
		}
	}
}