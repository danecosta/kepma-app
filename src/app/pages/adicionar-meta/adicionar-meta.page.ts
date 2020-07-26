import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-meta',
  templateUrl: './adicionar-meta.page.html',
  styleUrls: ['./adicionar-meta.page.scss'],
})
export class AdicionarMetaPage extends Utils implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);

    this.form = this.fb.group({
      nomemeta: ['', Validators.required],
      datainicial: ['', Validators.required],
      datafinal: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  cadastrarMeta() { }

}
