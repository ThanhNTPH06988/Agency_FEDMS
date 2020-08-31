import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesLoginComponent } from './modules-login.component';

describe('ModulesLoginComponent', () => {
  let component: ModulesLoginComponent;
  let fixture: ComponentFixture<ModulesLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
