import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-image-input',
	templateUrl: './image-input.component.html',
	styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent {
	displayName: string = '';
	displayCondition: boolean = false;
	file: File | undefined;

	handleFileInputChange (event: any): void {
		const file = event.target.files[0];

		if (file && file instanceof File) {
			this.file = file;
			this.displayName = file.name;
			this.displayCondition = true;
		} else {
			this.file = undefined;
			this.displayName = '';
			this.displayCondition = false;
		}
	}

	handleSubmit() {}
}
