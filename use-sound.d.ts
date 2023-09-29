declare module 'use-sound' {
    import { HowlOptions } from 'howler';
  
    export interface PlayFunction {
      (): void;
      stop: () => void;
    }
  
    export interface ExposedData {
      stop: () => void;
      pause:()=>void;
      sound: Howl;
      duration: number;
    }
  
    export type UseSoundHook = [
      play: PlayFunction,
      exposedData: ExposedData
    ];
  
    export default function useSound(
      url: string,
      options?: HowlOptions
    ): UseSoundHook;
  }