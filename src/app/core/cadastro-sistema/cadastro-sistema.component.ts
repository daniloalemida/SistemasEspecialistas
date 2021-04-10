import { Sistema } from './../models/sistema.model';
import { Component, OnInit } from '@angular/core';
import { SistemaService } from './../services/sistema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-sistema',
  templateUrl: './cadastro-sistema.component.html',
  styleUrls: ['./cadastro-sistema.component.css']
})
export class CadastroSistemaComponent implements OnInit {

  sistema: Sistema = {
    nome: "teste"
  }

  constructor(private sistemaService: SistemaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createSistema(): void{

    this.sistemaService.create(this.sistema).subscribe(() => {
      this.sistemaService.showMessage("Sistema salvo com sucesso!!!")
      this.router.navigate(['/cadastro-sistema'])
    })
    
  }

  cancelar(){
    this.router.navigate(['/'])
  }

}
