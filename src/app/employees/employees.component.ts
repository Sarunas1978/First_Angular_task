import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  form: FormGroup;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.employeeService.getEmployees().subscribe((data)=>{
      console.log(data.data);
      for(let element of data.data){
        let {id, first_name: name, email, avatar}=element
        this.employees.push({id, name, email, avatar})
      }
    })
  }

  private initForm(): void {
    this.form = this.fb.group({ // TODO: Add validations
      id: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
      avatar: new FormControl('', [Validators.required,  Validators.pattern("^.+\.(jpeg|jpg)$")])
    });
    // console.log(this.form)
  }

  addEmployee(): void {
    const newEmployee: Employee = {
      id: this.form.get('id').value,
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      avatar: this.form.get('avatar').value
    };
    console.log(this.form.controls['id'].status=="VALID")
    if(
      //  this.employees.filter(item => item.id==newEmployee.id).length===0 &&
          this.form.controls['id'].status=="VALID"
       && this.form.controls['name'].status=="VALID"
       && this.form.controls['email'].status=="VALID"
       && this.form.controls['avatar'].status=="VALID" ){
      this.employees.push(newEmployee);
      this.initForm();
    } 
    // TODO: Add an employee to the table
  }

  deleteEmployee(e): void {
     this.employees.splice(this.employees.findIndex(item => item.id===e),1)
    // TODO: Delete an employee from the table
  }
}
