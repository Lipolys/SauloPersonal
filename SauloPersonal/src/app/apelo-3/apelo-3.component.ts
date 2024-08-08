import { Component } from '@angular/core';
import {WhatsappService} from "../whatsapp.service";

@Component({
  selector: 'app-apelo-3',
  standalone: true,
  imports: [],
  templateUrl: './apelo-3.component.html',
  styleUrl: './apelo-3.component.scss'
})
export class Apelo3Component {
  constructor(private whatsappService: WhatsappService) { }
  redirectToWhatsApp() {
    this.whatsappService.redirectToWhatsApp();
  }
}
