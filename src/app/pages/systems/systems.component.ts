import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Systems } from 'src/app/models/aqua';
import { AquaService } from 'src/app/shared/services/aqua.service';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit {
  listaSystems: Systems[] = [];

  constructor(private systemsService: AquaService, private router: Router){}

  ngOnInit(): void {
    this.listarSystems()
  }

  listarSystems(){
    return this.systemsService.listSystem().subscribe(data => {
      this.listaSystems = data.sistemas
      console.log(this.listaSystems)
    })
  }

  detalharSistema(idStm: number){
    // console.log(`O card clicado é o de ID: ${this.listaSystems.find(s => s.id_sistema === idStm)}`) //isso nn é muito ao certo
    return this.systemsService.systemId(idStm).subscribe(data => {
      // console.log(data);
      this.router.navigate(['system/', idStm])
      localStorage.setItem('idSistemaAtual', JSON.parse(JSON.stringify(idStm)))
    })
  }
}
