import { Component, OnInit } from '@angular/core';
import{Router} from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-whole',
  templateUrl: './whole.component.html',
  styleUrls: ['./whole.component.css']
})
export class WholeComponent implements OnInit {

  global:any;
  constructor(private http:HttpClient,private router:Router)  {
    
  } 

  ngOnInit(): void {
    this.http.get<any>('https://api.covid19api.com/summary').subscribe(data => {
          this.global=data['Countries'];
          console.log(this.global);
            });
  }


  navigate()
  {
    this.router.navigate(['/']);
  }
}
