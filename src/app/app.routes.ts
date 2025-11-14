import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Início - Jeremi Oculos'
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/produtos/produtos.component').then(m => m.ProdutosComponent),
    title: 'Produtos - Jeremi Oculos'
  },
  {
    path: 'produto/:id',
    loadComponent: () => import('./pages/detalhes-produto/detalhes-produto.component').then(m => m.DetalhesProdutoComponent),
    title: 'Detalhes do Produto - Jeremi Oculos'
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./pages/carrinho/carrinho.component').then(m => m.CarrinhoComponent),
    title: 'Carrinho - Jeremi Oculos'
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent),
    title: 'Checkout - Jeremi Oculos'
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
