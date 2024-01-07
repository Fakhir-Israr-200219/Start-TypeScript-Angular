import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemAndStyComponent } from './inline-tem-and-sty.component';

describe('InlineTemAndStyComponent', () => {
  let component: InlineTemAndStyComponent;
  let fixture: ComponentFixture<InlineTemAndStyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTemAndStyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineTemAndStyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
