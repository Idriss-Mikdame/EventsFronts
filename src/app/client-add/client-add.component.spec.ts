import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientADDComponent } from './client-add.component';

describe('ClientADDComponent', () => {
  let component: ClientADDComponent;
  let fixture: ComponentFixture<ClientADDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientADDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientADDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
