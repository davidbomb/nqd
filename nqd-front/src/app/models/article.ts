export class Article {
    title: string;
    category: string;
    description: string;
    content: string;
    date: Date;

    constructor(title: string, category: string, description: string, content: string, date: Date) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.content = content;
        this.date = date;
    }
  }
  