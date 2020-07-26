import { Component, OnInit, ViewChild } from '@angular/core';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-visualizar-meta',
  templateUrl: './visualizar-meta.page.html',
  styleUrls: ['./visualizar-meta.page.scss'],
})
export class VisualizarMetaPage extends Utils implements OnInit {

  bars: any;
  colorArray: any;

  @ViewChild('chartMetaPrincipal') chartMetaPrincipal;
  @ViewChild('chartEvolucao') chartEvolucao;

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
    this.createChartEvolucao();
  }

  createChartTotalConta() {
    let ctx = this.chartMetaPrincipal.nativeElement;
    ctx.height = 180;

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

  createChartEvolucao() {
    this.bars = new Chart(this.chartEvolucao.nativeElement, {
      type: 'line',
      data: {
        labels: ['dez/19', 'jan/20', 'fev/20', 'mar/20', 'abr/20', 'mai/20', 'jun/20', 'jul/20'],
        datasets: [{
          label: 'Evolução',
          data: [43, 38, 60, 49, 59, 45, 60, 75],
          backgroundColor: 'rgb(0, 0, 0, 0)',
          borderColor: '#2A2360',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
            },
            barPercentage: 0.9
          }]
        }
      }
    });
  }
}