import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-conta',
  templateUrl: './adicionar-conta.page.html',
  styleUrls: ['./adicionar-conta.page.scss'],
})
export class AdicionarContaPage extends Utils implements OnInit {

  public form: FormGroup;
  nomeRespConta: string;
  cpfRespConta: string;

  constructor(private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);

    this.form = this.fb.group({
      banco: ['', Validators.required],
      numeroagencia: ['', Validators.required],
      numeroconta: ['', Validators.required],
      tipoconta: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  cadastrarConta() { }

  editarResponsavel() { }
}
