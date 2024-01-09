import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { BookModule } from "./books/book.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { LanguageModule } from "./languages/language.module";
import { WelcomeComponent } from "./home/welcome/welcome.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ]),
        SharedModule,
        BookModule,
        LanguageModule
    ],
    // exports: [BookListComponent]
    bootstrap: [AppComponent]
}
)
export class AppModule {}