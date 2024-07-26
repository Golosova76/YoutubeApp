import { VideoItem } from 'app/shared/models/search-item.model';

/*
export function getThumbnailUrl(videoData?: VideoItem): string {
  if (videoData?.snippet?.thumbnails?.maxres) {
    return videoData.snippet.thumbnails.maxres.url;
  }
  if (videoData?.snippet?.thumbnails?.high) {
    return videoData.snippet.thumbnails.high.url;
  }
  if (videoData?.snippet?.thumbnails?.medium) {
    return videoData.snippet.thumbnails.medium.url;
  }
  return videoData?.snippet?.thumbnails?.default?.url || 'assets/caption.jpg';
}
*/

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
