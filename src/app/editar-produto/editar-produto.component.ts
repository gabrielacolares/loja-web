import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../produtos/produto.service';
import { Produto } from '../produtos/produto';


@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: any;
  angForm: FormGroup;
  produtos: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ProdutoService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.produto = {};
    this.route.params.subscribe(params => {
      this.service.editar(params['id']).subscribe(res => {
        this.produto = res;

      });
    });

  }
  populate(){
    this.service.getProdutos().subscribe((data) =>{
    this.produtos = data;
    });
  }
  updateProduto(nome, preco, quantidade ) {
      this.route.params.subscribe(params => {
      this.service.updateProduto(nome, preco, quantidade, params['id']);
      this.populate();
      this.router.navigate(['produtos']);
   });
  }
}
