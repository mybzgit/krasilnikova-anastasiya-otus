import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranstalorService {

  private _apiUrl: string = "https://api.mymemory.translated.net/get";

  constructor(private http: HttpClient) { }

  translate(word: string, from: string, to: string) {
    return this.http.get(`${this._apiUrl}?q=${word}&langpair=${from}|${to}`);
  }
}