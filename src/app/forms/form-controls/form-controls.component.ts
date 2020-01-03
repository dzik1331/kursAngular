import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {FormControl, Validators} from '@angular/forms';
import {AgeValidator} from '../age-validator';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent extends TitleClass implements OnInit {
  selectAge;
  years: number[] = Array.from({length: new Date().getFullYear() - 1920}, (v, k) => k + 1920).reverse();

  tsP1 = `
    //Komponent
    export class FormControlsComponent extends TitleClass implements OnInit {
      selectAge;
      years: number[] = Array.from({length: new Date().getFullYear() - 1920}, (v, k) => k + 1920).reverse();

      constructor(pageService: PageService, route: ActivatedRoute) {
        super(pageService, route);
      }

      ngOnInit() {
        super.ngOnInit();
        this.selectAge = new FormControl(null, [Validators.required, AgeValidator.has18]);
      }

    }
  `;

  tsP1a = `
    //AgeValidator
    export class AgeValidator {
      static has18(control: AbstractControl): ValidationErrors | null {
        if (control && control.value !== null) {
          return new Date().getFullYear() - control.value < 18 ? {ageError: true} : null;
        }
        return null;
      }
    }
  `;

  htmlP1 = `
    //Html
   <mat-form-field appearance="outline">
    <mat-label>Rok urodzenia</mat-label>
    <mat-select [formControl]="selectAge">
      <mat-option *ngFor="let year of years" [value]="year">
        {{year}}
      </mat-option>
    </mat-select>
    <mat-error>
      <span *ngIf="selectAge.hasError('ageError')">Musisz posiadać 18 lat</span>
    </mat-error>
  </mat-form-field>
  <div class="d-block">
    <button [disabled]="selectAge.invalid" mat-raised-button color="primary">Zapisz</button>
  </div>
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.selectAge = new FormControl(null, [Validators.required, AgeValidator.has18]);
  }

}
