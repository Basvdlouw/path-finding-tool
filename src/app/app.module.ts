import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PathFindingVisualiserComponent } from "./path-finding-visualiser/path-finding-visualiser.component";
import { NodeComponent } from "./node/node.component";

const routes: Routes = [
  { path: "", component: PathFindingVisualiserComponent }
];

@NgModule({
  declarations: [AppComponent, PathFindingVisualiserComponent, NodeComponent],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
