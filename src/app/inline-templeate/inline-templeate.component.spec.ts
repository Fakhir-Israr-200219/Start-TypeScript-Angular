import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTempleateComponent } from './inline-templeate.component';

describe('InlineTempleateComponent', () => {
  let component: InlineTempleateComponent;
  let fixture: ComponentFixture<InlineTempleateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTempleateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineTempleateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
