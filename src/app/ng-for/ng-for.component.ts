import { Component } from '@angular/core';

// interface for data
interface User {
  name: string;
  old: number;
  address: string;
}

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent {
  // initial variable
  users: User[] = [
    {
      name: 'Aris Munandar',
      old: 19,
      address: 'Klampisan, Sempukerep',
    },
    {
      name: 'Munandara',
      old: 20,
      address: 'Wonogiri, Jawa Tengah',
    },
  ];
}
