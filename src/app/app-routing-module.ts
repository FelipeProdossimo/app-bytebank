import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent}
]

@NgModule({
  //forRoot - é para dizer suas rotas, forChild é par modulos internos
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingComponent{}
