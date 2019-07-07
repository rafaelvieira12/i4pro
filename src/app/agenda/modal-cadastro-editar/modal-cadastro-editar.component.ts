import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-cadastro-editar',
  templateUrl: './modal-cadastro-editar.component.html',
  styleUrls: ['./modal-cadastro-editar.component.scss']
})
export class ModalCadastroEditarComponent implements OnInit {

  formEditar: FormGroup;

  nome
  celular
  telefone
  email
  id

  tituloModal = 'Cadastrar'

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalCadastroEditarComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { 
    this.formEditar = this.fb.group({
      nome: ['', Validators.required],
      celular: ['', Validators.required],
      telefone: [''],
      email: ['', Validators.email],      
    })
  }

  ngOnInit() {
    if(this.data) {
      this.nome = this.data.nome
      this.celular = this.data.celular
      this.telefone = this.data.telefone
      this.email = this.data.email
      this.id = this.data.id
    }

    if(this.data.nome) {
      this.tituloModal = 'Editar'
    }
  }

  fecharModal() {
    this.dialogRef.close();
  }

  enviarDadosForm() {
    if (this.formEditar.valid) {
      let item = {}
      
      item = {
        nome: this.nome || '',
        celular: this.celular || '',
        telefone: this.telefone || '',
        email: this.email || '',        
      }

      if(this.id != '' && this.id != undefined) {
        item['id'] = this.id
      }

      this.dialogRef.close(item);
    }
  }

}
