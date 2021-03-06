import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Observable } from 'rxjs';
import { ICUrrencyAPI } from '../Interfaces/ICurrencyAPI';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.less']
})
export class CurrencyChartComponent implements OnInit {
  gbpRates = [];
  eurRates = [];
  dates = [];
  gbpRatesValues = [];
  eurRatesValues = [];
  test = [1.4,2, 2, 3];
  chart: Chart;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getUsdToGbpRates()
      .subscribe(res => {
        this.gbpRates = res.dataset_data.data;
        this.gbpRates.forEach(el => {
          this.gbpRatesValues.push(el[1]);
          this.dates.push(el[0]);
        });
      });
    
    this.currencyService.getUsdToEurUrlRates()
      .subscribe(res => {
        this.eurRates = res.dataset_data.data;
        this.eurRates.forEach(el => {
          this.eurRatesValues.push(el[1]);
				});

			this.chart = new Chart('canvas', {
				type: 'line',
				data: {
					labels: this.dates,
					datasets: [{
						label: 'EUR TO USD',
						backgroundColor: '#3cba9f',
						borderColor: '#3cba9f',
						data: this.eurRatesValues,
						fill: false,
					}, {
						label: 'GBP TO USD',
						fill: false,
						backgroundColor: '#ffcc00',
						borderColor: '#ffcc00',
						data: this.gbpRatesValues,
					}]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					title: {
						display: true,
						text: 'Currency exchage chart'
					},
					tooltips: {
						mode: 'index',
						intersect: false,
					},
					hover: {
						mode: 'nearest',
						intersect: true
					},
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Date'
							}
						}],
						yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Value'
							}
						}]
					}
				}
			});
		});     
  }
}
