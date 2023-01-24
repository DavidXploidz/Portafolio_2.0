import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  // message: string = 'Hola mundo'
  // toggle: boolean = false;
  @Input() pasar_hijo : any;

  constructor(public DarkmodeService: DarkmodeService){

  }


  // @Output() messageEvent = new EventEmitter<string>();
  // @Output() toggleMode = new EventEmitter<boolean>();


  // sendMessage(){
  //   this.messageEvent.emit(this.message)
  // }


}
