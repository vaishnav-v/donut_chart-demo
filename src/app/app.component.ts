/* eslint-disable @typescript-eslint/no-explicit-any */
import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import moment from 'moment';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  /**
   * Years dropdown datasource
   */
  years: string[] = [];
  /**
   * Donut chart
   */
  chart: any;

  selectedYear = null;
  /**
   * Chart data source
   */
  jsonData = null;

  grossAmount = null;

  financialDates = null;

  ngOnInit(): void {
    this.years = new Array(10).fill(1).map((item, index) => {
      return moment().subtract(index, 'years').format('YYYY');
    });
  }

  createFinancialDates(year) {
    const start = moment(year, 'YYYY').startOf('year');
    const end = moment(year, 'YYYY').endOf('year');

    switch (start.day()) {
      case 6: // Saturday
        start.add(2, 'days');
        break;
      case 0: // Sunday
        start.add(1, 'day');
        break;
    }

    // Adjust end date
    switch (end.day()) {
      case 6: // Saturday
        end.subtract(1, 'day');
        break;
      case 0: // Sunday
        end.subtract(2, 'days');
        break;
    }

    this.financialDates = {
      start: start.format('DD-MMMM-YYYY'),
      end: end.format('DD-MMMM-YYYY'),
    };
  }

  displayChart(date) {
    if (this.chart) this.chart.destroy();
    this.createData();
    this.createChart();
    this.createFinancialDates(date);
  }
  /**
   * Crerate chart from chart js
   */
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'doughnut',

      data: {
        labels: ['Invoice value', 'VAT', 'Expense', 'Bonus'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [
              this.jsonData['InvoiceValue'],
              this.jsonData['VAT'],
              this.jsonData['Expense'],
              this.jsonData['Bonus'],
            ],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(255, 122, 23)',
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  }
  /**
   * create datasource
   */
  createData() {
    this.jsonData = {
      'InvoiceValue': Math.round(Math.random() * 500) + 20,
      'VAT': Math.round(Math.random() * 35) + 20,
      'Expense': Math.round(Math.random() * 120) + 40,
      'Bonus': Math.round(Math.random() * 40),
    };
    // SUM ALL
    this.grossAmount =
      this.jsonData['InvoiceValue'] +
      this.jsonData['VAT'] +
      this.jsonData['Expense'] +
      this.jsonData['Bonus'];
  }
}
