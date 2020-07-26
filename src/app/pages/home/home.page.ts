import { Component, OnInit, ViewChild } from '@angular/core';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends Utils implements OnInit {

  bars: any;
  colorArray: any;

  @ViewChild('chartTotalConta') chartTotalConta;
  @ViewChild('chartMeta1') chartMeta1;
  @ViewChild('chartMeta2') chartMeta2;

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    this.createChartTotalConta();
    this.createChartMeta1();
    this.createChartMeta2();
  }

  createChartTotalConta() {
    let ctx = this.chartTotalConta.nativeElement;
    ctx.height = 250;

    this.bars = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: ['full', 'atual'],
          data: [75, 25],
          backgroundColor: ['#52e28c', '#EEEEEE'],
          borderColor: ['#52e28c', '#EEEEEE'],
          borderWidth: 1
        }]
      },
    });
  }

  createChartMeta1() {
    let ctx = this.chartMeta1.nativeElement;
    ctx.height = 250;

    this.bars = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: ['full', 'atual'],
          data: [75, 25],
          backgroundColor: ['#52e28c', '#EEEEEE'],
          borderColor: ['#52e28c', '#EEEEEE'],
          borderWidth: 1
        }]
      },
    });
  }

  createChartMeta2() {
    let ctx = this.chartMeta2.nativeElement;
    ctx.height = 250;

    this.bars = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: ['full', 'atual'],
          data: [50, 50],
          backgroundColor: ['#F2DB07', '#EEEEEE'],
          borderColor: ['#F2DB07', '#EEEEEE'],
          borderWidth: 1
        }]
      },
    });
  }
}
