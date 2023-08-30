import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScreenboxComponent } from './screenbox/screenbox.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

import { GrapheService } from './AllService/graphe.service';
import { AlgorithmService } from './AllService/algorithm.service';
import { SaveUploadService } from './AllService/save-upload.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './components/info/info.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { ScreenComponent } from './components/screen/screen.component';
import { AddWeightedEdgeComponent } from './components/add-weighted-edge/add-weighted-edge.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { SelectComponent } from './components/select/select.component';
import { ChangeIdNodeComponent } from './components/change-id-node/change-id-node.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { AddNodeComponent } from './components/add-node/add-node.component';


// Function to load translations
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScreenboxComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    InfoComponent,
    MessageComponent,
    ScreenComponent,
    AddWeightedEdgeComponent,
    MatrixComponent,
    SelectComponent,
    ChangeIdNodeComponent,
    ChangeColorComponent,
    AddNodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule
    
  ],
  providers: [GrapheService,AlgorithmService,SaveUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }