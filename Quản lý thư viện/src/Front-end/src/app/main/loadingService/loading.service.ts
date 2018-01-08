import { Injectable } from '@angular/core';
import {  } from './../../../assets/porto/';

declare var $: any;

@Injectable()
export class LoadingService {
    constructor() { }

    start() {
        $('body').append(`<any id="globalloading"
        style="top:0;
        left: 0;
        height:100vh;
        width:100vw;
        position:fixed;
        opacity:0.9;
        background: #FFFFFF;
        z-index: 99999;
        background-position: center;
        background-image: url(./../../../assets/porto/Wedges.gif);
        background-repeat:no-repeat;
        "></any>`);
    }
    stop() {
        $('#globalloading').remove();
    }
}
