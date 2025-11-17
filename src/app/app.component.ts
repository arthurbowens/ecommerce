import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WhatsAppFloatComponent } from './shared/whatsapp-float/whatsapp-float.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WhatsAppFloatComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ecommerce';
}
