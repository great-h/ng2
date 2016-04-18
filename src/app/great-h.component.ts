import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';


@Component({
  moduleId: module.id,
  selector: 'great-h-app',
  templateUrl: 'great-h.component.html',
  styleUrls: ['great-h.component.css'],
  directives: [MdToolbar],
})
export class GreatHAppComponent {
  title = 'すごい広島';
}
