import { Component } from '@angular/core';
import { FileManagerComponent } from './components/file-manager';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FileManagerComponent]
})
export class AppComponent {
  title = 'app works!';
}
