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
