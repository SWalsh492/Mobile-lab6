import { Component, OnInit } from '@angular/core';
import { StudentAppService } from './Services/student-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'student-app';
  myStudents:any[]=[];
  myWeather:any[]=[];

  constructor(private service: StudentAppService){}

  ngOnInit(): void {
    this.service.getStudentData().subscribe(
      (data)=>{
        this.myStudents = data.students;
      }
      );

      this.service.getWeatherData().subscribe(
        (data)=>{
          this.myWeather = data.weather;
        }
      )

  }

}
