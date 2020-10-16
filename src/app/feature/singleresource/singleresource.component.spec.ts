import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleresourceComponent } from './singleresource.component';

describe('SingleresourceComponent', () => {
  let component: SingleresourceComponent;
  let fixture: ComponentFixture<SingleresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
