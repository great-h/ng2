import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2App} from '../app/ng2.component';

beforeEachProviders(() => [Ng2App]);

describe('App: Ng2', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2App], (app: Ng2App) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2App], (app: Ng2App) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

