import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyOrdersCreateComponent } from './agency-orders-create.component';

describe('AgencyOrdersCreateComponent', () => {
  let component: AgencyOrdersCreateComponent;
  let fixture: ComponentFixture<AgencyOrdersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyOrdersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyOrdersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
