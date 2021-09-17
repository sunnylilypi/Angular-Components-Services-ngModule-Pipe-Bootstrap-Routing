import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';  // import the service created

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]  // include service instance created
})
export class EmpInfoComponent implements OnInit {

  // Define variables
  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  // Define functions
  getInfoFromServiceClass1(){
    this.infoReceived1 = this.rservice.getinfo1()
  }
  getInfoFromServiceClass2(){
    this.infoReceived2 = this.rservice.getinfo2()
  }
  getInfoFromServiceClass3(){
    this.infoReceived3 = this.rservice.getinfo3()
  }
  constructor(private rservice: RecordsService) { }  // rservice is a property that allows us to access all the methods defined in the service class

  ngOnInit(): void {
  }

  updateInfo1(frm1: any){
    // console.log("Data received", frm1)
    this.rservice.addInfo1(frm1.value.location)
  }
  updateInfo2(frm2: any){
    // console.log("Data received", frm2)
    this.rservice.addInfo2(frm2.value.location)
  }
  updateInfo3(frm3: any){
    // console.log("Data received", frm3)
    this.rservice.addInfo3(frm3.value.location)
  }

}
