import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForHerComponent } from './for-her/for-her.component';
import { ForHimComponent } from './for-him/for-him.component';

const routes: Routes = [
  { path: '', component: ForHerComponent },
  { path: 'for_him', component: ForHimComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }