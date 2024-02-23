import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/components/hero.component";
import { ListComponent } from "./list/components/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    exports: [ 
        HeroComponent,
        ListComponent],
    declarations: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule{}