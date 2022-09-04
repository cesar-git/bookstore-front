import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  ngOnInit(): void {
    this.findAll();
  }
  
  categorias: Categoria[] = [];
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

  constructor(private service: CategoriaService) { }  

  findAll() {
    this.service.findAll().subscribe(resposta => {      
        this.categorias = resposta;  
    })
  }
  
}
