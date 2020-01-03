import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDesignerComponent } from './form-designer/form-designer.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'designer', component: FormDesignerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
