import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  chart: Chart | undefined;
      
  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const data = {
      labels: ['KYC', 'e-Mandate', 'JUL', 'KFL', 'Priority'],
      datasets: [
        {
          data: [350, 280, 250, 380, 120],
          backgroundColor: 'rgb(20 17 202)',
          borderColor: 'rgb(20 17 202)',
          borderWidth: 1,
          borderRadius: 20,
          barThickness: 7,
        },
      ],
    };

    const config: ChartConfiguration = {
      type: 'bar' as ChartType,
      data: data,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 500,
            ticks: {
              stepSize: 100,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    };

    const chartElement = document.getElementById('barChart') as HTMLCanvasElement;
    this.chart = new Chart(chartElement, config);
  }
}
