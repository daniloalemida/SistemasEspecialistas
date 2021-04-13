import { VariavelService } from './../services/variavel.service';
import { Observable } from 'rxjs';
import { Sistema } from './../models/sistema.model';
import { Variavel } from './../models/variavel.model';
import { Component, Input, OnInit } from '@angular/core';
import { SistemaService } from './../services/sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-variaveis-regras',
  templateUrl: './cadastro-variaveis-regras.component.html',
  styleUrls: ['./cadastro-variaveis-regras.component.css']
})
export class CadastroVariaveisRegrasComponent implements OnInit {
  variaveis!: Variavel[];
  abrirCadastro: boolean = false;
  editarCadastro: boolean = false;
  sistemas!: Sistema[];
  idSistemaSelecionado: number = 0;
  variavel: Variavel = {
    id: 0,
    idSistema: this.idSistemaSelecionado.toString(),
    valorvariavel: "",
    descricao: "",
    resposta: false,
    status: true
  };
  
  constructor(private sistemaService: SistemaService, private variavelService: VariavelService,
    private router: Router) { }

  ngOnInit(): void {
    this.sistemaService.read().subscribe(sistemas => {
      this.sistemas = sistemas
    });      
  }

  createVariavel(): void {
    this.variavel.idSistema = this.idSistemaSelecionado.toString()
    this.variavelService.create(this.variavel).subscribe(() => {
      this.variavelService.showMessage("Variavel salva com sucesso!!!")
      location.reload();
    })
  }

  cancelar() {
    this.router.navigate(['/'])
  }

  openCadastro(status: boolean) {
    this.abrirCadastro = status
  }

  openEditarCadastro(id: any, status: boolean) {
    if (status) {
      this.editarCadastro = status
      this.variavelService.readById(id.toString()).subscribe(variavel => {
        this.variavel = variavel
      })
    }else{
      this.editarCadastro = status
    }
  }

  EditarCadastro(): void {  
    this.variavelService.update(this.variavel).subscribe(() => {
      this.variavelService.showMessage("Variavel Atualizado com sucesso!!!")
      this.router.navigate(['cadastro-variaveis'])
      location.reload();
    })
    
  }

  deletarSistema(id: any): void {
    this.variavelService.delete(id).subscribe(() => {
      this.variavelService.showMessage("Variavel Deletado com sucesso!!!")
      this.router.navigate(['cadastro-variaveis'])
      location.reload();

    })
  }

  carregarVariaveis(){
    this.variavelService.readByIdSistema(this.idSistemaSelecionado).subscribe(variaveis => {
    this.variaveis = variaveis
  });
    console.log(this.variaveis)
    console.log(this.idSistemaSelecionado)  
  }

}


