import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTemplateComponent } from './pages/menu-template/menu-template.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
	{
		path: '',
		component: MenuTemplateComponent,
		children: [
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'sobre',
				component: AboutComponent,
			},
			{
				path: 'cadastro',
				component: RegistrationComponent,
			},
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full',
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
