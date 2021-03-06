import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageHeaderModule, PageFooterModule } from '../shared';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        HttpClientModule,
        PageHeaderModule,
        PageFooterModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
