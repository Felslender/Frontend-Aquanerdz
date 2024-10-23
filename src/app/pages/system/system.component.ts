import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EChartsOption } from 'echarts';
import { ECharts } from 'echarts/types/dist/echarts';
import { System } from 'src/app/models/aqua';
import { AquaService } from 'src/app/shared/services/aqua.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  currentComponent: string = 'temperature';


  constructor(private router: Router, private systemsService: AquaService){}

  ngOnInit(): void {
    this.detalharSistema(Number(this.idAtual))
  }

  showPreviousComponent() {
    if (this.currentComponent === 'temperature') {
      this.currentComponent = 'oxigen';
    } else {
      this.currentComponent = 'temperature';
    }
  }

  showNextComponent() {
    if (this.currentComponent === 'oxigen') {
      this.currentComponent = 'temperature';
    } else {
      this.currentComponent = 'oxigen';
    }
  }

  idAtual = localStorage.getItem('idSistemaAtual')

  voltar(){
    localStorage.removeItem('idSistemaAtual')
    this.router.navigate(['/systems'])
  }

  sistema!: System;

  detalharSistema(idStm: number){
    return this.systemsService.systemId(idStm).subscribe(data => {
      console.log(data.sistema);
      this.sistema = data.sistema;  
    })
  }
}
