import { Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { EventoDatalheComponent } from './components/eventos/evento-datalhe/evento-datalhe.component';
import { EventoListaComponent } from './components/eventos/evento-lista/evento-lista.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { CadastrarComponent } from './components/user/cadastrar/cadastrar.component';

export const routes: Routes = [
    
    {path:'user', component:UserComponent,
        children:[
            { path: 'login', component:LoginComponent },
            { path: 'cadastrar', component:CadastrarComponent }
        ]
    },
    { path: 'user/perfil', component: PerfilComponent },
    { path: 'eventos', redirectTo: 'eventos/lista' },
    {
        path: 'eventos', component: EventosComponent,
        children: [
            { path: 'detalhe/:id', component: EventoDatalheComponent, pathMatch: 'prefix' },
            { path: 'detalhe', component: EventoDatalheComponent, pathMatch: 'prefix' },
            { path: 'lista', component: EventoListaComponent, pathMatch: 'prefix' }
        ]
    },
    { path: 'palestrantes', component: PalestrantesComponent },
    { path: 'dashBoard', component: DashboardComponent },
    { path: 'contatos', component: ContatosComponent },
    { path: '', redirectTo: 'dashBoard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashBoard', pathMatch: 'full' }

];
