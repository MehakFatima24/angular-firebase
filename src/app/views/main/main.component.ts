import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { KatexOptions } from 'ng-katex';
import { AdapterService } from 'src/app/services/adapter/adapter.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user/user.service';
import { OauthService } from 'src/app/services/oauth/oauth.service';

declare var MediumEditor: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  constructor(
     private cdr: ChangeDetectorRef,
     private adapter: AdapterService,
     private ngxService: NgxUiLoaderService,
     private user: UserService,
     private oauth: OauthService) { }

  editor: any;

  paragraphValue = ' ';

  username = '';

  options: KatexOptions = {
    displayMode: true,
  };

  @ViewChild('editable', {static: true}) editable: ElementRef;

  ngAfterViewInit() {
    this.ngxService.start();
    this.username = this.user.getUser().displayName;
    this.getNote();
    this.editor = new MediumEditor(this.editable.nativeElement,
        {
          toolbar: {
            buttons: [
                'bold',
                'italic',
                {
                    name: 'h1',
                    action: 'append-h2',
                    aria: 'header type 1',
                    tagNames: ['h2'],
                    contentDefault: '<b>H1</b>',
                    classList: ['custom-class-h1'],
                    attrs: {
                        'data-custom-attr': 'attr-value-h1'
                    }
                },
                {
                    name: 'h2',
                    action: 'append-h3',
                    aria: 'header type 2',
                    tagNames: ['h3'],
                    contentDefault: '<b>H2</b>',
                    classList: ['custom-class-h2'],
                    attrs: {
                        'data-custom-attr': 'attr-value-h2'
                    }
                },
                'justifyCenter',
                'quote',
                'anchor'
            ]
         }
      });
    this.editor.subscribe('editableInput', (event, editable) => {
        this.paragraphValue = editable.innerText;
        this.saveChanges(this.paragraphValue);
      });
    this.cdr.detectChanges();
  }

  saveChanges(note) {
    this.adapter.saveNote(note);
  }

  getNote() {
    return new Promise((resolve, reject) => {
      this.adapter.getNote(this.renderNote.bind(this));
    });
  }

  renderNote(note) {
    this.editor.setContent(note, 0);
    this.ngxService.stop();
  }

  signOut() {
    this.oauth.signOut();
  }
}
