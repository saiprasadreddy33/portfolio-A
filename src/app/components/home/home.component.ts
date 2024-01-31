import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { DynamicScriptService } from '../../services/dynamic-script.service';
import Blast from 'blast-vanilla';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('title') titlePieces!: ElementRef;
  screenWidth!: number;

  constructor(
    private dsService: DynamicScriptService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 768) {
      this.dsService
        .load('oscillator')
        .then(() => {
          this.oscillate(false);
        })
        .catch((error) => console.log(error));
    }
  }

  oscillate(value: boolean) {
    (window as any).initOscillator(value);
  }

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
      if (element.innerHTML === ',') {
        this.insertAfter(element, this.document.createElement('br'));
      }

      setTimeout(() => {
        this.renderer.addClass(element, 'animated');
        this.renderer.addClass(element, 'bounceIn');
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
      }, 3300);
    }
  }

  insertAfter(referenceNode: Node, newNode: Node): void {
    (referenceNode.parentNode as Node).insertBefore(
      newNode,
      referenceNode.nextSibling
    );
  }

  ngOnDestroy(): void {
    // Remove all the event listeners oscillating in background.
    if (typeof (window as any).initOscillator !== 'undefined') {
      this.oscillate(true);
    }
  }
}
