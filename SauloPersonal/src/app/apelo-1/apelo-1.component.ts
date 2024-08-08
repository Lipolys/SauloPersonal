import { Component } from '@angular/core';
import { WhatsappService } from '../whatsapp.service';

@Component({
  selector: 'app-apelo-1',
  standalone: true,
  imports: [],
  templateUrl: './apelo-1.component.html',
  styleUrl: './apelo-1.component.scss'
})
export class Apelo1Component {
  constructor(private whatsappService: WhatsappService) { }
  redirectToWhatsApp() {
    this.whatsappService.redirectToWhatsApp();
  }
}
