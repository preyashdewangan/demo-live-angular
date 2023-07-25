import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  data:any;
  id:any;
  constructor(private route:ActivatedRoute,private student:StudentService)
  {
  }

    ngOnInit()
    {
    this.id=this.route.snapshot.params['id'];
    this.getOne();
    }
    getOne() 
    {
      this.student.getOne(this.id).subscribe(data=>{
        this.data=data;
        console.log(this.data);

      })
    } 
}
