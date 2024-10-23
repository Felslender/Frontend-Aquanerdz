import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { ECharts } from 'echarts/types/dist/echarts';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  option: EChartsOption = {};
  temperatura!: number;

  constructor() {}

  @ViewChild('chart') echartsInstance: ECharts | null = null;

  async ngOnInit() {
    this.testeValores();
    await this.loadData();
  }

  socket = io('http://localhost:3333');

  testeValores() {
    this.socket.on('valores', (message: number) => {
      this.temperatura = message;
      // console.log(message);
      this.setOptions(this.temperatura);
    });
  }

  onChartInit(ec: ECharts) {
    this.echartsInstance = ec;
  }

  async loadData(): Promise<void> {
    const oxygenValue = await this.getDataFromAPI();
    this.setOptions(oxygenValue);
  }

  getDataFromAPI(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.temperatura !== undefined) {
        resolve(this.temperatura);
      } else {
        // reject(() => {
        //   console.log('Temperatura não capturada');
        // });
      }
    });
  }

  setGrapData(value: number) {
    const newOpt: EChartsOption = {
      series: [
        {
          data: [
            {
              value: value,
            },
          ],
        },
      ],
    };
    // this.echartsInstance?.setOption(newOpt);
  }

  private setOptions(value: number) {
    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '2%',
        right: '15%',
        bottom: '8%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['°C'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          show: false,
          type: 'value',
          max: 50,
        },
      ],
      series: [
        {
          animation: false,
          type: 'bar',
          label: {
            show: true,
            position: 'outside',
            formatter: `${value}°C`,
            color: '#010020',
            fontWeight: 'bold',
            fontSize: 14,
          },
          barWidth: '15%',
          data: [value],
          name: `Temperatura em °C`,
          itemStyle: {
            color: function (params: any) {
              if (params.value >= 39.5) {
                return 'red';
              } else if (params.value >= 36.5 && params.value < 39.5) {
                return '#F85B02';
              } else if (params.value >= 31.5 && params.value < 36.5) {
                return '#F8A402';
              } else if (params.value >= 20 && params.value < 31.5) {
                return '#157605';
              } else if (params.value >= 15 && params.value < 20) {
                return '#50c9a6';
              } else {
                return 'blue';
              }
            },
            borderRadius: [60, 60, 0, 0],
          },
          markLine: {
            symbol: ['none', 'none'],
            data: [
              {
                yAxis: 50,
                lineStyle: {
                  type: 'dashed',
                  color: 'red',
                },
                label: {
                  position: 'end',
                  formatter: '50°C',
                },
              },
              {
                yAxis: 25,
                lineStyle: {
                  type: 'dashed',
                  color: 'green',
                },
                label: {
                  position: 'end',
                  formatter: '25°C',
                },
              },
              {
                yAxis: 0,
                lineStyle: {
                  type: 'dashed',
                  color: 'blue',
                },
                label: {
                  position: 'end',
                  formatter: '0°C',
                },
              },
            ],
          },
        },
      ],
    };
    // this.echartsInstance?.setOption(this.option);
  }
}
