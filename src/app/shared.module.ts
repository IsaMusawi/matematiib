import { NgModule } from "@angular/core";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CollapsePaneComponent } from "./collapse-pane/collapse-pane.component";
import { CommonModule } from "@angular/common";
import { SafeUrlPipe } from "./safe-url.pipe";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
    declarations:[
        
    ],
    imports: [
        CollapsePaneComponent,
        CommonModule,
        SafeUrlPipe,
    ],
    exports: [
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        CollapsePaneComponent,
        CommonModule,
        SafeUrlPipe,
        MatExpansionModule,
    ]
})

export class SharedModule {}