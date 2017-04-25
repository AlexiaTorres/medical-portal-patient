/**
 * Created by R00056 on 25/04/2017.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'angular2-schema-form';
import { TestFormComponent } from './test-form.component';

@NgModule({
    imports: [
        SchemaFormModule,
        BrowserModule
    ],
    declarations: [TestFormComponent],
    providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}]
})
export class TestFormModule {
}
