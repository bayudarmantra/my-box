import { Component } from '@angular/core';
import { FileListComponent } from './components/file-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FileListComponent]
})
export class AppComponent {
  title = 'app works!';
}
