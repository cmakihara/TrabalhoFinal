import { RouterModule, Routes } from '@angular/router';

import { ListarComponent} from './listar/listar.component'
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ApagarComponent } from './apagar/apagar.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CadMenuComponent } from './cad-menu/cad-menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ApagarProdutoComponent }  from './apagar/apagarProduto.component'

export const appRoutes: Routes = [
  { path: 'cad/novo', component: AddComponent },
  { path: 'cad/delete', component: ApagarComponent },
  { path: 'cad/edit', component: EditComponent },
  { path: 'cad', component: ListarComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cad/cad-menu', component: CadMenuComponent },
  { path: 'cad/produto', component: ProdutoComponent },
  { path: 'cad/venda', component: VendaComponent },
  { path: 'cad/usuario', component: UsuarioComponent },
  { path: 'cad/deleteproduto', component: ApagarProdutoComponent },

];
