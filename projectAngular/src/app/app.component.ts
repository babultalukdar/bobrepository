import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectAngular';
  data:String="Data from parent";
  dataFromChild:any;
  receiveData($event: any){
    this.dataFromChild=$event;
    console.log(this.dataFromChild);
  }
}
