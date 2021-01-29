import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blogpost.model';
import { blogPostsData } from '../static/blogpost-summary.data';
@Injectable({
  providedIn: 'root',
})
export class ExtractStaticPostsDataService {
  constructor() {}

  getRouteById(id: number): string {
    // if no match id, then return to home page
    if (id) {
      const data = blogPostsData.find((x) => x.id === id);
      return data?.route || '';
    }
    return '';
  }

  getPostDataById(id: number): BlogPost | undefined {
    return blogPostsData.find((x) => x.id === id);
  }
}
