import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { StoreService } from 'src/app/stores/store.service';

import { Pants } from 'src/app/models/pants';
import { Shirt } from 'src/app/models/shirt';
import { Shoes } from 'src/app/models/shoes';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	subscription: Subscription = new Subscription();
	title: string = '';
	type: number = 1;

	constructor(private store: StoreService) {
		this.setFormTitle() //remover após integração
	}

	ngOnInit(): void {
		// this.subscription = this.store.ResponseSubject$.subscribe(
		// 	response => {
		// 		this.type = response.type;
		// 		this.setFormTitle();
		// });
	}

	get hasFile$(): boolean {
		if (this.store.image) return true;
		else return false;
	}

	get imageSRC$(): string {
		return this.store.imageSRC;
	}

	setFormTitle(): void {
		if (this.type === 1) this.title = 'Cadastrar Camiseta';
		else if (this.type === 2) this.title = 'Cadastrar Calça'
		else this.title = 'Cadastrar Sapato'
	}

	sendClothingPiece(clothig: Shirt | Pants | Shoes): void {
		console.log(clothig);
	}

	handleFormChange(type: number): void {
		this.type = type;
		this.setFormTitle();
	}
}
