import { Component } from '@angular/core';
import {WhatsappService} from "../whatsapp.service";

@Component({
  selector: 'app-apelo-2',
  standalone: true,
  imports: [],
  templateUrl: './apelo-2.component.html',
  styleUrl: './apelo-2.component.scss'
})
export class Apelo2Component {
  constructor(private whatsappService: WhatsappService) { }
  redirectToWhatsApp() {
    this.whatsappService.redirectToWhatsApp();
  }

  protected readonly WhatsappService = WhatsappService;
}
