import { Injectable } from '@angular/core';
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
      return data?.route || ""
    }
    return ""
  }
}
