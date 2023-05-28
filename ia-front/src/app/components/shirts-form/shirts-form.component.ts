import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Shirt } from 'src/app/models/shirt';

@Component({
	selector: 'app-shirts-form',
	templateUrl: './shirts-form.component.html',
	styleUrls: ['./shirts-form.component.css']
})
export class ShirtsFormComponent implements OnInit {
	@Output() submit = new EventEmitter<Shirt>();
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
			model: ['', Validators.required],
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
