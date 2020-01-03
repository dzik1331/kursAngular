import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {AgeValidator} from '../age-validator';
import {ErrorStateMatcher} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.touched && control.invalid;
  }
}

@Component({
  selector: 'app-form-groups',
  templateUrl: './form-groups.component.html',
  styleUrls: ['./form-groups.component.scss']
})
export class FormGroupsComponent extends TitleClass implements OnInit {
  tsP1 = `
  //ts
    export class MyErrorStateMatcher implements ErrorStateMatcher {
      isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.touched && control.invalid;
      }
    }

    @Component({
      selector: 'app-form-groups',
      templateUrl: './form-groups.component.html',
      styleUrls: ['./form-groups.component.scss']
    })
    export class FormGroupsComponent extends TitleClass implements OnInit {
      years: number[] = Array.from({length: new Date().getFullYear() - 1920}, (v, k) => k + 1920).reverse();
      form: FormGroup;
      addressForm: FormGroup;
      matcher = new MyErrorStateMatcher();

      constructor(pageService: PageService, route: ActivatedRoute, private fb: FormBuilder) {
        super(pageService, route);
      }

      ngOnInit() {
        super.ngOnInit();
        this.addressForm = this.fb.group({
          city: [null, [Validators.required]],
          street: [null, [Validators.required]]
        });
        this.form = this.fb.group({
          birthYear: [null, [AgeValidator.has18, Validators.required]],
          name: [null, [Validators.required]],
          lastname: [null, [Validators.required]],
          address: this.addressForm,
          skills: this.fb.array([])
        });
      }

      addNewSkill() {
        (this.form.get('skills') as FormArray).push(this.fb.group({
          name: [null, [Validators.required]],
          yearExperience: [null, [Validators.required, Validators.min(0)]]
        }));
      }

      save() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
          // wysyłamy dane na serwer lub robimy z nimi co tam chcemy zrobić
          this.form.setControl('skills', this.fb.array([])); //czyścimy tablicę z umiejętnościami
          this.form.reset(); // i czyścimy resztę formularza
        }
      }
    }
  `;
  htmlP1 = `
    //Html
     <form [formGroup]="form">
        <div fxLayout="row">
          <div class="p-5">
            <p>
              <mat-form-field>
                <mat-label>Rok urodzenia</mat-label>
                <mat-select [errorStateMatcher]="matcher" formControlName="birthYear">
                  <mat-option *ngFor="let year of years" [value]="year">
                    {{year}}
                  </mat-option>
                </mat-select>
                <mat-error>
                        <span *ngIf="form.controls.birthYear.hasError('ageError')">Musisz posiadać 18 lat</span>
                </mat-error>
              </mat-form-field>
            </p>
            <p>
              <mat-form-field>
                <mat-label>Imię</mat-label>
                <input [errorStateMatcher]="matcher" matInput formControlName="name">
              </mat-form-field>
            </p>
            <p>
              <mat-form-field>
                <mat-label>Nazwisko</mat-label>
                <input [errorStateMatcher]="matcher" matInput formControlName="lastname">
              </mat-form-field>
            </p>

          </div>
          <div class="ml-5 p-5">
            <div formGroupName="address">
              <p>
                <mat-form-field>
                  <mat-label>Miejscowość</mat-label>
                  <input [errorStateMatcher]="matcher" matInput formControlName="city">
                </mat-form-field>
              </p>
              <p>
                <mat-form-field>
                  <mat-label>Ulica</mat-label>
                  <input [errorStateMatcher]="matcher" matInput formControlName="street">
                </mat-form-field>
              </p>
            </div>
          </div>
          <mat-divider [vertical]="true"></mat-divider>
          <div class="ml-5 p-5">
            Umiejętności
            <button mat-icon-button (click)="addNewSkill()"><i class="fas fa-plus-circle"></i></button>
            <div formArrayName="skills" *ngFor="let skill of form.controls['skills'].controls; let i = index;">
              <div [formGroupName]="i">
                <mat-form-field>
                  <mat-label>Umiejętność</mat-label>
                  <input [errorStateMatcher]="matcher" matInput formControlName="name">
                  <mat-error>
                  </mat-error>
                </mat-form-field>
                <mat-form-field>
                  <mat-label>Doświadczenie w latach</mat-label>
                  <input type="number" [errorStateMatcher]="matcher" matInput formControlName="yearExperience">
                  <mat-error>
                          <span *ngIf="form.controls.skills.controls[i].controls.yearExperience.hasError('min')">Podana wartość jest za mała</span>
                  </mat-error>
                </mat-form-field>
              </div>
            </div>
          </div>
        </div>
        <div class="d-block">
          <button mat-raised-button color="primary" (click)="save()">Zapisz</button>
        </div>
      </form>
  `;
  years: number[] = Array.from({length: new Date().getFullYear() - 1920}, (v, k) => k + 1920).reverse();
  form: FormGroup;
  addressForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(pageService: PageService, route: ActivatedRoute, private fb: FormBuilder) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.addressForm = this.fb.group({
      city: [null, [Validators.required]],
      street: [null, [Validators.required]]
    });
    this.form = this.fb.group({
      birthYear: [null, [AgeValidator.has18, Validators.required]],
      name: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      address: this.addressForm,
      skills: this.fb.array([])
    });
  }

  addNewSkill() {
    (this.form.get('skills') as FormArray).push(this.fb.group({
      name: [null, [Validators.required]],
      yearExperience: [null, [Validators.required, Validators.min(0)]]
    }));
  }

  save() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      // wysyłamy dane na serwer lub robimy z nimi co tam chcemy zrobić
      this.form.setControl('skills', this.fb.array([])); //czyścimy tablicę z umiejętnościami
      this.form.reset(); // i czyścimy resztę formularza
    }
  }
}
