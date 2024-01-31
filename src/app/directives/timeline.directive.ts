import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appTimeline]',
  standalone: true
})
export class TimelineDirective implements OnInit {
  @Input('customClassName') className!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll') onScroll() {
    this.toggleView();
  }

  ngOnInit(): void {
    this.toggleView();
  }

  toggleView() {
    if (this.isElementInViewport(this.elementRef.nativeElement)) {
      if (!this.elementRef.nativeElement.classList.contains(this.className)) {
        this.renderer.addClass(this.elementRef.nativeElement, this.className);
      }
    } else if (
      this.elementRef.nativeElement.classList.contains(this.className)
    ) {
      this.renderer.removeClass(this.elementRef.nativeElement, this.className);
    }
  }

  isElementInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
