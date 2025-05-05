import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComposeEmailPage } from './compose-email.page';

describe('ComposeEmailPage', () => {
  let component: ComposeEmailPage;
  let fixture: ComponentFixture<ComposeEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
