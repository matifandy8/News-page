export interface Channel {
    id:    string;
    name:  string;
    image: string;
}

export interface Headline {
    id:          number;
    name:        string;
    author:      string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: Date;
    content:     string;
}