import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http :HttpClient) { }
    url=  'http://localhost:3000/items';
    getData() 
    {
      return this.http.get(this.url);
    }
    postData(data:any) 
    {
      console.log(data);
      return this.http.post(this.url,data);
    }
    deleteData(id:any) 
  {
    return this.http.delete(`${this.url}/${id}`);
  }
  getStudentById(id:number) 
  {
    return this.http.get(`${this.url}/${id}`);
  }
  updateStudentData(id:number,data:any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  getOne(id:any) 
  {
    return this.http.get('http://localhost:3000/items/'+id);
  }
}
