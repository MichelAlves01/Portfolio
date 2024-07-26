import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsXComponent } from './sectors-x.component';

describe('SectorsXComponent', () => {
  let component: SectorsXComponent;
  let fixture: ComponentFixture<SectorsXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectorsXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectorsXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
