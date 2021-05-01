import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagaddComponent } from './tagadd.component';

describe('TagaddComponent', () => {
  let component: TagaddComponent;
  let fixture: ComponentFixture<TagaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
