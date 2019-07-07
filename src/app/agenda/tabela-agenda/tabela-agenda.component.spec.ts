import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAgendaComponent } from './tabela-agenda.component';

describe('TabelaAgendaComponent', () => {
  let component: TabelaAgendaComponent;
  let fixture: ComponentFixture<TabelaAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
