import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';

import { ProdutoService } from './produtos/produto.service';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

const routes : Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'produtos', component:ProdutosComponent},
  {path: 'cadastrar-produtos', component:CadastrarProdutosComponent},
  {path: 'editar-produto/:id', component:EditarProdutoComponent},
  {path: 'deletar-produto/:id', component:EditarProdutoComponent},
  { path: 'categorias', component: CategoriasComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CategoriasComponent,
    CadastrarProdutosComponent,
    CadastrarProdutosComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
