import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class GlobalService {

    public switchColorSchema = new BehaviorSubject<any>({
        isDark: true
    });
}