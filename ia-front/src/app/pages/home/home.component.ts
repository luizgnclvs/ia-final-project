import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RNNResponse } from 'src/app/models/rnn-response';
import { ImageStoreService } from 'src/app/stores/image.store.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
	subscriptions: Array<Subscription> = new Array<Subscription>();
	response: RNNResponse | undefined;

	constructor(
		private imageStore: ImageStoreService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.subscriptions.push(
			this.imageStore.ResponseSubject$.subscribe(
				response => {
					this.response = response;
					this.triggerResponseNavigation();
				}
		));
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}

	triggerResponseNavigation(): void {
		const type = this.response?.type;

		if (type) this.router.navigate(['/cadastro']);
	}
}
