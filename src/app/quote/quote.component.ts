import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote(1, 'Lao Tzu', 'The journey of a thousand miles begins with one step', 'ryan', new Date(2011,3,12)),
    new Quote(2, 'J.R.R Tolkein', 'Not all those who wander are lost', 'ryan', new Date(2012,4,3)),
    new Quote(3, 'Marcus Garvey', 'Progress is the attraction that moves humanity', 'ryan', new Date(1990,7,30)),
    new Quote(4, 'George.B.Shaw', 'Life is not about finding yourself but about creating yourself', 'ryan', new Date(2000,6,28)),
  ]
  showDescription= false;

  addNewQuote(quote){
       let quoteLength = this.quotes.length;
       quote.id=quoteLength+1;
       quote.newDate = new Date(quote.newDate)
       this.quotes.push(quote)

   }
  deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }
  toogleDetails(index){
          this.quotes[index].showDescription = !this.quotes[index].showDescription;
      }
  constructor() { }

  ngOnInit() {
  }

}
