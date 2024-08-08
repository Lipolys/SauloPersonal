import { Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-servico',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.scss'
})
export class ServicoComponent {
}
