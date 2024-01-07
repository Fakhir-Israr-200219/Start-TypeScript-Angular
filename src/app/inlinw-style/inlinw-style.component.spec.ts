import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinwStyleComponent } from './inlinw-style.component';

describe('InlinwStyleComponent', () => {
  let component: InlinwStyleComponent;
  let fixture: ComponentFixture<InlinwStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlinwStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlinwStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
