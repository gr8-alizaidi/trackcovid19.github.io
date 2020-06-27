import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid 19';
  constructor(public router:Router){}
}
