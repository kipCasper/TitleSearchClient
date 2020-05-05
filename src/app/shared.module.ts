import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        CommonModule
    ],
    providers: [],
    exports: [
        HttpClientModule,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        CommonModule
    ]
})
export class SharedModule { }