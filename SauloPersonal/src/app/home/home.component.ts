import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NgOptimizedImage} from "@angular/common";
import {Apelo1Component} from "../apelo-1/apelo-1.component";
import {SobreComponent} from "../sobre/sobre.component";
import {Apelo2Component} from "../apelo-2/apelo-2.component";
import {ServicoComponent} from "../servico/servico.component";
import {Apelo3Component} from "../apelo-3/apelo-3.component";
import {DepoimentosComponent} from "../depoimentos/depoimentos.component";
import {Apelo4Component} from "../apelo-4/apelo-4.component";
import {FooterComponent} from "../footer/footer.component";
import {WppComponent} from "../wpp/wpp.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    Apelo1Component,
    SobreComponent,
    Apelo2Component,
    ServicoComponent,
    Apelo3Component,
    DepoimentosComponent,
    Apelo4Component,
    FooterComponent,
    WppComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
