import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, CollectionReference } from '../../../node_modules/angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  contatos: AngularFirestoreCollection;

  constructor(
    private db: AngularFirestore
  ) { }


  getContatos() {
    this.contatos = this.db.collection('/contatos');
      return this.contatos      
  }

  criarContato(contato): Promise<void>{
    const id = this.db.createId();
    contato.id = id
    return this.contatos.doc(id)
    .set(contato)
  }

  atualizarContato(contato): Promise<void>{    
    return this.contatos.doc(contato.id)
    .update(contato)
  }

  deletarContato(contato): Promise<void>{
    return this.contatos.doc(contato.id)
    .delete()
  }
}
