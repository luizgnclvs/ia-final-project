import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class RegistrationComponent implements OnInit, OnDestroy {
	subscription: Subscription = new Subscription();
	response: RNNResponse | undefined;
	type: number = -1;
	title: string = '';

	constructor(private store: StoreService) {}

	ngOnInit(): void {
		this.subscription = this.store.ResponseSubject$.subscribe(
			response => {
				this.response = response;
				this.triggerFormChange();
				this.setFormTitle(response.name);
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	get hasFile$(): boolean {
		if (this.store.image) return true;
		else return false;
	}

	get imageSRC$(): string {
		return this.store.imageSRC;
	}

	triggerFormChange(): void {
		if (this.response) {
			this.type = this.response.type;
		}
	}

	setFormTitle(input: string) {
		if (input) this.title = `Cadastro de ${input}`;
		else this.changeFormTitle();
	}

	changeFormTitle(): void {
		if (this.type === 0) this.setFormTitle('Calça');
		else if (this.type === 1) this.setFormTitle('Camisa');
		else this.setFormTitle('Sapato');
	}

	sendClothingPiece(clothig: Shirt | Pants | Shoes): void {
		console.log(clothig);
		this.store.resetResponse();
	}

	handleFormChange(type: number): void {
		this.type = type;
		this.changeFormTitle();
	}
}
