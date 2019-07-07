import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrls: ['./modal-excluir.component.scss']
})
export class ModalExcluirComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalExcluirComponent>,
  ) { }

  ngOnInit() {
  }

  fecharModal() {
    this.dialogRef.close();
  }

  excluir() {
    this.dialogRef.close({clickBotao: true});
  }

}
