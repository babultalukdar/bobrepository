import { Component, Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input()
  data:String="";

  childData:string="data from child to parent";
  @Output()
  dataEvent=new EventEmitter<string>();
  constructor(){}
  emitData(){
    this.dataEvent.emit(this.childData);
  }
}

