import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Pants } from 'src/app/models/pants';

@Component({
	selector: 'app-pants-form',
	templateUrl: './pants-form.component.html',
	styleUrls: ['./pants-form.component.css']
})
export class PantsFormComponent {
	@Output() submit = new EventEmitter<Pants>();
	form!: FormGroup;
	sizes = ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XXG'];

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm(): void {
		this.form = this.formBuilder.group({
			originalPrice: [0, Validators.compose([Validators.required, Validators.min(0)])],
			size: ['M', Validators.required],
			color: ['', Validators.required],
			cloth: ['', Validators.required],
			print: [false, Validators.required],
			state: ['', Validators.required],
		});
	}

	onSubmit(directive: FormGroupDirective): void {
		if (this.form.valid) {
			this.submit.emit(this.form.value);
			directive.resetForm();
		}
	}
}
