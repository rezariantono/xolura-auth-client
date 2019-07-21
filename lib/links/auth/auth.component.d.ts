import { OnInit } from '@angular/core';
export declare class AuthComponent implements OnInit {
    authAction: string;
    private tokenName;
    class: string;
    constructor();
    ngOnInit(): void;
    authClick(): void;
    private generateAuthAction;
    private logout;
    private login;
}
