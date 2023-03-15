import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakepayComponent } from './makepay.component';

describe('MakepayComponent', () => {
  let component: MakepayComponent;
  let fixture: ComponentFixture<MakepayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakepayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
