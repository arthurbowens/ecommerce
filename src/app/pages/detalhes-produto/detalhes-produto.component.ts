import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  precoOriginal?: number;
  descricao: string;
  descricaoCompleta: string;
  imagens: string[];
  cores: string[];
  tamanhos?: string[];
  especificacoes: { [key: string]: string };
  garantia: string;
  avaliacoes: Avaliacao[];
  faqs: FAQ[];
}

interface Avaliacao {
  id: number;
  nome: string;
  data: string;
  nota: number;
  comentario: string;
  verificada: boolean;
}

interface FAQ {
  pergunta: string;
  resposta: string;
  aberta: boolean;
}

interface ProdutoRelacionado {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  categoria: string;
}

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './detalhes-produto.component.html'
})
export class DetalhesProdutoComponent implements OnInit {
  produto: Produto | null = null;
  imagemSelecionada = 0;
  corSelecionada = '';
  tamanhoSelecionado = '';
  zoomAtivo = false;
  imagemZoom = '';
  abaAtiva = 'descricao';
  produtosRelacionados: ProdutoRelacionado[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.carregarProduto(id);
      this.carregarProdutosRelacionados(id);
    });
  }

  carregarProduto(id: number): void {
    // Simulação de dados - em produção viria de um serviço
    this.produto = {
      id: id,
      nome: 'Classic Titanium',
      categoria: 'Óculos de Grau',
      preco: 1299.00,
      precoOriginal: 1599.00,
      descricao: 'Design atemporal em titânio premium com acabamento sofisticado',
      descricaoCompleta: 'Os óculos Classic Titanium representam o equilíbrio perfeito entre elegância e funcionalidade. Fabricados com titânio de alta qualidade, oferecem leveza excepcional e durabilidade incomparável. O design minimalista atemporal complementa qualquer estilo, enquanto a tecnologia avançada das lentes garante conforto visual durante todo o dia.',
      imagens: [
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200',
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200',
        'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200',
        'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=1200',
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200',
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200',
        'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200',
        'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=1200'
      ],
      cores: ['Preto', 'Prata', 'Dourado', 'Titanium'],
      tamanhos: ['Pequeno', 'Médio', 'Grande'],
      especificacoes: {
        'Material': 'Titânio Premium',
        'Peso': '18g',
        'Lentes': 'Anti-reflexo Blue Light',
        'Armação': 'Flexível e Resistente',
        'Garantia': '2 anos',
        'Origem': 'Brasil'
      },
      garantia: 'Garantia de 2 anos contra defeitos de fabricação. Troca grátis em até 30 dias se não estiver satisfeito.',
      avaliacoes: [
        {
          id: 1,
          nome: 'Maria Silva',
          data: '15/11/2024',
          nota: 5,
          comentario: 'Óculos incríveis! Muito leves e confortáveis. A qualidade é excepcional.',
          verificada: true
        },
        {
          id: 2,
          nome: 'João Santos',
          data: '10/11/2024',
          nota: 5,
          comentario: 'Superou minhas expectativas. Design elegante e acabamento perfeito.',
          verificada: true
        },
        {
          id: 3,
          nome: 'Ana Costa',
          data: '05/11/2024',
          nota: 4,
          comentario: 'Muito bom, mas achei um pouco caro. A qualidade compensa.',
          verificada: false
        }
      ],
      faqs: [
        {
          pergunta: 'As lentes são inclusas?',
          resposta: 'Sim, as lentes são inclusas no preço. Você pode escolher entre lentes de grau ou lentes de sol com proteção UV.',
          aberta: false
        },
        {
          pergunta: 'Qual o prazo de entrega?',
          resposta: 'O prazo de entrega é de 5 a 10 dias úteis para todo o Brasil, dependendo da região.',
          aberta: false
        },
        {
          pergunta: 'Posso trocar se não gostar?',
          resposta: 'Sim, oferecemos troca grátis em até 30 dias após a compra, desde que o produto esteja em perfeito estado.',
          aberta: false
        },
        {
          pergunta: 'Como escolher o tamanho correto?',
          resposta: 'Nossos óculos vêm em três tamanhos (Pequeno, Médio e Grande). Recomendamos medir a distância entre suas têmporas e consultar nossa tabela de medidas.',
          aberta: false
        },
        {
          pergunta: 'Os óculos vêm com estojo?',
          resposta: 'Sim, todos os óculos vêm com estojo premium e pano de limpeza incluso.',
          aberta: false
        }
      ]
    };

    if (this.produto.cores.length > 0) {
      this.corSelecionada = this.produto.cores[0];
    }
    if (this.produto.tamanhos && this.produto.tamanhos.length > 0) {
      this.tamanhoSelecionado = this.produto.tamanhos[0];
    }
  }

  carregarProdutosRelacionados(idAtual: number): void {
    // Simulação de produtos relacionados
    this.produtosRelacionados = [
      {
        id: 2,
        nome: 'Aviator Gold',
        preco: 1599.00,
        imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
        categoria: 'Óculos de Sol'
      },
      {
        id: 3,
        nome: 'Round Vintage',
        preco: 899.00,
        imagem: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800',
        categoria: 'Óculos de Grau'
      },
      {
        id: 4,
        nome: 'Elegant Silver',
        preco: 1399.00,
        imagem: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
        categoria: 'Óculos de Grau'
      },
      {
        id: 5,
        nome: 'Bold Black',
        preco: 1199.00,
        imagem: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
        categoria: 'Óculos de Sol'
      },
      {
        id: 6,
        nome: 'Minimalist Clear',
        preco: 1099.00,
        imagem: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800',
        categoria: 'Óculos de Grau'
      }
    ].filter(p => p.id !== idAtual).slice(0, 6);
  }

  selecionarImagem(index: number): void {
    this.imagemSelecionada = index;
  }

  ativarZoom(imagem: string): void {
    this.zoomAtivo = true;
    this.imagemZoom = imagem;
    document.body.style.overflow = 'hidden';
  }

  fecharZoom(): void {
    this.zoomAtivo = false;
    document.body.style.overflow = '';
  }

  selecionarCor(cor: string): void {
    this.corSelecionada = cor;
  }

  selecionarTamanho(tamanho: string): void {
    this.tamanhoSelecionado = tamanho;
  }

  mudarAba(aba: string): void {
    this.abaAtiva = aba;
  }

  toggleFAQ(index: number): void {
    if (this.produto) {
      this.produto.faqs[index].aberta = !this.produto.faqs[index].aberta;
    }
  }

  adicionarAoCarrinho(): void {
    if (!this.produto) return;
    
    const item = {
      id: this.produto.id,
      nome: this.produto.nome,
      preco: this.produto.preco,
      imagem: this.produto.imagens[0],
      cor: this.corSelecionada,
      tamanho: this.tamanhoSelecionado,
      quantidade: 1
    };
    
    // Em produção, isso seria um serviço
    console.log('Adicionado ao carrinho:', item);
    alert('Produto adicionado ao carrinho!');
  }

  abrirWhatsApp(): void {
    if (!this.produto) return;
    
    const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto: ${this.produto.nome}`);
    window.open(`https://wa.me/5511999999999?text=${mensagem}`, '_blank');
  }

  formatarPreco(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  }

  get mediaAvaliacoes(): number {
    if (!this.produto || this.produto.avaliacoes.length === 0) return 0;
    const soma = this.produto.avaliacoes.reduce((acc, av) => acc + av.nota, 0);
    return soma / this.produto.avaliacoes.length;
  }

  get especificacoesArray(): Array<[string, string]> {
    if (!this.produto) return [];
    return Object.entries(this.produto.especificacoes);
  }
}
