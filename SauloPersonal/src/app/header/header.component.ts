import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrollToElement(nomeDoElemento: string): void {
    const servicoElement = document.getElementById(nomeDoElemento);
    if (servicoElement) {
      servicoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
