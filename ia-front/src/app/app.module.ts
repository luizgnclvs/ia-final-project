import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MenuTemplateComponent } from './pages/menu-template/menu-template.component';
import { AboutComponent } from './pages/about/about.component';
import { ImageInputComponent } from './components/image-input/image-input.component';
import { HttpClientModule } from '@angular/common/http';

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
		NavbarComponent,
		MenuTemplateComponent,
		AboutComponent,
		ImageInputComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NoopAnimationsModule,
		HttpClientModule,
		AngularMaterial,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
