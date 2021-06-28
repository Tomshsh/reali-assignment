import { TestBed } from '@angular/core/testing';

import { EditorResolver } from './editor.resolver';

describe('EditorResolver', () => {
  let resolver: EditorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
