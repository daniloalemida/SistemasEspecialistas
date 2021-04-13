import { Observable } from 'rxjs';
import { Sistema } from './../models/sistema.model';
import { Component, Input, OnInit } from '@angular/core';
import { SistemaService } from './../services/sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-sistema',
  templateUrl: './cadastro-sistema.component.html',
  styleUrls: ['./cadastro-sistema.component.css']
})
export class CadastroSistemaComponent implements OnInit {
  sistemas!: Sistema[];
  sistema: Sistema = {
    id: 0,
    nome: ""
  };
  abrirCadastro: boolean = false;
  editarCadastro: boolean = false;


  constructor(private sistemaService: SistemaService,
    private router: Router) { }

  ngOnInit(): void {
    this.sistemaService.read().subscribe(sistemas => {
      this.sistemas = sistemas
    })
  }

  createSistema(): void {
    this.sistemaService.create(this.sistema).subscribe(() => {
      this.sistemaService.showMessage("Sistema salvo com sucesso!!!")
      this.router.navigate(['/cadastro-sistema'])
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
      this.sistemaService.readById(id.toString()).subscribe(sistema => {
        this.sistema = sistema
      })
    }else{
      this.editarCadastro = status
    }
  }

  EditarCadastro(): void {  
    this.sistemaService.update(this.sistema).subscribe(() => {
      this.sistemaService.showMessage("Sistema Atualizado com sucesso!!!")
      this.router.navigate(['/cadastro-sistema'])
      location.reload();
    })
    
  }

  deletarSistema(id: any): void {
    this.sistemaService.delete(id).subscribe(() => {
      this.sistemaService.showMessage("Sistema Deletado com sucesso!!!")
      this.router.navigate(['/cadastro-sistema'])
      location.reload();

    })
  }


}
