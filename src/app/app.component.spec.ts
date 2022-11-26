import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxSnotifireModule,
  SnotifireService,
  ToastDefaults,
} from 'ngx-snotifire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

describe('TestComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
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
        { provide: 'snotifireConfig', useValue: ToastDefaults },
        SnotifireService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
