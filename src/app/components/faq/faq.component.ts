import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
accordion = [
  { heading: 'What kind of vehicles will you buy?',
    article: `At sevvicar we love all kinds of vehicles including
             trucks, cars, vans, mini vans and Suv\'s. We want to
              buy and year, make or model`,
    active: true
  },
  { heading: 'What do i need to sell my car?',
    article: `At sevvicar we love all kinds of vehicles including
             trucks, cars, vans, mini vans and Suv\'s. We want to
              buy and year, make or model`,
    active: false
  },
  { heading: 'What do i need to buy a car?',
    article: `At sevvicar we love all kinds of vehicles including
             trucks, cars, vans, mini vans and Suv\'s. We want to
              buy and year, make or model`,
    active: false
  }
];
  constructor() { }

  ngOnInit() {
  }
  accordionChange(index) {
    this.accordion[index].active = !this.accordion[index].active;
  }

}
