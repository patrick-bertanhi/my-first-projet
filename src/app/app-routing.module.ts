import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '',
      component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'enderecos',
  component: EnderecosListComponent
},
{
  path: 'busca-enderecos',
  component: BuscaEnderecosComponent
}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
