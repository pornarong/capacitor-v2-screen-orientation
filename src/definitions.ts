declare module '@capacitor/core' {
  interface PluginRegistry {
    ScreenOrientation: ScreenOrientationPlugin;
  }
}

export interface ScreenOrientationPlugin {
   lock(options: LockOptions): Promise<void>;
   unlock(): Promise<void>;
   getCurrentOrientation(): Promise<GetCurrentOrientationResult>;
}

export interface LockOptions {
  /**
   * The orientation lock type.
   */
  type: OrientationType;
}

export interface GetCurrentOrientationResult {
  /**
   * The current orientation type.
   */
  type: OrientationType;
}

export enum OrientationType {
  /**
   * The orientation is either landscape-primary or landscape-secondary.
   */
  LANDSCAPE = 'landscape',
  /**
   * The orientation is in the primary landscape mode.
   */
  LANDSCAPE_PRIMARY = 'landscape-primary',
  /**
   * The orientation is in the secondary landscape mode.
   */
  LANDSCAPE_SECONDARY = 'landscape-secondary',
  /**
   * The orientation is either portrait-primary or portrait-secondary.
   */
  PORTRAIT = 'portrait',
  /**
   * The orientation is in the primary portrait mode.
   */
  PORTRAIT_PRIMARY = 'portrait-primary',
  /**
   * The orientation is in the secondary portrait mode.
   */
  PORTRAIT_SECONDARY = 'portrait-secondary',
}
