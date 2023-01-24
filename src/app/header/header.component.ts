import { Component, Input, Output } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() pasar_hijo: any;
  @Output() pasar_padre: any;
  constructor(public DarkmodeService: DarkmodeService){
    
  }
  
}
