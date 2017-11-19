import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadMenuComponent } from './cad-menu.component';

describe('CadMenuComponent', () => {
  let component: CadMenuComponent;
  let fixture: ComponentFixture<CadMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
