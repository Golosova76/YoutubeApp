import { CustomCard } from 'app/shared/models/search-item.model';
import { FilterCustomCardsPipe } from './filter-words-custom.pipe';

describe('FilterCustomCardsPipe', () => {
  const mockCards: CustomCard[] = [
    {
      id: '1',
      title: 'Angular Basics',
      description: 'Learn the basics of Angular framework',
      imageUrl: 'image1.jpg',
      videoUrl: 'video1.mp4',
      creationDate: new Date('2023-08-15'),
    },
    {
      id: '2',
      title: 'React Fundamentals',
      description: 'Introduction to React concepts',
      imageUrl: 'image2.jpg',
      videoUrl: 'video2.mp4',
      creationDate: new Date('2023-07-20'),
    },
    {
      id: '3',
      title: 'Vue.js Guide',
      description: 'Comprehensive guide on Vue.js',
      imageUrl: 'image3.jpg',
      videoUrl: 'video3.mp4',
      creationDate: new Date('2023-06-10'),
    },
  ];

  let pipe: FilterCustomCardsPipe;

  beforeEach(() => {
    pipe = new FilterCustomCardsPipe();
  });

  it('should return all custom cards if search query is empty', () => {
    const result = pipe.transform(mockCards, '');
    expect(result).toEqual(mockCards);
  });

  it('should return filtered custom cards by title', () => {
    const result = pipe.transform(mockCards, 'Angular');
    expect(result).toEqual([mockCards[0]]);
  });

  it('should return filtered custom cards by description', () => {
    const result = pipe.transform(mockCards, 'guide');
    expect(result).toEqual([mockCards[2]]);
  });

  it('should be case insensitive', () => {
    const result = pipe.transform(mockCards, 'REACT');
    expect(result).toEqual([mockCards[1]]);
  });

  it('should handle multiple words in search query', () => {
    const result = pipe.transform(mockCards, 'angular basics');
    expect(result).toEqual([mockCards[0]]);
  });

  it('should return empty array if no custom cards match the search query', () => {
    const result = pipe.transform(mockCards, 'nonexistent');
    expect(result).toEqual([]);
  });

  it('should return original array if items are empty', () => {
    const result = pipe.transform([], 'Angular');
    expect(result).toEqual([]);
  });

  it('should return original array if searchQueryWords is an empty string', () => {
    const result = pipe.transform(mockCards, '');
    expect(result).toEqual(mockCards);
  });
});
