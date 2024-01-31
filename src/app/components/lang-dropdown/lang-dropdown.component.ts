import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang-dropdown.component.html',
  styleUrls: ['./lang-dropdown.component.scss']
})
export class LangDropdownComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {}

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
