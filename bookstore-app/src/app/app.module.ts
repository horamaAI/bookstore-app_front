import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { LanguageListComponent } from "./languages/language-list/language-list.component";
import { SharedModule } from "./shared/shared.module";
import { BookListComponent } from "./books/book-list/book-list.component";
import { BookModule } from "./books/book.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        SharedModule,
        BookModule],
    // exports: [BookListComponent]
    bootstrap: [AppComponent]
}
)
export class AppModule {}