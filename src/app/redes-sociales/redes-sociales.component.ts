import { Component } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent {
  constructor(public DarkmodeService: DarkmodeService){

  }
}
