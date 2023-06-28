import { Component } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service:WordsService) {}

  public characterCount:string = '';
  public wordCount:string = '';
  public isCharacterButtonPressed:boolean = false;
  public isWordButtonPressed:boolean = false;
  public isEmptyParagraph:boolean = false;



  getNumberOfWords(para:string){
    
    this.service.GetWordsCount(para).subscribe((data:any)=>{
      if(data!=0){
        this.isWordButtonPressed = true;
        this.wordCount = data;
        this.isEmptyParagraph = false;
        // alert("Number of words in the given paragraph/string = "+data);
      }
    },
    (error)=>{
      this.isCharacterButtonPressed = false;
      this.isWordButtonPressed = false;
      this.isEmptyParagraph = true;
      
      // alert("You have provided an empty paragraph");
      }
    );
  }

  getNumberOfCharacters(paragraph:string){
    
    this.service.GetCharactersCount(paragraph).subscribe((data:any)=>{
      if(data){
        this.isCharacterButtonPressed = true;
        this.characterCount = data;
        this.isEmptyParagraph = false;
        // alert("Number of characters in the given paragraph/string = "+data);
      }
    },
    (error)=>{
      this.isWordButtonPressed = false;
      this.isCharacterButtonPressed = false;
      this.isEmptyParagraph = true;
      // alert("You have provided an empty paragraph");
      }
    );
  }

}
