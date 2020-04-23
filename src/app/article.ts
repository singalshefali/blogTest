export class Article {
    id: number;
    title: string;
    content: string;
    description: string;
    imageUrl: string;
    date: Date = new Date();
    key: string;
}