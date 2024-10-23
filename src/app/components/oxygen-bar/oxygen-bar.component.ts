import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { ECharts } from 'echarts/types/dist/echarts';

@Component({
  selector: 'app-oxygen-bar',
  templateUrl: './oxygen-bar.component.html',
  styleUrls: ['./oxygen-bar.component.scss']
})
export class OxygenBarComponent implements OnInit {
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'value'
        }
      ],
      yAxis: [
        {
          type: 'category',
          data: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      series: [
        {
          name: 'Oxigenação em',
          type: 'bar',
          barWidth: '60%',
          data: [14, 20, 25, 34, 24, 26],
          label: {
            show: true,
            position: 'insideRight',
            distance: 16,
            color: '#010020',
            fontWeight: 'bold'
          },
          color: '#00ADFF',
          itemStyle: {
            borderRadius: [0, 24, 24, 0]
          }
        }
      ]
    };

  }
}
