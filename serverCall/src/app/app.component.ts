import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string="server call";
  record:any;
  name:string;
  constructor(private _http:Http){}
  call(){
    
   var result =this._http.get("https://raw.githubusercontent.com/sunnyharsh/live/master/Untitled%20Document%201.json")
   .subscribe(data=>{
     this.record=JSON.parse(data._body).features;
     
     for(let i=0 ; i<this.record.length; i++){
      console.log("data is " , this.record[i].name);
     }
   })
}
}