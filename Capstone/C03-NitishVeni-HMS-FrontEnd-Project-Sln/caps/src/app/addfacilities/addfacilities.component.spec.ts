import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacilitiesComponent } from './addfacilities.component';

describe('AddfacilitiesComponent', () => {
  let component: AddfacilitiesComponent;
  let fixture: ComponentFixture<AddfacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfacilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
