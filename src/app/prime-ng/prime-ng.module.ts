import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
 exports: [
 ButtonModule,
 CardModule,
 FieldsetModule,
 MenubarModule,
 PanelModule,
 ToolbarModule,
 TableModule
 ]
})
export class PrimeNgModule { }