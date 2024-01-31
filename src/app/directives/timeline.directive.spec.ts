import { ElementRef, Renderer2 } from '@angular/core';
import { TimelineDirective } from './timeline.directive';

describe('TimelineDirective', () => {
  it('should create an instance', () => {
    const directive = new TimelineDirective(<ElementRef>{}, <Renderer2>{});
    expect(directive).toBeTruthy();
  });
});
