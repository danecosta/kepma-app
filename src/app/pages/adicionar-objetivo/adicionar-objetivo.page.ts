import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-objetivo',
  templateUrl: './adicionar-objetivo.page.html',
  styleUrls: ['./adicionar-objetivo.page.scss'],
})
export class AdicionarObjetivoPage extends Utils implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);

    this.form = this.fb.group({
      nomeobjetivo: ['', Validators.required],
      valorobjetivo: ['', Validators.required],
      periodicidade: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  cadastrarObjetivo() { }

}
