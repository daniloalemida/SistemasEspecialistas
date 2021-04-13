import { RegrasService } from './../services/regras.service';
import { VariavelService } from './../services/variavel.service';
import { Observable } from 'rxjs';
import { Sistema } from './../models/sistema.model';
import { Variavel } from './../models/variavel.model';
import { Component, Input, OnInit } from '@angular/core';
import { SistemaService } from './../services/sistema.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-cadastro-regras',
  templateUrl: './cadastro-regras.component.html',
  styleUrls: ['./cadastro-regras.component.css']
})
export class CadastroRegrasComponent implements OnInit {

  sistemas!: Sistema[];
  variaveis!: Variavel[];
  idSistemaSelecionado: number = 0;
  cont: number = 0;
  abrirperguntas: boolean = false;
  abrirrespsota: boolean = false;
  abrirresultado: boolean = false
  variavel: Variavel = {
    id: 0,
    idSistema: this.idSistemaSelecionado.toString(),
    valorvariavel: "",
    descricao: "",
    resposta: false,
    status: true
  };
  

  constructor(private regrasService: RegrasService, private sistemaService: SistemaService, private variavelService: VariavelService,
    private router: Router) { }

  ngOnInit(): void {
    this.sistemaService.read().subscribe(sistemas => {
      this.sistemas = sistemas
    }); 
  }

  cancelar(){
    this.router.navigate(['/'])
  }

  cancelarfim(){

    this.variaveis.forEach(element => {
      element.resposta = false
      element.status = true

      this.variavelService.update(element).subscribe(() => {
        this.variavelService.showMessage("Variavel Atualizado com sucesso!!!")
      })
    });


    this.router.navigate(['/'])
  }

  carregardados(){
    this.variavelService.readByIdSistema(this.idSistemaSelecionado).subscribe(variaveis => {
    this.variaveis = variaveis
   });
    this.abrirperguntas = true

    console.log(this.variaveis)
    console.log(this.idSistemaSelecionado)  
  }

  respostasim(id: any){
    this.variavelService.readById(id).subscribe(variavel => {
      this.variavel = variavel
      this.variavel.resposta = true
      this.variavel.status = false
    })    
      console.log(this.variavel)
      this.variavelService.update(this.variavel).subscribe(() => {
        this.variavelService.showMessage("Variavel Atualizado com sucesso!!!")
      })
  }
  respostanao(id: any){
    this.variavelService.readById(id).subscribe(variavel => {
      this.variavel = variavel
      this.variavel.resposta = false
      this.variavel.status = false
    })    
      console.log(this.variavel)
      this.variavelService.update(this.variavel).subscribe(() => {
        this.variavelService.showMessage("Variavel Atualizado com sucesso!!!")
      })
  }

  resultado(){
    this.abrirresultado = true;
  }
  
  msg(variavel: Variavel){
    const text =  `${variavel.descricao} para verificar se: ${variavel.valorvariavel}`
    this.variavelService.showMessage(text)
  }
  



}
