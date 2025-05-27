import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminTemplatComponent } from './amin-templat.component';

describe('AminTemplatComponent', () => {
  let component: AminTemplatComponent;
  let fixture: ComponentFixture<AminTemplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AminTemplatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AminTemplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
