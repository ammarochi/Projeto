import { DashboardComponent } from './dashboard/dashboard.component';
import { LivrosComponent } from './livros/livros.component';
import { AlunosComponent } from './alunos/alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'alunos', component: AlunosComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
