import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Emp } from '../models/emp';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  //private apiUrl = 'https://jsonplaceholder.typicode.com/emps';

  constructor(private http: HttpClient) { }

  emps: Emp[] =[

    {empid:1,empName:"CodeAdmirer",empsal:"150000"},
    {empid:2,empName:"XYZ",empsal:"110000"},
    {empid:3,empName:"ABC",empsal:"120000"},
  ];

  getEmpList():Emp[]{

    //As we are not having the api method for this ,so added the hardcoded values
    // return this.http.get<Emp[]>(this.apiUrl).pipe(

    //   catchError(error=> {

    //     console.error('Error while fecthing the emp list',error);
    //     return of([]); //fallback
    //   }

    //   )
    // )
    return this.emps;
  }
}
