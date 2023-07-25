import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {


StudentData:any=[];
  constructor(private student:StudentService)
  {

  }
  ngOnInit():void 
  {
    this.student.getData().subscribe((data: any)=> {
      console.log(data);
      this.StudentData=data;
    })
  }
  delete(student_Id:any) 
  {
    this.student.deleteData(student_Id).subscribe((result:any)=>{
      this.ngOnInit();
    })
  }
}