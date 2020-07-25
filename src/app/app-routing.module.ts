import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'novo-vinculo',
    loadChildren: () => import('./pages/novo-vinculo/novo-vinculo.module').then(m => m.NovoVinculoPageModule)
  },
  {
    path: 'adicionar-cartao',
    loadChildren: () => import('./pages/adicionar-cartao/adicionar-cartao.module').then(m => m.AdicionarCartaoPageModule)
  },
  {
    path: 'adicionar-conta',
    loadChildren: () => import('./pages/adicionar-conta/adicionar-conta.module').then(m => m.AdicionarContaPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
