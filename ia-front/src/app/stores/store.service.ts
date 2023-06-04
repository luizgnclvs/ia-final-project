import { Injectable } from '@angular/core';
import { ImageService } from '../services/image.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { RNNResponse } from '../models/rnn-response';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class StoreService {
	image: File | undefined;
	imageSRC: any;

	private ResponseSubject: BehaviorSubject<RNNResponse>;

	constructor(private imageService: ImageService) {
		this.ResponseSubject = new BehaviorSubject<RNNResponse>({} as RNNResponse);
	}

	get ResponseSubject$(): Observable<RNNResponse> {
		return this.ResponseSubject.asObservable();
	}

	public receiveImage(file: File): void {
		this.image = file;

		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.addEventListener('load', () => {
			this.imageSRC = reader.result
		});
	}

	public submitImage(): void {
		if (this.image) {
			this.imageService.postImage(this.image).subscribe({
				next: response => {
					this.ResponseSubject.next(response);
				},
				error: error => console.error(error),
			});
		}
	}
}
