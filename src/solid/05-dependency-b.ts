import { JsonDatabaseservice, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor( private postProvider: PostProvider ) {}

    async getPosts() {
        // const jsonDB = new JsonDatabaseservice();
        this.posts = await this.postProvider.getPost();

        return this.posts;
    }
}