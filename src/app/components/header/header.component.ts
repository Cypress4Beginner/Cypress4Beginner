import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    public projectName = 'Cypress 4 Beginner';
    public items: any[] = [
      { text: 'Home' },
      { text: 'install' },
      { text: 'cucumber' },
      { text: 'list_example' },
    ];
}



