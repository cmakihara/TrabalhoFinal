import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component'
import { AddComponent } from './add/add.component'
import { MenuComponent } from './menu/menu.component';
import { ApagarComponent }  from './apagar/apagar.component'
import { EditComponent } from './edit/edit.component'
import { AgendaService } from './agenda/agenda.service';
import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';
import { CadMenuComponent } from './cad-menu/cad-menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './produto/produto.service';
import { VendaComponent } from './venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddComponent,
    ApagarComponent,
    EditComponent,
    ListarComponent,
    LoginComponent,
    InicialComponent,
    CadMenuComponent,
    ProdutoComponent,
    VendaComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [AgendaService,ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
