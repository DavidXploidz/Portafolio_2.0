import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';
import { MenuMobileService } from '../menu-mobile.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {  

  @Input() pasar_nieto: any;

  public enlace1: boolean = true;
  public enlace2: boolean = false;
  public enlace3: boolean = false;
  public enlace4: boolean = false;
  public enlace5: boolean = false;

  public pulsado : string = 'inicio'

  
  constructor(public DarkmodeService: DarkmodeService, public MenuMobileService: MenuMobileService ){

  }

  ngOnInit(){
    // animado numero
  }
  
  colorEnlace(pulsado: string){
    this.pulsado = pulsado    
  }
 
}
