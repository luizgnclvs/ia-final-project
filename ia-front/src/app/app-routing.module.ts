import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTemplateComponent } from './pages/menu-template/menu-template.component';
import { AboutComponent } from './pages/about/about.component';
import { ImageInputComponent } from './components/image-input/image-input.component';

const routes: Routes = [
	{
		path: '',
		component: MenuTemplateComponent,
		children: [
			{
				path: 'home',
				component: ImageInputComponent
			},
			{
				path: 'about',
				component: AboutComponent,
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
export class AppRoutingModule { }
