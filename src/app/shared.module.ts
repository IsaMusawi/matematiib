import { NgModule } from "@angular/core";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { SafeUrlPipe } from "./safe-url.pipe";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from "@angular/material/sidenav";


@NgModule({
    declarations:[
        
    ],
    imports: [
        CommonModule,
        SafeUrlPipe,
        MatSidenav
    ],
    exports: [
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        CommonModule,
        SafeUrlPipe,
        MatExpansionModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenav,
    ]
})

export class SharedModule {}