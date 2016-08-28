import { Component } from '@angular/core';
import { FileOptionComponent } from './file-option';
import { FileListComponent } from './file-list';

@Component({
  moduleId: module.id,
  selector: 'app-file-manager',
  templateUrl: 'file-manager.component.html',
  directives: [FileListComponent, FileOptionComponent]
})
export class FileManagerComponent{

}
