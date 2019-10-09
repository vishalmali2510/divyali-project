import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesIntroComponent } from './directives-intro.component';

describe('DirectivesIntroComponent', () => {
  let component: DirectivesIntroComponent;
  let fixture: ComponentFixture<DirectivesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
