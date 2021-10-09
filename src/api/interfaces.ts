export interface SearchParams {
    q: string;
}
export interface DetailParams {
    id: string;
}

export interface BooksResponse {
    items: Array<Book>
}

export interface BookResponse extends Book {
    volumeInfo: DetailVolumeInfo,
}

export interface Book {
    id: string,
    volumeInfo: BookVolumeInfo
}

interface BookVolumeInfo {
    title: string,
    subtitle: string,
    imageLinks: ImageLinks,
    description: string
}

interface ImageLinks {
    thumbnail: string,
}

interface DetailVolumeInfo extends BookVolumeInfo {
    imageLinks: DetailImageLinks,
}

interface DetailImageLinks extends ImageLinks {
    medium: string,
}