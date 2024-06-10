import { RouterModule, Routes } from '@angular/router';
import { CollapsePaneComponent } from './collapse-pane/collapse-pane.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'content', component: CollapsePaneComponent},
    {path: 'aboutme', component: AboutmeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
