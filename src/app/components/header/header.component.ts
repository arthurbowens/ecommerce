import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  menuAberto = false;
  buscaAberta = false;
  termoBusca = '';
  headerScrolled = false;
  quantidadeCarrinho = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.headerScrolled = scrollPosition > 50;
  }

  ngOnInit(): void {
    // Simular quantidade no carrinho (depois virá de um serviço)
    this.quantidadeCarrinho = 0;
  }

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
    if (this.menuAberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  fecharMenu(): void {
    this.menuAberto = false;
    document.body.style.overflow = '';
  }

  toggleBusca(): void {
    this.buscaAberta = !this.buscaAberta;
    if (!this.buscaAberta) {
      this.termoBusca = '';
    }
    if (this.buscaAberta) {
      this.fecharMenu();
    }
  }

  realizarBusca(): void {
    if (this.termoBusca.trim()) {
      // Implementar lógica de busca depois
      console.log('Buscando por:', this.termoBusca);
      this.toggleBusca();
    }
  }

  fecharBusca(): void {
    this.buscaAberta = false;
    this.termoBusca = '';
  }
}
