import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    // console.log(this.form.getRawValue());
    this.http.post('http://localhost:8080/api/auth/signup', this.form.getRawValue()).subscribe(res => {
      this.router.navigate(['/login']);
    })
  }
}
