import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMediumBlogPostsResponse } from '../interfaces';
import { MEDIUM_INTEGRATION_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<IMediumBlogPostsResponse> {
    return this.httpClient.get<IMediumBlogPostsResponse>(
      MEDIUM_INTEGRATION_URL
    );
  }
}
