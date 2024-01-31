import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Blast from 'blast-vanilla';
import { NEW_EXPERIENCES } from '../../constants';
import { INewExperience } from '../../interfaces';

@Component({
  selector: 'app-experience-new',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-new.component.html',
  styleUrls: ['./experience-new.component.scss']
})
export class ExperienceNewComponent implements OnInit {
  @ViewChild('title') titlePieces!: ElementRef;
  experiences!: INewExperience[];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.experiences = NEW_EXPERIENCES;
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
      }, 1500);
    }
  }
}
