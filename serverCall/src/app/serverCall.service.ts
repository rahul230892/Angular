import { Injectable } from "../../node_modules/@angular/core";
import { Http } from '@angular/http';
@Injectable()
export class serverCall{
    constructor(private http:Http){}
    calling(){
        alert("service call");
        // this.http.get("https://raw.githubusercontent.com/sunnyharsh/live/master/Untitled%20Document%201.json");
    }
}