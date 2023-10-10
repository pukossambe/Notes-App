import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  responseData: any;
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }



  signin(): void {
    this.http.post('http://localhost:8080/api/auth/signin', this.form.getRawValue(), { withCredentials: true }).subscribe(res => {
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res)); // Store the token in localStorage
      this.router.navigate(['/main-layout']);
    })
  }
}
