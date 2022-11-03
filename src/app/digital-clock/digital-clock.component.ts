import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  constructor() { }

  private daysArray =['Sunday', 'Monday' , 'Tuesday','Wednesday','Thursday','Friday','Saturday'];

  private date= new Date();
  public hour:any;
  public minute:string;
  public second:string;
  public ampm:string;
  public day:string;

  ngOnInit() {
    
    setInterval(()=>{
      const date =new Date();
      this.updateDate(date);
    },1000) //this will call after each 1 second

    this.day =this.daysArray[this.date.getDate()];
    //getday() returns the day in integer format;
  
  }
  
  private updateDate(date){

    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours%12;  //Makes The Hour in 12 hours format
    this.hour = this.hour ? this.hour : 12; //if the hour is 0 then 12 is assigned to it
    this.hour = this.hour< 10 ? '0' + this.hour : this.hour; // if the hour is single digit it add 0 infront

    const minutes =date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();


    const seconds= date.getSeconds();
    this.second=seconds <10 ? '0' + seconds : seconds.toString();


  }

}
