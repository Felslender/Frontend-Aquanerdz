import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AquaService } from 'src/app/shared/services/aqua.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorMsg!: string;

  constructor(
    private fb: FormBuilder,
    private loginService: AquaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  get email(){
    return this.form.get('email')!;
  }
  get senha() {
    return this.form.get('senha')!;
  }


  loginUser(){
    const formValue = {
      email: this.email.value,
      senha: this.senha.value,
    }

    if (this.form.valid) {
      this.loginService.loginUser(formValue).subscribe(
        (post) => {
          console.log(post);
          // console.log(JSON.parse(JSON.stringify(post)).msg.split('login feito! = ')[1]);
          var token = JSON.parse(JSON.stringify(post)).token;

          localStorage.setItem('token', token);
          this.form.reset();
          this.router.navigate(['/systems']);
        },
        (error) => {
          console.log(error);
          this.errorMsg = 'Erro ao enviar o formulário... '+(error)+' ...Por favor, tente novamente.';
        }
      )
    }
  }
}
