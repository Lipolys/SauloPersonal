import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {WhatsappService} from "../whatsapp.service";

@Component({
  selector: 'app-apelo-4',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './apelo-4.component.html',
  styleUrl: './apelo-4.component.scss'
})
export class Apelo4Component {

  constructor(private whatsappService: WhatsappService) { }
  redirectToWhatsApp() {
    this.whatsappService.redirectToWhatsApp();
  }
}
