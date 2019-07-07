import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatPaginatorModule,
  
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {NgxMaskModule} from 'ngx-mask'
import { AlertModule } from 'ngx-alerts';

/* firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { TabelaAgendaComponent } from './agenda/tabela-agenda/tabela-agenda.component';
import { HeaderComponent } from './header/header.component';
import { ModalCadastroEditarComponent } from './agenda/modal-cadastro-editar/modal-cadastro-editar.component';
import { ModalExcluirComponent } from './agenda/modal-excluir/modal-excluir.component';
import {AgendaService} from './agenda/agenda.service'

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    TabelaAgendaComponent,
    HeaderComponent,
    ModalCadastroEditarComponent,
    ModalExcluirComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [
    AgendaService
  ],
  entryComponents: [
    ModalCadastroEditarComponent,
    ModalExcluirComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
