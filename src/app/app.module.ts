import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService} from './data.service';
import { CurrencyService } from './currency.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinancialListComponent } from './expense-list/financial-list/financial-list.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CurrencyChartComponent } from './currency-chart/currency-chart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { EditingComponent } from './modalWindows/editing/editing.component';
import { DeleteModalComponent } from './modalWindows/delete-modal/delete-modal.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    ExpenseListComponent,
    HeaderComponent,
    FinancialListComponent,
    CurrencyChartComponent,
    EditingComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [DataService, CurrencyService],
  bootstrap: [AppComponent],
  entryComponents: [EditingComponent, DeleteModalComponent]
})
export class AppModule { }
