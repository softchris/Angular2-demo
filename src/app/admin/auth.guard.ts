import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


export class AuthGuard implements CanActivate {
    canActivate(){
        console.log('Admin Component Can activate'); // talk to an authService and determine wether user can see this page
        return false;
    }
}
