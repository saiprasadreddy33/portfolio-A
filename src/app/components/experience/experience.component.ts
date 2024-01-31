import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineDirective } from '../../directives/timeline.directive';
import { EXPERIENCES } from '../../constants';
import { IExperience } from '../../interfaces';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TimelineDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experience: IExperience[] = EXPERIENCES;
}
