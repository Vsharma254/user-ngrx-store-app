import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackendIntercepter } from './mockBackEndIntercepter';
@NgModule(
    {
        imports: [],
        declarations: [],
        providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: MockBackendIntercepter,
            multi: true
        }]
    }
)
export class IntercepterModule {

}