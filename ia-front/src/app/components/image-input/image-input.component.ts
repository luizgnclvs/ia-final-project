import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RNNResponse } from 'src/app/models/rnn-response';
import { ImageStoreService } from 'src/app/stores/image.store.service';

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

	constructor(private imageStore: ImageStoreService) {}

	handleFileInputChange (event: any): void {
		const file = event.target.files[0];

		if (file && file instanceof File) {
			this.file = file;
			this.displayName = file.name;
			this.displayCondition = true;

			this.imageStore.receiveImage(file);
		} else {
			this.file = undefined;
			this.displayName = '';
			this.displayCondition = false;
		}
	}

	get imageSRC$(): string {
		return this.imageStore.imageSRC;
	}

	handleSubmit(): void {
		this.imageStore.submitImage();
	}
}
