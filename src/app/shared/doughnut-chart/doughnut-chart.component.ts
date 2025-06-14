import { Component } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  chart: Chart | undefined;
      
  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const data = {
      datasets: [{
        label: 'My First Dataset',
        data: [280, 140, 30],
        backgroundColor: [
          'rgb(77 75 255)',
          'rgb(21 219 204)',
          'rgb(251 179 69)'
        ],
        hoverOffset: 4
      }]
    };

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: data,
    };

    const chartElement = document.getElementById('doughnutChart') as HTMLCanvasElement;
    this.chart = new Chart(chartElement, config);
  }
}
