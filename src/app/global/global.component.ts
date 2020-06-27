import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import{Router} from "@angular/router"
@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
global:any;
  constructor(private http:HttpClient,private router:Router)  {
    
  } 

  ngOnInit(): void {
    this.http.get<any>('https://api.covid19api.com/summary').subscribe(data => {
          this.global=data['Global']
          console.log(this.global);
            });
  }
  navigate()
  {
    this.router.navigate(['/']);
  }
}
