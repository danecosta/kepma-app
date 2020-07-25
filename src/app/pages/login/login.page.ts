import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController, NavController, ToastController, ModalController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends Utils implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.sessionVerify();
  }

  private sessionVerify() {
    this.fbAuth.authState.subscribe((retorno) => {
      if (retorno) {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            usuario: retorno.email
          }
        };
        this.navCtrl.navigateForward('home', navigationExtras);
      }
    });
  }

  async submit() {
    if (this.form.valid) {
      const loading = await this.loadingCtrl.create({ message: 'Autenticando...' });
      loading.present();

      this.fbAuth.signInWithEmailAndPassword(this.form.controls.email.value, this.form.controls.password.value)
        .then((data) => {
          loading.dismiss();
          localStorage.setItem('kepma.user', JSON.stringify(new Usuario('', data.user.email)));
          this.navCtrl.navigateRoot('home');
        })
        .catch((err) => {
          loading.dismiss();
          this.exibirMensagem('Ops!', 'Usuário não cadastrado.');
        });
    } else {
      this.exibirMensagem('Ops!', 'Informe e-mail e senha para entrar.');
    }

  }
  async showMessage(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 3000, position: 'top' });
    toast.present;
  }
}
