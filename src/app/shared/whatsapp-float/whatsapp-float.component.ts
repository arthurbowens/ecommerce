import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-float.component.html'
})
export class WhatsAppFloatComponent {
  whatsappNumber = '5511999999999'; // Substitua pelo número real
  whatsappMessage = 'Olá! Gostaria de saber mais sobre os produtos.';

  openWhatsApp(): void {
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
    window.open(url, '_blank');
  }
}

