import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  
  // Create Data (i.e. Employee Records)
  info1: string[] = ["Adam Taylor", 'E234', 'at@abc.net']
  info2: string[] = ["Shawn Michael", 'E236', 'sm@abc.net']
  info3: string[] = ["Mark Fisher", 'E764', 'mf@abc.net']
  
  // Create Method
  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  addInfo1(info: any){
    this.info1.push(info)
    return this.info1
  }
  addInfo2(info: any){
    this.info2.push(info)
    return this.info2
  }
  addInfo3(info: any){
    this.info3.push(info)
    return this.info3
  }

  constructor() { }

}
