import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListresourceComponent } from './listresource.component';

describe('ListresourceComponent', () => {
  let component: ListresourceComponent;
  let fixture: ComponentFixture<ListresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
