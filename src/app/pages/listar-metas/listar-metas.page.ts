import { Component, OnInit, ViewChild } from '@angular/core';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-listar-metas',
  templateUrl: './listar-metas.page.html',
  styleUrls: ['./listar-metas.page.scss'],
})
export class ListarMetasPage extends Utils implements OnInit {

  bars: any;
  colorArray: any;

  @ViewChild('chartMetaPrincipal') chartMetaPrincipal;
  @ViewChild('chartMeta1') chartMeta1;
  @ViewChild('chartMeta2') chartMeta2;
  @ViewChild('chartMeta3') chartMeta3;
  @ViewChild('chartMeta4') chartMeta4;
  @ViewChild('chartMeta5') chartMeta5;

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createChartTotalConta();
    this.createChartMeta1();
    this.createChartMeta2();
    this.createChartMeta3();
    this.createChartMeta4();
    this.createChartMeta5();
  }

  createChartTotalConta() {
    let ctx = this.chartMetaPrincipal.nativeElement;
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

  createChartMeta3() {
    let ctx = this.chartMeta3.nativeElement;
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

  createChartMeta4() {
    let ctx = this.chartMeta4.nativeElement;
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

  createChartMeta5() {
    let ctx = this.chartMeta5.nativeElement;
    ctx.height = 250;

    this.bars = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: ['full', 'atual'],
          data: [25, 75],
          backgroundColor: ['#E05353', '#EEEEEE'],
          borderColor: ['#E05353', '#EEEEEE'],
          borderWidth: 1
        }]
      },
    });
  }
}
