import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxSnotifireComponent,
  NgxSnotifireModule,
  SnotifireService,
  ToastDefaults,
} from 'ngx-snotifire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';

describe('NgxSnotifireComponent', () => {
  let component: NgxSnotifireComponent;
  let fixture: ComponentFixture<NgxSnotifireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxSnotifireComponent],
      imports: [
        ReactiveFormsModule,
        NgxSnotifireModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatDividerModule,
        MatIconModule,
        HttpClientModule,
      ],
      providers: [
        { provide: 'NotifireConfig', useValue: ToastDefaults },
        SnotifireService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxSnotifireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
