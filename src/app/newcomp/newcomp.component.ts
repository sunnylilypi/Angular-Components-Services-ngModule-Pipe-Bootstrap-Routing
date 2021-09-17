import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {

  constructor() { }
  public day = new Date().getDay()
  public day2 = 5

  ngOnInit(): void {
  }

}
