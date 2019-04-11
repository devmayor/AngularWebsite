import { Component, OnInit , Renderer2} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
public toggle = false;
  constructor() { }

  ngOnInit() {
  }
  toggleNav() {
    this.toggle = !this.toggle;
  }
}
