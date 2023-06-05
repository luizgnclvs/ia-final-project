import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { StoreService } from 'src/app/stores/store.service';
import { RNNResponse } from 'src/app/models/rnn-response';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
	subscription: Subscription = new Subscription();
	response: RNNResponse | undefined;

	constructor(
		private store: StoreService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.subscription = this.store.ResponseSubject$.subscribe(
			response => {
				this.response = response;
				this.triggerResponseNavigation();
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	triggerResponseNavigation(): void {
		const type = this.response?.type;

		if (type === 0 || type === 1 || type === 2)
		this.router.navigate(['/cadastro']);
	}
}
