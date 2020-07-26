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
    path: 'listar-metas',
    loadChildren: () => import('./pages/listar-metas/listar-metas.module').then(m => m.ListarMetasPageModule)
  },
  {
    path: 'adicionar-meta',
    loadChildren: () => import('./pages/adicionar-meta/adicionar-meta.module').then(m => m.AdicionarMetaPageModule)
  },
  {
    path: 'adicionar-objetivo',
    loadChildren: () => import('./pages/adicionar-objetivo/adicionar-objetivo.module').then(m => m.AdicionarObjetivoPageModule)
  },
  {
    path: 'listar-insights',
    loadChildren: () => import('./pages/listar-insights/listar-insights.module').then(m => m.ListarInsightsPageModule)
  },
  {
    path: 'novo-financiamento',
    loadChildren: () => import('./pages/novo-financiamento/novo-financiamento.module').then(m => m.NovoFinanciamentoPageModule)
  },
  {
    path: 'listar-financiamentos',
    loadChildren: () => import('./pages/listar-financiamentos/listar-financiamentos.module').then(m => m.ListarFinanciamentosPageModule)
  },
  {
    path: 'listar-extrato',
    loadChildren: () => import('./pages/listar-extrato/listar-extrato.module').then(m => m.ListarExtratoPageModule)
  },
  {
    path: 'listar-meios-pagamento',
    loadChildren: () => import('./pages/listar-meios-pagamento/listar-meios-pagamento.module').then(m => m.ListarMeiosPagamentoPageModule)
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
