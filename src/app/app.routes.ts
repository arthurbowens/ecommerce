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
    title: 'Início - Óculos Store'
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/produtos/produtos.component').then(m => m.ProdutosComponent),
    title: 'Produtos - Óculos Store'
  },
  {
    path: 'produto/:id',
    loadComponent: () => import('./pages/detalhes-produto/detalhes-produto.component').then(m => m.DetalhesProdutoComponent),
    title: 'Detalhes do Produto - Óculos Store'
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./pages/carrinho/carrinho.component').then(m => m.CarrinhoComponent),
    title: 'Carrinho - Óculos Store'
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent),
    title: 'Checkout - Óculos Store'
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
