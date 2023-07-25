import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ViewComponent } from './view/view.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {
    path:'add',
    component:AddStudentComponent
  },
 
  {
    path:'list',
    component:ListStudentComponent
  },
  {
    path:'view/:id',
    component:ViewComponent
  },
  {
    path:'edit/:id',
    component:EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
