import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { ProdutoService } from '../produtos/produto.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  prodForm: FormGroup;
  constructor(private produtoServive: ProdutoService,
              private fb: FormBuilder,
              private router: Router) {
    this.criarForm();
  }
  criarForm(): any {
    this.prodForm = this.fb.group({
      nome: ['', Validators.required ],
      preco: ['', Validators.required ],
      quantidade: ['', Validators.required ]
    });
  }

  adicionar(nome, preco, quantidade){
    this.produtoServive.salvar(nome, preco, quantidade);
    this.router.navigate(['produtos']);

  }

  ngOnInit() {

  }

}
