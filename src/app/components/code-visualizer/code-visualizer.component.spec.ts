import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVisualizerComponent } from './code-visualizer.component';

describe('CodeVisualizerComponent', () => {
  let component: CodeVisualizerComponent;
  let fixture: ComponentFixture<CodeVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeVisualizerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
