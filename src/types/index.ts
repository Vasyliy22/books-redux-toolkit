export interface VolumeType {
  title: string,
  categories: string[],
  authors: string[],
  publishedDate: string,
  description: string,
  imageLinks: {
    smallThumbnail: string,
    thumbnail: string
  }
}

export interface BookType {
  id: string,
  volumeInfo: VolumeType,
}
