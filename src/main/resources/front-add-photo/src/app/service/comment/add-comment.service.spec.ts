import { TestBed, inject } from '@angular/core/testing';

import { CommentService } from './add-comment.service';

describe('AddCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentService]
    });
  });

  it('should be created', inject([CommentService], (service: CommentService) => {
    expect(service).toBeTruthy();
  }));
});
