import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-novo-financiamento',
  templateUrl: './novo-financiamento.page.html',
  styleUrls: ['./novo-financiamento.page.scss'],
})
export class NovoFinanciamentoPage extends Utils implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);

    this.form = this.fb.group({
      valor: ['', Validators.required],
      datanascimento: ['', Validators.required],
      cep: ['', Validators.required],
      profissao: ['', Validators.required],
      motivo: ['', Validators.required],
      celular: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

}
