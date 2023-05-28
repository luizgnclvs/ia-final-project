import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantsFormComponent } from './pants-form.component';

describe('PantsFormComponent', () => {
	let component: PantsFormComponent;
	let fixture: ComponentFixture<PantsFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ PantsFormComponent ]
		})
		.compileComponents();

		fixture = TestBed.createComponent(PantsFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
