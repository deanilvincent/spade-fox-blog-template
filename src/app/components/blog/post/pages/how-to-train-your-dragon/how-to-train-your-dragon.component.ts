import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BlogPost } from 'src/app/models/blogpost.model';
import { PostHeader } from 'src/app/models/postheader.model';
import { ExtractStaticPostsDataService } from 'src/app/services/extract-static-posts-data.service';

@Component({
  selector: 'app-how-to-train-your-dragon',
  templateUrl: './how-to-train-your-dragon.component.html',
  styleUrls: ['./how-to-train-your-dragon.component.css'],
})
export class HowToTrainYourDragonComponent implements OnInit {
  postHeader: BlogPost = {
    title: '',
    subtitle: '',
    date: '',
    tag: '',
    route: '',
    id: 0,
    metaTag: ''
  };

  code = `<!DOCTYPE html>
<html>
  <body>
  <button onclick="this.innerHTML=Date()">The time is?</button>
  </body>
</html>`;

  constructor(
    private extractStaticPostsService: ExtractStaticPostsDataService,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    this.getBlogPostHeaderData()
  }

  ngOnInit() {
    this.titleService.setTitle(this.postHeader.title);
    this.metaTagService.updateTag({ name: 'description', content: this.postHeader.metaTag ?? "" });
  }

  getBlogPostHeaderData() {
    const data = this.extractStaticPostsService.getPostDataById(1);
    if (data) {
      this.postHeader.title = data.title;
      this.postHeader.subtitle = data.subtitle;
      this.postHeader.route = data.route;
      this.postHeader.date = data.date;
    }
  }
}
