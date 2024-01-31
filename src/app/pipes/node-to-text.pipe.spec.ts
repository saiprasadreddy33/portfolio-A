import { NgControl } from '@angular/forms';
import { NodeToTextPipe } from './node-to-text.pipe';

describe('NodeToTextPipe', () => {
  it('create an instance', () => {
    const pipe = new NodeToTextPipe();
    expect(pipe).toBeTruthy();
  });
});

