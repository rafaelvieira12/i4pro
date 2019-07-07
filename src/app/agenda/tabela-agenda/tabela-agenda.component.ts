import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import {ModalCadastroEditarComponent} from '../modal-cadastro-editar/modal-cadastro-editar.component'
import {ModalExcluirComponent} from '../modal-excluir/modal-excluir.component'
import {AgendaService} from '../agenda.service'
import {map, startWith} from 'rxjs/operators';
import { AlertService } from 'ngx-alerts';

export interface contato {
  nome: string;
  celular: string;
  telefone: string;
  email: string;
}

@Component({
  selector: 'app-tabela-agenda',
  templateUrl: './tabela-agenda.component.html',
  styleUrls: ['./tabela-agenda.component.scss']
})
export class TabelaAgendaComponent implements OnInit {

  tableComDados = false

  displayedColumns: string[] = ['nome', 'celular', 'telefone', 'email', 'acoes'];
  columnsToDisplay: string[] = this.displayedColumns.slice();    
  
  dataSource
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  larguraModal = '500px'

  listaDbContatos

  constructor(
    public dialog: MatDialog,
    private agendaService: AgendaService,
    private alertService: AlertService
  ) { }

  ngOnInit() {   
    this.listaDbContatos = this.agendaService.getContatos().snapshotChanges()
    .pipe(
      map(actions => {
      return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
      });
      })
    ).subscribe((dados) => {       
      this.dataSource = new MatTableDataSource<any>(dados);
      this.dataSource.paginator = this.paginator;
      
      if(this.dataSource.data.length > 0) {        
        this.tableComDados = true
      }
      else {
        this.tableComDados = false
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarModal(item) {
    let paramModal: {} = {
      data: item,
      width: this.larguraModal
    }

    let dialogRef = this.dialog.open(ModalCadastroEditarComponent, paramModal);
   
    
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        
        this.agendaService.atualizarContato(result).then(() => {
          this.alertService.success('Contato editado com sucesso!');
        }) 
      }

    });
  }

  cadastrarModal() {
    let paramModal: {} = {
      data: {},
      width: this.larguraModal
    }

    let dialogRef = this.dialog.open(ModalCadastroEditarComponent, paramModal);

    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {        
        this.agendaService.criarContato(result).then(() => {
          this.alertService.success('Contato cadastrado com sucesso!');
        }) 
      }

    });
  }

  excluirModal(item) {
    let paramModal: {} = {
      data: {},
      width: this.larguraModal
    }

    let dialogRef = this.dialog.open(ModalExcluirComponent, paramModal);

    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        if(result["clickBotao"]) {
          
          this.agendaService.deletarContato(item).then(() => {
            this.alertService.success('Contato excluido com sucesso!');
          }) 
          
        }        
      }

    });
  }

}
