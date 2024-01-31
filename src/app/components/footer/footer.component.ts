import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaProfiles } from '../../constants';
import { ISocialMediaLinks } from '../../interfaces';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear!: number;
  public links!: ISocialMediaLinks[];

  ngOnInit(): void {
    this.links = SocialMediaProfiles;
    this.currentYear = new Date().getFullYear();
  }
}
