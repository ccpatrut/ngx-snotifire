import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSnotifireComponent } from './ngx-snotifire.component';

describe('NgxSnotifireComponent', () => {
  let component: NgxSnotifireComponent;
  let fixture: ComponentFixture<NgxSnotifireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSnotifireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSnotifireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
