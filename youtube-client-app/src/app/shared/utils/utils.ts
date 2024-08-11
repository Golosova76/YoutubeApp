import { VideoItem } from 'app/shared/models/search-item.model';

export function getThumbnailUrl(videoData?: VideoItem): string {
  const {
    maxres,
    high,
    medium,
    default: def,
  } = videoData?.snippet?.thumbnails || {};
  return (
    maxres?.url || high?.url || medium?.url || def?.url || 'assets/caption.jpg'
  );
}

export const DEBOUNCE_TIME_MS = 1000;

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 8) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
