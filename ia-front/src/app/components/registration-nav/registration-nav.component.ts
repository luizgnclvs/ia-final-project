import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-registration-nav',
	templateUrl: './registration-nav.component.html',
	styleUrls: ['./registration-nav.component.css']
})
export class RegistrationNavComponent {
	@Input() type: number = 0;
	@Output() change = new EventEmitter<number>();

	handleClick(type: number): void {
		this.change.emit(type);
	}
}
