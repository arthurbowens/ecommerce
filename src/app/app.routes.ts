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
            title: 'Início - Soe Lunnetes'
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/produtos/produtos.component').then(m => m.ProdutosComponent),
            title: 'Produtos - Soe Lunnetes'
  },
  {
    path: 'produto/:id',
    loadComponent: () => import('./pages/detalhes-produto/detalhes-produto.component').then(m => m.DetalhesProdutoComponent),
            title: 'Detalhes do Produto - Soe Lunnetes'
  },
  {
    path: 'carrinho',
    loadComponent: () => import('./pages/carrinho/carrinho.component').then(m => m.CarrinhoComponent),
            title: 'Carrinho - Soe Lunnetes'
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent),
            title: 'Checkout - Soe Lunnetes'
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
