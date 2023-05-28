import { Component } from '@angular/core';
import { RNNResponse } from 'src/app/models/rnn-response';
import { StoreService } from 'src/app/stores/store.service';

@Component({
	selector: 'app-image-input',
	templateUrl: './image-input.component.html',
	styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent {
	displayName: string = '';
	displayCondition: boolean = false;
	file: File | undefined;
	response: RNNResponse | undefined;

	constructor(private store: StoreService) {}

	handleFileInputChange (event: any): void {
		const file = event.target.files[0];

		if (file && file instanceof File) {
			this.file = file;
			this.displayName = file.name;
			this.displayCondition = true;

			this.store.receiveImage(file);
		} else {
			this.file = undefined;
			this.displayName = '';
			this.displayCondition = false;
		}
	}

	get imageSRC$(): string {
		return this.store.imageSRC;
	}

	handleSubmit(): void {
		this.store.submitImage();
	}
}
