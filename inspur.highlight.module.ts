import { NgModule } from "@angular/core"
import { HighlightComponent } from "./inspur-highlight/highlight.component";
import 'inspurprism'
@NgModule({
  declarations: [HighlightComponent],
  exports: [HighlightComponent]
})
export class InspurHighlightModule {

}
