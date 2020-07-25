import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { LoadingController, NavController, ToastController, AlertController, MenuController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage extends Utils implements OnInit {

  public form: FormGroup;
  usuario: Usuario = new Usuario();
  base64Image: any;

  customPickerOptions = {
    buttons: [{
      text: 'Cancelar',
      handler: () => { }
    },
    {
      text: 'Confirmar',
      handler: () => { }
    }]
  };


  constructor(private fb: FormBuilder,
    public angularFirestore: AngularFirestore,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);

    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarsenha: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.sessionVerify();
  }

  async sessionVerify() {
    this.fbAuth.authState.subscribe((retorno) => {
      if (retorno) {
        this.usuario.email = retorno.email;
        this.form.get('email').setValue(this.usuario.email);
        this.obterDadosUsuarioLogado();
      }
    });
  }

  async obterDadosUsuarioLogado() {
    const profileRef = this.angularFirestore.collection('profile');
    profileRef.ref.where(`email`, '==', this.usuario.email).get().then(x => {
      x.forEach(doc => {
        this.usuario.id = doc.id;
        this.form.get('nome').setValue(doc.data().nome);
        this.form.get('email').setValue(doc.data().email);
      });
    });
  }

  abrirModalEditarAvatar() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        usuario_email: this.usuario.email
      }
    };
    this.navCtrl.navigateForward('avatar', navigationExtras);
  }

  cadastrarUsuario() {
    this.usuario.nome = this.form.controls.nome.value;
    this.usuario.email = this.form.controls.email.value;

    if (this.usuario.id) {
      this.angularFirestore.doc(`profile/${this.usuario.id}`).set(Object.assign({}, this.usuario), { merge: true }).then(() => {
        this.exibirMensagem('Sucesso!', 'Usuário atualizado com sucesso');
        this.navCtrl.navigateForward('home');
      });
    } else {
      const newUserProfile = this.angularFirestore.createId();
      this.angularFirestore.doc(`profile/${newUserProfile}`).set(Object.assign({}, this.usuario)).then(() => {
        this.exibirMensagem('Sucesso!', 'Usuário cadastrado com sucesso');
        this.navCtrl.navigateForward('home');
      });
    }
  }

  cancelar() {
    this.navCtrl.back();
  }
}
