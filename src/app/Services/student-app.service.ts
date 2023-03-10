import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentAppService {

  constructor(private http:HttpClient) { }

  getStudentData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/1083711427319185408');
  }

  getWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }

  


}
