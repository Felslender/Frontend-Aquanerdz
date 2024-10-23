import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { ECharts } from 'echarts/types/dist/echarts';

@Component({
  selector: 'app-oxigen',
  templateUrl: './oxigen.component.html',
  styleUrls: ['./oxigen.component.scss']
})
export class OxigenComponent implements OnInit {
  option: EChartsOption = {};

  constructor(){
  }

  @ViewChild(`chart`) echartsInstance: ECharts | null = null;

  ngOnInit(): void {
    this.loadData();
  }

  onChartInit(ec: any) {
    this.echartsInstance = ec;
  }

  async loadData(): Promise<void> {
    const oxygenValue = await this.getDataFromAPI();
    this.setOptions(oxygenValue);
  }

  getDataFromAPI(): Promise<number> {
    return new Promise((resolve, reject) => {
      const apiValue = +(Math.random() * 80).toFixed(2);
      setTimeout(() => resolve(apiValue), 1000);
    });
  }

  setGrapData(value: number) {
    const newOpt: EChartsOption = {
      series: [
        {
          data: [
            {
              value: 4,
            },
          ],
        },
      ],
    };
    this.echartsInstance?.setOption(newOpt);
  }

  private setOptions(value:number) {
    this.option = {
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 190,
          endAngle: -10,

          min: 0,
          max: 100,
          //divisoes do total
          splitNumber: 5,
          itemStyle: {
            //cor do nivel
            color: '#59EB57',
          },
          progress: {
            show: true,
            width: 30,
          },

          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 30,
            },
          },
          axisTick: {
            show: false,
            distance: -45,
            splitNumber: 1,
            lineStyle: {
              width: 2,
              color: '#000000',
            },
          },
          splitLine: {
            show: false,
            distance: -50,
            length: 0,
            lineStyle: {
              width: 3,
              color: '#999',
            },
          },
          axisLabel: {
            show: false,
            distance: -20,
            color: '#000000',
            fontSize: 20,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            fontSize: 25,
            fontWeight: 'bolder',
            formatter: '{value} %',
            color: 'inherit',
          },
          data: [
            {
              value,
            },
          ],
        },
      ]
    }
  }

  
}
