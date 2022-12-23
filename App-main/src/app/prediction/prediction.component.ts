import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from "@angular/forms";

export interface PredictionObject {
  prediction: number;
  average: number;
}

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})

export class PredictionComponent implements OnInit {

  predictedScore: PredictionObject = { prediction: 0, average: 0};
  scores: number[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onAddScore(f: NgForm): void {
    this.scores?.push(Math.round(f.value.score));
  }

  onRemoveScore(score: number): void {
    const index: number = this.scores.indexOf(score, 0);
    if (index > -1) {
      this.scores.splice(index, 1);
    }
  }

  onPredictScore(): void {
    this.httpClient.get('http://edutracker.eastus.cloudapp.azure.com:8000/predict?scores=' + this.scores.toString()).subscribe(data => {
      this.predictedScore = {
        prediction: (data as any).prediction,
        average: (data as any).average
      }
    });
  }

}
