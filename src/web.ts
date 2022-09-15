import { WebPlugin } from '@capacitor/core';
import { GetCurrentOrientationResult, LockOptions, ScreenOrientationPlugin } from './definitions';

export class ScreenOrientationWeb extends WebPlugin implements ScreenOrientationPlugin {
  constructor() {
    super({
      name: 'ScreenOrientation',
      platforms: ['web'],
    });
  }
  async lock(options: LockOptions): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async unlock(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async getCurrentOrientation(): Promise<GetCurrentOrientationResult> {
    throw new Error('Method not implemented.');
  }
}

const ScreenOrientation = new ScreenOrientationWeb();

export { ScreenOrientation };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ScreenOrientation);
