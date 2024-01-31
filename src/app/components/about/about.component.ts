import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Blast from 'blast-vanilla';
import { TagCanvasModule, Tag } from 'ng-tagcanvas';
import { TAGS, TAG_CANVAS_OPTIONS } from '../../constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, TagCanvasModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('title') titlePieces!: ElementRef;

  constructor(private renderer: Renderer2) {}

  tags: Tag[] = TAGS;

  options: TagCanvasOptions = TAG_CANVAS_OPTIONS;

  ngAfterViewInit() {
    new Blast('h1', {
      returnGenerated: true,
      delimiter: 'character',
      tag: 'span',
      search: false,
      customClass: '',
      aria: true,
      debug: false,
      name: 'blast'
    });

    let elements: HTMLCollection = this.titlePieces.nativeElement.children;
    let timer = 0;
    for (const element of Array.from(elements)) {
      setTimeout(() => {
        this.renderer.addClass(element, 'animated');
        this.renderer.addClass(element, 'bounceIn');
        this.renderer.addClass(element, 'rubberBand');
      }, timer);

      timer += 100;

      setTimeout(() => {
        this.renderer.removeClass(element, 'animated');
        this.renderer.removeClass(element, 'bounceIn');
        this.renderer.setStyle(element, 'opacity', 1);
        element.addEventListener('mouseenter', () => {
          this.renderer.addClass(element, 'animated');
          this.renderer.addClass(element, 'rubberBand');
        });
        element.addEventListener('mouseleave', () => {
          this.renderer.removeClass(element, 'animated');
          this.renderer.removeClass(element, 'rubberBand');
        });
      }, 1500);
    }
  }
}
