import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerifypasswordComponent } from './verifypassword.component';

describe('VerifypasswordComponent', () => {
  let component: VerifypasswordComponent;
  let fixture: ComponentFixture<VerifypasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifypasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifypasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
