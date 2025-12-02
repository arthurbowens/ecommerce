import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
  descricao: string;
  colecao: string;
  material?: string;
  cor?: string;
}

interface Filtro {
  nome: string;
  valor: string;
  selecionado: boolean;
}

@Component({
  selector: 'app-colecao',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './colecao.component.html'
})
export class ColecaoComponent implements OnInit {
  tipoColecao: string = '';
  tituloColecao: string = '';
  descricaoColecao: string = '';
  imagemHero: string = '';
  
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  
  paginaAtual = 1;
  itensPorPagina = 12;
  totalPaginas = 1;
  
  filtrosMaterial: Filtro[] = [
    { nome: 'Titânio', valor: 'titanio', selecionado: false },
    { nome: 'Acetato', valor: 'acetato', selecionado: false },
    { nome: 'Metal', valor: 'metal', selecionado: false }
  ];
  
  filtrosCor: Filtro[] = [
    { nome: 'Preto', valor: 'preto', selecionado: false },
    { nome: 'Dourado', valor: 'dourado', selecionado: false },
    { nome: 'Prata', valor: 'prata', selecionado: false },
    { nome: 'Transparente', valor: 'transparente', selecionado: false }
  ];
  
  filtrosPreco: Filtro[] = [
    { nome: 'Até R$ 1.000', valor: '0-1000', selecionado: false },
    { nome: 'R$ 1.000 - R$ 1.500', valor: '1000-1500', selecionado: false },
    { nome: 'Acima de R$ 1.500', valor: '1500-9999', selecionado: false }
  ];
  
  sidebarAberto = false;

  colecoes = {
    'oculos-sol': {
      titulo: 'Óculos de Sol',
      descricao: 'Proteção solar com estilo. Descubra nossa coleção exclusiva de óculos de sol com lentes polarizadas e designs únicos.',
      imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1920'
    },
    'oculos-grau': {
      titulo: 'Óculos de Grau',
      descricao: 'Elegância e funcionalidade em cada modelo. Óculos de grau com tecnologia avançada e design sofisticado.',
      imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1920'
    },
    'edicao-limitada': {
      titulo: 'Edição Limitada',
      descricao: 'Pecas exclusivas e numeradas. Coleção especial com designs únicos e materiais premium.',
      imagem: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=1920'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tipoColecao = params['tipo'] || '';
      this.carregarColecao();
      this.carregarProdutos();
    });
  }

  carregarColecao(): void {
    const colecao = this.colecoes[this.tipoColecao as keyof typeof this.colecoes];
    if (colecao) {
      this.tituloColecao = colecao.titulo;
      this.descricaoColecao = colecao.descricao;
      this.imagemHero = colecao.imagem;
    }
  }

  carregarProdutos(): void {
    // Simulação de produtos - em produção viria de um serviço
    this.produtos = [
      {
        id: 1,
        nome: 'Classic Titanium',
        categoria: 'Óculos de Grau',
        preco: 1299.00,
        imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
        descricao: 'Design atemporal em titânio premium',
        colecao: this.tipoColecao,
        material: 'titanio',
        cor: 'prata'
      },
      {
        id: 2,
        nome: 'Aviator Gold',
        categoria: 'Óculos de Sol',
        preco: 1599.00,
        imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
        descricao: 'Elegância dourada com lentes polarizadas',
        colecao: this.tipoColecao,
        material: 'metal',
        cor: 'dourado'
      },
      {
        id: 3,
        nome: 'Round Vintage',
        categoria: 'Óculos de Grau',
        preco: 899.00,
        imagem: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800',
        descricao: 'Estilo retrô com acabamento premium',
        colecao: this.tipoColecao,
        material: 'acetato',
        cor: 'preto'
      },
      {
        id: 4,
        nome: 'Elegant Silver',
        categoria: 'Óculos de Grau',
        preco: 1399.00,
        imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
        descricao: 'Refinamento em prata com design sofisticado',
        colecao: this.tipoColecao,
        material: 'titanio',
        cor: 'prata'
      },
      {
        id: 5,
        nome: 'Bold Black',
        categoria: 'Óculos de Sol',
        preco: 1199.00,
        imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
        descricao: 'Estilo ousado em preto com lentes espelhadas',
        colecao: this.tipoColecao,
        material: 'acetato',
        cor: 'preto'
      },
      {
        id: 6,
        nome: 'Minimalist Clear',
        categoria: 'Óculos de Grau',
        preco: 1099.00,
        imagem: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800',
        descricao: 'Design minimalista em acetato transparente',
        colecao: this.tipoColecao,
        material: 'acetato',
        cor: 'transparente'
      },
      {
        id: 7,
        nome: 'Premium Gold',
        categoria: 'Óculos de Sol',
        preco: 1799.00,
        imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
        descricao: 'Luxo em dourado com acabamento premium',
        colecao: this.tipoColecao,
        material: 'metal',
        cor: 'dourado'
      },
      {
        id: 8,
        nome: 'Classic Black',
        categoria: 'Óculos de Grau',
        preco: 999.00,
        imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
        descricao: 'Clássico atemporal em preto',
        colecao: this.tipoColecao,
        material: 'acetato',
        cor: 'preto'
      },
      {
        id: 9,
        nome: 'Sport Pro',
        categoria: 'Óculos de Sol',
        preco: 1399.00,
        imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
        descricao: 'Performance e estilo para esportes',
        colecao: this.tipoColecao,
        material: 'titanio',
        cor: 'preto'
      },
      {
        id: 10,
        nome: 'Vintage Brown',
        categoria: 'Óculos de Grau',
        preco: 1199.00,
        imagem: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800',
        descricao: 'Estilo vintage em marrom',
        colecao: this.tipoColecao,
        material: 'acetato',
        cor: 'preto'
      },
      {
        id: 11,
        nome: 'Modern Silver',
        categoria: 'Óculos de Sol',
        preco: 1499.00,
        imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
        descricao: 'Modernidade em prata brilhante',
        colecao: this.tipoColecao,
        material: 'metal',
        cor: 'prata'
      },
      {
        id: 12,
        nome: 'Luxury Gold',
        categoria: 'Óculos de Grau',
        preco: 1999.00,
        imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
        descricao: 'Luxo e elegância em dourado',
        colecao: this.tipoColecao,
        material: 'metal',
        cor: 'dourado'
      }
    ];
    
    this.aplicarFiltros();
  }

  toggleFiltro(categoria: 'material' | 'cor' | 'preco', valor: string): void {
    let filtrosArray: Filtro[];
    switch (categoria) {
      case 'material':
        filtrosArray = this.filtrosMaterial;
        break;
      case 'cor':
        filtrosArray = this.filtrosCor;
        break;
      case 'preco':
        filtrosArray = this.filtrosPreco;
        break;
    }
    
    const filtro = filtrosArray.find(f => f.valor === valor);
    if (filtro) {
      filtro.selecionado = !filtro.selecionado;
      this.aplicarFiltros();
      this.paginaAtual = 1;
    }
  }

  aplicarFiltros(): void {
    let produtosFiltrados = [...this.produtos];
    
    // Filtrar por material
    const materiaisSelecionados = this.filtrosMaterial.filter(f => f.selecionado).map(f => f.valor);
    if (materiaisSelecionados.length > 0) {
      produtosFiltrados = produtosFiltrados.filter(p => p.material && materiaisSelecionados.includes(p.material));
    }
    
    // Filtrar por cor
    const coresSelecionadas = this.filtrosCor.filter(f => f.selecionado).map(f => f.valor);
    if (coresSelecionadas.length > 0) {
      produtosFiltrados = produtosFiltrados.filter(p => p.cor && coresSelecionadas.includes(p.cor));
    }
    
    // Filtrar por preço
    const precosSelecionados = this.filtrosPreco.filter(f => f.selecionado);
    if (precosSelecionados.length > 0) {
      produtosFiltrados = produtosFiltrados.filter(p => {
        return precosSelecionados.some(f => {
          const [min, max] = f.valor.split('-').map(Number);
          return p.preco >= min && p.preco <= max;
        });
      });
    }
    
    this.produtosFiltrados = produtosFiltrados;
    this.totalPaginas = Math.ceil(this.produtosFiltrados.length / this.itensPorPagina);
    this.paginaAtual = Math.min(this.paginaAtual, this.totalPaginas || 1);
  }

  limparFiltros(): void {
    this.filtrosMaterial.forEach(filtro => filtro.selecionado = false);
    this.filtrosCor.forEach(filtro => filtro.selecionado = false);
    this.filtrosPreco.forEach(filtro => filtro.selecionado = false);
    this.aplicarFiltros();
  }

  get produtosPaginados(): Produto[] {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    return this.produtosFiltrados.slice(inicio, fim);
  }

  irParaPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  formatarPreco(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  }

  get outrasColecoes(): { tipo: string; titulo: string }[] {
    return Object.entries(this.colecoes)
      .filter(([tipo]) => tipo !== this.tipoColecao)
      .map(([tipo, dados]) => ({ tipo, titulo: dados.titulo }));
  }
}

