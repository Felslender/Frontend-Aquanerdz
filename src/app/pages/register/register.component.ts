import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/shared/pswd.validator';
import { AquaService } from 'src/app/shared/services/aqua.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  errorMsg!: string;

  constructor(private fb: FormBuilder, private cadService: AquaService, private router: Router,){}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      matching_passwords: this.fb.group({
        senha: ['', Validators.compose([
          Validators.minLength(5),
          Validators.required
        ])],
        confSenha: ['', Validators.required]
      }, { validators: PasswordValidator.areEqual }),
      ddd: ['', Validators.required],
      cell: ['', Validators.required]
    }, { validator: PasswordValidator.areEqual});
  }

  get nome(){
    return this.form.get('nome')!;
  }
  get email(){
    return this.form.get('email')!;
  }
  get senha() {
    return this.form.get('matching_passwords')?.get('senha')!;
  }
  get confSenha() {
    return this.form.get('matching_passwords')?.get('confSenha')!;
  }
  get ddd(){
    return this.form.get('ddd')!;
  }
  get cell(){
    return this.form.get('cell')!;
  }


  submitCad(){
    const formValue = {
      nome: this.nome.value,
      email: this.email.value,
      senha: this.senha.value,
      // confSenha: this.confSenha.value,
      cod: this.ddd.value,
      telefone: this.cell.value
    };
    // console.log(formValue);

    if (this.form.valid) {
      this.cadService.registerUser(formValue).subscribe(
        (post) => {
          console.log(post);

          this.form.reset();

          this.router.navigate(['/landing']);
        },
        (error) => {
          console.log(error);
          this.errorMsg = 'Erro ao enviar o formulário... '+(error)+' ...Por favor, tente novamente.';
        }
      )

    }
  }
}
