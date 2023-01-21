import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetUsersComponent } from './components/budget.users/budget.users.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'budget', component: BudgetComponent},
  {path:'budget/users', component: BudgetUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
