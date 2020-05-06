export class Article {
    _id: string;
    title: string;
    category: string;
    description: string;
    content: string;
    date: Date;
    image: string;

    constructor(title: string, category: string, description: string, content: string, date: Date) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.content = content;
        this.date = date;
    }

    setImage(image: string) {
        this.image = image;
        return this;
    }
  }
  