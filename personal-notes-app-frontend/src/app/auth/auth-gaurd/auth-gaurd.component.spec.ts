import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGaurdComponent } from './auth-gaurd.component';

describe('AuthGaurdComponent', () => {
  let component: AuthGaurdComponent;
  let fixture: ComponentFixture<AuthGaurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthGaurdComponent]
    });
    fixture = TestBed.createComponent(AuthGaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
