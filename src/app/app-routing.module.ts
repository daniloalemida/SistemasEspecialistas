import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroRegrasComponent } from './core/cadastro-regras/cadastro-regras.component';
import { CadastroVariaveisRegrasComponent } from './core/cadastro-variaveis-regras/cadastro-variaveis-regras.component';
import { CadastroSistemaComponent } from './core/cadastro-sistema/cadastro-sistema.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { 
    path: "",
    component: HomeComponent
  },
  { 
    path: "cadastro-regras",
    component: CadastroRegrasComponent
  },
  { 
    path: "cadastro-sistema",
    component: CadastroSistemaComponent
  },
  { 
    path: "cadastro-variaveis",
    component: CadastroVariaveisRegrasComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
