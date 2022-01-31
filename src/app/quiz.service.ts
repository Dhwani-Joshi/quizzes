import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes : Quiz[] = [
    {
      question: 'What is the capital of Somalia?',
      answer:[
        {
          option:'Nairobi', correct:false
        },
        {
          option:'Asmara', correct:false
        },
        {
          option:'Mogadishu', correct:true
        }
      ]
    },
    {
      question: 'What is the capital of Mexico?',
      answer:[
        {
          option:'x', correct:false
        },
        {
          option:'y', correct:false
        },
        {
          option:'Mexico city', correct:true
        }
      ]
    },
    {
      question: 'What is the capital of UK?',
      answer:[
        {
          option:'London', correct:true
        },
        {
          option:'y', correct:false
        },
        {
          option:'Mexico city', correct:false
        }
      ]
    },
    {
      question: 'What is the capital of USA?',
      answer:[
        {
          option:'Los Angeles', correct:false
        },
        {
          option:'New York', correct:false
        },
        {
          option:'Washington DC', correct:true
        }
      ]
    },
    {
      question: 'What is the capital of UAE?',
      answer:[
        {
          option:'Dubai', correct:false
        },
        {
          option:'Abu Dhabi', correct:true
        },
        {
          option:'Doha', correct:false
        }
      ]
    },
    {
      question: 'What is the capital of Japan?',
      answer:[
        {
          option:'Osaka', correct:false
        },
        {
          option:'Seoul', correct:false
        },
        {
          option:'Tokyo', correct:true
        }
      ]
    },
    {
      question: 'What is the capital of SA?',
      answer:[
        {
          option:'Maputo', correct:false
        },
        {
          option:'Johannesburg', correct:false
        },
        {
          option:'Pretoria', correct:true
        }
      ]
    },
    {
      question: 'What is the capital of Brazil?',
      answer:[
        {
          option:'Buenos Aires', correct:false
        },
        {
          option:'Sao Paulo', correct:false
        },
        {
          option:'Brasilia', correct:true
        }
      ]
    },
    {
      question: 'What is the capital of Jamaica?',
      answer:[
        {
          option:'Brasilia', correct:false
        },
        {
          option:'Port More', correct:false
        },
        {
          option:'Asunction', correct:true
        }
      ]
    },
    {
      question: 'What is the capital of Cuba?',
      answer:[
        {
          option:'Delhi', correct:false
        },
        {
          option:'Montaclare', correct:false
        },
        {
          option:'Havana', correct:true
        }
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes
  }
}
