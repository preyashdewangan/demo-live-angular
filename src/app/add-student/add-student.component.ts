import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(public student:StudentService) 
  {

  }

addStudent = new FormGroup({
  name: new FormControl( '' ),
  email: new FormControl( '' )
});
SaveData() 
{
  this.student.postData(this.addStudent.value).subscribe((result: any) => 
  {
    console.log(result);
  })
}
}
