import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIFComponent } from './ng-if.component';

describe('NgIFComponent', () => {
  let component: NgIFComponent;
  let fixture: ComponentFixture<NgIFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
