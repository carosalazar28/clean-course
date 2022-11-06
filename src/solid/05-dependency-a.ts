import { PostService } from './05-dependency-b';
import { JsonDatabaseservice, LocalDataBaseService, WepApiPostService } from './05-dependency-c';


// Main
(async () => {

    // const provider = new JsonDatabaseservice()
    // const provider = new LocalDataBaseService()
    const provider = new WepApiPostService()

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();