import { Component, OnInit } from '@angular/core';
import { PostHeader } from 'src/app/models/postheader.model';

@Component({
  selector: 'app-how-to-train-your-dragon',
  templateUrl: './how-to-train-your-dragon.component.html',
  styleUrls: ['./how-to-train-your-dragon.component.css'],
})
export class HowToTrainYourDragonComponent implements OnInit {
  postHeader: PostHeader = {
    title: 'How to train your dragon?',
    subtitle: 'In this blog, we are going to train or tame a dragon inspired from the movie.',
    date: 'April 3, 2020',
    tag: '',
  };

  code = `<!DOCTYPE html>
<html>
  <body>
  <button onclick="this.innerHTML=Date()">The time is?</button>
  </body>
</html>`;

  constructor() {}

  ngOnInit() {}
}
