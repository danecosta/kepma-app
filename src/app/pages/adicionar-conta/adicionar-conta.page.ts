import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utils } from 'src/app/utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

import { Usuario } from './../../models/usuario.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth/';
import axios from 'axios';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-adicionar-conta',
  templateUrl: './adicionar-conta.page.html',
  styleUrls: ['./adicionar-conta.page.scss'],
})
export class AdicionarContaPage extends Utils implements OnInit {

  public form: FormGroup;
  nomeRespConta: string = 'Ana Lúcia Rocha';
  cpfRespConta: string = '012.123.446-72';
  usuario: Usuario = new Usuario();
  url: any;

  constructor(private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public iab: InAppBrowser,
    private angularFirestore: AngularFirestore,
    private fbAuth: AngularFireAuth) {
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

  ionViewWillEnter() {
    this.sessionVerify().then(() => {

    });
  }

  async sessionVerify() {
    this.fbAuth.authState.subscribe((retorno) => {
      if (retorno) {
        this.usuario.email = retorno.email;
      }
    });
  }

  cadastrarConta() {
    const obj = {
      banco: this.form.controls.banco.value,
      numero_agencia: this.form.controls.numeroagencia.value,
      numero_conta: this.form.controls.numeroconta.value,
      tipo_conta: this.form.controls.tipoconta.value,
      usuario: this.usuario.email,
      created_at: new Date()
    };

    const novoIdCartao = this.angularFirestore.createId();
    this.angularFirestore.doc(`conta/${novoIdCartao}`).set(Object.assign({}, obj)).then(() => {
      this.exibirMensagem('Sucesso!', 'Conta vinculada com sucesso.');
      this.irPara('home');
    }).catch((err) => {
      alert(err);
    });
  }

  editarResponsavel() { }

  // INTEGRACAO TECBAN
  async realizarRequisicao() {
    await axios.get('http://192.168.100.8:8057/health-check');
    await axios.get('http://192.168.100.8:8057/api/bank/page-auth-token').then((url) => {
      const browser = this.iab.create(url.data, '_self', this.options);
      browser.show();

      if (browser.on('loadstart').subscribe) {
        browser.on('loadstart').subscribe((e) => {
          if (e && e.url) {
            this.url = e.url;
            sessionStorage.setItem('AUTH', e.url)
          }
        });
      }

      if (browser.on('exit').subscribe) {
        browser.on('exit').subscribe((e) => {
          if (this.url) {
            const full_string = sessionStorage.getItem('AUTH');
            sessionStorage.setItem('AUTH_CODE', full_string.substr(31, 36));
          }

          const code = sessionStorage.getItem('AUTH_CODE');
          axios.get(`http://192.168.100.8:8057/api/bank/final-token?code=${code}`)
            .then((sucesso) => {
              sessionStorage.setItem('AUTH_FINAL_CODE', sucesso.data.access_token);
              this.exibirMensagem('Sucesso', 'Autenticação realizada com sucesso!')
              this.cadastrarConta();
            })
            .catch((err) => { this.exibirMensagem('FALHA', 'Erro ao realizar autenticação') });
        });
      }
    });
  }


  async obterContas() {
    const code = sessionStorage.getItem('AUTH_FINAL_CODE');
    const result = await axios.get(`http://192.168.100.8:8057/api/bank/saldo?code=${code}`);
  }

  async exibirTokenInterceptado() {
    const full_string = sessionStorage.getItem('AUTH');
    sessionStorage.setItem('AUTH_CODE', full_string.substr(31, 36));
  }
}
