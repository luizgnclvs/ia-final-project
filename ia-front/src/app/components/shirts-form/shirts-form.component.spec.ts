import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtsFormComponent } from './shirts-form.component';

describe('ShirtsFormComponent', () => {
	let component: ShirtsFormComponent;
	let fixture: ComponentFixture<ShirtsFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ShirtsFormComponent ]
		})
		.compileComponents();

		fixture = TestBed.createComponent(ShirtsFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
