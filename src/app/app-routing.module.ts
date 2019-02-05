import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { MainViewComponent } from './Components/main-view/main-view.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'main',
    component: MainViewComponent
  },
  {
    path: '' ,
    redirectTo:'/main',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
