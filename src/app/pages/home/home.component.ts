import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProdutoDestaque {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
  descricao: string;
}

interface Colecao {
  id: number;
  titulo: string;
  subtitulo: string;
  imagem: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  produtosDestaque: ProdutoDestaque[] = [
    {
      id: 1,
      nome: 'Classic Titanium',
      categoria: 'Óculos de Grau',
      preco: 1299.00,
      imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
      descricao: 'Design atemporal em titânio premium'
    },
    {
      id: 2,
      nome: 'Aviator Gold',
      categoria: 'Óculos de Sol',
      preco: 1599.00,
      imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
      descricao: 'Elegância dourada com lentes polarizadas'
    },
    {
      id: 3,
      nome: 'Round Vintage',
      categoria: 'Óculos de Grau',
      preco: 899.00,
      imagem: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800',
      descricao: 'Estilo retrô com acabamento premium'
    },
    {
      id: 4,
      nome: 'Modern Black',
      categoria: 'Óculos de Sol',
      preco: 1199.00,
      imagem: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800',
      descricao: 'Design contemporâneo em acetato'
    }
  ];

  colecoes: Colecao[] = [
    {
      id: 1,
      titulo: 'Coleção Premium',
      subtitulo: 'Artesanato excepcional em materiais nobres',
      imagem: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=1200',
      link: '/produtos?colecao=premium'
    },
    {
      id: 2,
      titulo: 'Design Minimalista',
      subtitulo: 'Simplicidade e elegância em cada detalhe',
      imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200',
      link: '/produtos?colecao=minimalista'
    },
    {
      id: 3,
      titulo: 'Edição Limitada',
      subtitulo: 'Pecas exclusivas e numeradas',
      imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200',
      link: '/produtos?colecao=limitada'
    }
  ];

  formatarPreco(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  }
}
