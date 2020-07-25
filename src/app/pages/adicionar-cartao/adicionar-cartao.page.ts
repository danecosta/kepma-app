import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-cartao',
  templateUrl: './adicionar-cartao.page.html',
  styleUrls: ['./adicionar-cartao.page.scss'],
})
export class AdicionarCartaoPage extends Utils implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);

    this.form = this.fb.group({
      nomecartao: ['', Validators.required],
      numerocartao: ['', Validators.required],
      vencimento: ['', Validators.required],
      codigoseguranca: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  cadastrarCartao() { }

}
