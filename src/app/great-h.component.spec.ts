import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GreatHAppComponent } from '../app/great-h.component';

beforeEachProviders(() => [GreatHAppComponent]);

describe('App: GreatH', () => {
  it('should create the app',
      inject([GreatHAppComponent], (app: GreatHAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'great-h works!\'',
      inject([GreatHAppComponent], (app: GreatHAppComponent) => {
    expect(app.title).toEqual('great-h works!');
  }));
});
