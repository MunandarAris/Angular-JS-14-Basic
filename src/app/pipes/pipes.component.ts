import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  users: Promise<string> | null = null;
  status: boolean = false;

  reset() {
    this.users = new Promise<string>((resolve, reject) => {
      this.status = true;
    });
  }
}
