import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {cardToggle, cardClose} from './card-animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [cardToggle, cardClose],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() headerContent: string;
  @Input() title: string;
  @Input() blockClass: string;
  @Input() cardClass: string;
  @Input() classHeader = false;
  cardToggle = 'expanded';
  cardClose = 'open';
  fullCard: string;
  fullCardIcon: string;
  loadCard = false;
  isCardToggled = false;
  cardLoad: string;
  constructor() { }

  ngOnInit() {
  }

  toggleCard(event) {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }

  closeCard(event) {
    this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
  }

  fullScreen(event) {
    this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
    this.fullCardIcon = this.fullCardIcon === 'icofont-resize' ? '' : 'icofont-resize';
  }

  cardRefresh() {
    this.loadCard = true;
    this.cardLoad = 'card-load';
    setTimeout( () => {
      this.cardLoad = '';
      this.loadCard = false;
    }, 3000);
  }
}
