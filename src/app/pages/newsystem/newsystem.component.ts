import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AquaService } from 'src/app/shared/services/aqua.service';

@Component({
  selector: 'app-newsystem',
  templateUrl: './newsystem.component.html',
  styleUrls: ['./newsystem.component.scss']
})
export class NewsystemComponent {
  form!: FormGroup;
  errorMsg!: string;
  constructor(private fb: FormBuilder, private newSyst: AquaService, private router: Router){}

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeSystem: ["", Validators.required],
      tamanhoTanque: ["",Validators.required],
      idPeixe: ["", Validators.required],
      qtdPeixe: ["", Validators.required]
    })
  }

  submitNewSyst(){
    const formValue = {
      id_peixe: Number(this.form.get("idPeixe")!.value),
      nome_sistema: this.form.get("nomeSystem")!.value,
      qto_peixe: Number(this.form.get("qtdPeixe")!.value),
      tamanho_tanque: Number(this.form.get("tamanhoTanque")!.value)
    }

    if(this.form.valid){
      this.newSyst.registerSystem(formValue).subscribe(
        (post) => {
          console.log(formValue);
          this.form.reset();
          this.router.navigate(['/systems'])
        },
        (error) => {
          console.log(error);
          this.errorMsg = 'Erro ao enviar o formulário... '+(error)+' ...Por favor, tente novamente.';
        }
      )

    } else {
      console.log("formulario invalido")
    }
  }
}
