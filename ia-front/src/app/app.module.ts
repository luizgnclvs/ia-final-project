import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageInputComponent } from './components/image-input/image-input.component';
import { MenuTemplateComponent } from './pages/menu-template/menu-template.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const AngularMaterial = [
	MatButtonModule,
	MatCardModule,
	MatDividerModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatToolbarModule,
];

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		ImageInputComponent,
		MenuTemplateComponent,
		NavbarComponent,
		RegistrationComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		NoopAnimationsModule,
		AngularMaterial,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
