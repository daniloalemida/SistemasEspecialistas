import { RegrasService } from './../services/regras.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-regras',
  templateUrl: './cadastro-regras.component.html',
  styleUrls: ['./cadastro-regras.component.css']
})
export class CadastroRegrasComponent implements OnInit {

  constructor(private regrasService: RegrasService,
      private router: Router ) { }

  ngOnInit(): void {
    
  }

  createRegras(): void{
    this.regrasService.showMessage("Regra salva com sucesso!!!")
  }

  cancelar(){
    this.router.navigate(['/'])
  }



}
