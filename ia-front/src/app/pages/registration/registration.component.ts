import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { StoreService } from 'src/app/stores/store.service';

import { Pants } from 'src/app/models/pants';
import { Shirt } from 'src/app/models/shirt';
import { Shoes } from 'src/app/models/shoes';
import { RNNResponse } from 'src/app/models/rnn-response';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	subscription: Subscription = new Subscription();
	response: RNNResponse | undefined;

	constructor(private store: StoreService) {}

	ngOnInit(): void {
		this.subscription = this.store.ResponseSubject$.subscribe(
			response => {
				this.response = response;
		});
	}

	get hasFile$(): boolean {
		if (this.store.image) return true;
		else return false;
	}

	get imageSRC$(): string {
		return this.store.imageSRC;
	}

	sendClothingPiece(clothig: Shirt | Pants | Shoes): void {
		console.log(clothig);
	}

	handleFormChange(type: number): void {
		if (this.response && (type === 0 || type === 1 || type === 2))
		this.response.type = type;
	}
}
