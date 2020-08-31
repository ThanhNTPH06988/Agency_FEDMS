import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesAgencyComponent } from './modules-agency.component';

describe('ModulesAgencyComponent', () => {
  let component: ModulesAgencyComponent;
  let fixture: ComponentFixture<ModulesAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
