import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Languages, Settings } from "../pages/settings/settings.component.model";
import { InjectionToken } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class GlobalService {

    public switchColorSchema = new BehaviorSubject<Settings>({
        theme: 'light',
        timeTheme: 'retro',
        language: Languages.EN
    });
}

