import { Component, OnInit ,NgModule} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import{Router} from "@angular/router";
import{FormsModule} from "@angular/forms";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
cn:String="Select a Country";
cntry;show;date:String;
Confirmed:String;Deaths:String;Recovered:String;Active:String;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.http.get<any>('https://api.covid19api.com/countries').subscribe(data=>
    {
      this.cntry=data;
    });
  }
  onChange($event){
    let text = $event.target.value;
    this.cn=text;
    
    this.http.get<any>('https://api.covid19api.com/total/country/'+this.cn).subscribe(data=>
    {
this.show=data;
    });
  }
  onChange2($event){
    let date= $event.target.value;
    this.date=date;
    console.log(date);
    for(var i of this.show)
    {
      if(date==i.Date)
      {this.Confirmed=i.Confirmed;
        this.Deaths=i.Deaths;
        this.Active=i.Active;
        this.Recovered=i.Recovered;
      }
    }
  }
  navigate()
  {
    this.router.navigate(['/']);
  } 
}
