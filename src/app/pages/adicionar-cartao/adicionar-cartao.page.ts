import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

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
    public menuCtrl: MenuController,
    private angularFirestore: AngularFirestore) {
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

  cadastrarCartao() {

    let obj = {
      'nome_cartao': this.form.controls.nomecartao.value,
      'numero_cartao': this.form.controls.numerocartao.value,
      'vencimento': this.form.controls.vencimento.value,
      'codigo_seguranca': this.form.controls.codigoseguranca.value,
      'created_at': new Date()
    }

    let novoIdCartao = this.angularFirestore.createId();
    this.angularFirestore.doc(`cartao/${novoIdCartao}`).set(Object.assign({}, obj)).then(() => {
      this.exibirMensagem('Sucesso!', 'Cartão vinculado com sucesso.');
    }).catch((err) => {
      alert(err);
    });
  }
}
