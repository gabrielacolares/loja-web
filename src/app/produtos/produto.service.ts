import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }
  uri = 'http://localhost:8080';
  
  
  getProdutos() {
    return this.http.get(`${this.uri}/produtos`);
  }
  
  salvar(nome, preco, quantidade) {
    const urlCadastrar = `${this.uri}/produtos`;
    const produto = {
      nome: nome,
      preco: preco,
      quantidade: quantidade
    };
    this.http.post(urlCadastrar, produto).subscribe(res => console.log('Done'));
  }
  
  deletar(id) {
    return this.http.delete(`${this.uri}/produtos/${id}`)
  }
  editar(id) {
    return this.http.get(`${this.uri}/produtos/${id}`)
  }
  updateProduto(nome, preco, quantidade, id) {

    const obj = {
      nome: nome,
      preco: preco,
      quantidade: quantidade
    };
    this
      .http
      .put(`${this.uri}/produtos/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
}