import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  public name = "UT Austin"
  public topic = "Data Binding"
  public value = ""
  public image = "./assets/Logo.png"

  onClick(){
    console.log("Thank you for subscribing")
  }
}
