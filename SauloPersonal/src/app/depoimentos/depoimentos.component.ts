import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent {
  depoimentos = [
    {
      foto: 'foto-persona-1.png',
      nome: 'Priscila Barros',
      depoimento: 'Tenho seguido os treinos do Saulo e nunca me senti tão bem com meu corpo quanto me sinto hoje.'
    },

    {
      foto: 'foto-persona-2.png',
      nome: 'Pedro Pereira',
      depoimento: 'Seguir o programa do Saulo me trouxe mais energia e autoestima. Recomendo para todos que querem uma mudança positiva.'
    },

    {
      foto: 'foto-persona-3.png',
      nome: 'Luiz Felipe',
      depoimento: 'Sinto que estou mais forte e saudável a cada dia. Acompanhamento de qualidade faz toda a diferença!'
    },

    {
      foto: 'foto-persona-4.png',
      nome: 'Yasmin Bruna',
      depoimento: 'Com os treinos online do Saulo, consegui perder peso e ganhar músculos. Estou muito satisfeita com os resultados!'
    }
  ]
}
