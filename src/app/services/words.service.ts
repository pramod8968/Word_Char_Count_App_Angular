import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http:HttpClient) { }

  GetWordsCount(paragraph:string){
    return this.http.post("http://localhost:8080/Counter/getWordsCount",paragraph);
    
  }

  GetCharactersCount(paragraph:string){
    return this.http.post("http://localhost:8080/Counter/getCharactersCount",paragraph);
  }



}
