import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './core/footer/footer.component';
import { NavComponent } from './core/nav/nav.component';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './core/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CadastroRegrasComponent } from './core/cadastro-regras/cadastro-regras.component';
import { CadastroVariaveisRegrasComponent } from './core/cadastro-variaveis-regras/cadastro-variaveis-regras.component';
import { CadastroSistemaComponent } from './core/cadastro-sistema/cadastro-sistema.component';

import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CadastroRegrasComponent,
    CadastroVariaveisRegrasComponent,
    CadastroSistemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
