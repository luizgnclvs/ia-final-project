import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Shoes } from 'src/app/models/shoes';

@Component({
	selector: 'app-shoes-form',
	templateUrl: './shoes-form.component.html',
	styleUrls: ['./shoes-form.component.css']
})
export class ShoesFormComponent {
	@Output() submit = new EventEmitter<Shoes>();
	form!: FormGroup;
	
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm(): void {
		this.form = this.formBuilder.group({
			originalPrice: [0, Validators.compose([Validators.required, Validators.min(0)])],
			size: ['M', Validators.required],
			color: ['', Validators.required],
			brand: ['', Validators.required],
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
