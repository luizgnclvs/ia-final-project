import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageInputComponent } from './components/image-input/image-input.component';
import { MenuTemplateComponent } from './pages/menu-template/menu-template.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PantsFormComponent } from './components/pants-form/pants-form.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ShirtsFormComponent } from './components/shirts-form/shirts-form.component';
import { ShoesFormComponent } from './components/shoes-form/shoes-form.component';

const AngularMaterial = [
	MatButtonModule,
	MatCardModule,
	MatDividerModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatSelectModule,
	MatSlideToggleModule,
	MatToolbarModule,
];

@NgModule({
	declarations: [
		AboutComponent,
		AppComponent,
		HomeComponent,
		ImageInputComponent,
		MenuTemplateComponent,
		NavbarComponent,
		PantsFormComponent,
		RegistrationComponent,
		ShirtsFormComponent,
		ShoesFormComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		NoopAnimationsModule,
		ReactiveFormsModule,
		AngularMaterial,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
