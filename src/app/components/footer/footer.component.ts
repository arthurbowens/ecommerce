import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  anoAtual = new Date().getFullYear();
  email = 'contato@soelunnetes.com.br';
  telefone = '+55 (11) 99999-9999';
  whatsapp = '5511999999999';
}

