import { Article } from './article';

export const Articles: Article[] = [
    {
        id: 1,
        title: 'My first article',
        content: '',
        description: 'This is the description of my first article',
        imageUrl: 'https://picsum.photos/200',
        date: new Date(),
        key: 'my-first-article'
    },
    {
        id: 2,
        title: 'My second article',
        content: '',
        description: 'This is the description of my second article',
        imageUrl: 'https://picsum.photos/seed/picsum/200',
        date: new Date(),
        key: 'my-second-article'
    }
]