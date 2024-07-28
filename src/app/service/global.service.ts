import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Languages, Settings } from "../pages/settings/settings.component.model";

@Injectable({
    providedIn: 'root'
  })
export class GlobalService {

    public switchColorSchema = new BehaviorSubject<Settings>({
        theme: 'dark',
        language: Languages.EN
    });
}