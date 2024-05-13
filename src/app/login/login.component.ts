import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuuilder.group({
      username: this.formBuuilder.control(''),
      password: this.formBuuilder.control('')
    })
  }

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let auth: boolean = this.authService.login(username, password);

    if (auth == true) {
      this.router.navigateByUrl("/admin");

    }

  }

  // onFormSubmit(): void {
  //   this.__logInService.addEtudiant(this.etForm.value).subscribe({
  //     next: (val: any) => {
  //
  //     },
  //     error: (err: any) => {
  //       console.error(err)
  //     }
  //   })
  // }

}

