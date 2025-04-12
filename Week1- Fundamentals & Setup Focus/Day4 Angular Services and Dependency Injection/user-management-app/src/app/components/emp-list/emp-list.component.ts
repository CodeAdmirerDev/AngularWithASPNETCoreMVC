import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Emp } from '../../models/emp';
import { EmpService } from '../../services/emp.service';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css',
  imports:[CommonModule]
  
})
export class EmpListComponent implements OnInit {

  emps: Emp[] =[
    {empid:1,empName:"CodeAdmirer",empsal:"150000"},
  ];

  constructor(private empService:EmpService ){}

  ngOnInit():void{

this.emps =    this.empService.getEmpList();
  }

}
