import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopwordComponent } from './topword.component';

describe('TopwordComponent', () => {
  let component: TopwordComponent;
  let fixture: ComponentFixture<TopwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopwordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
