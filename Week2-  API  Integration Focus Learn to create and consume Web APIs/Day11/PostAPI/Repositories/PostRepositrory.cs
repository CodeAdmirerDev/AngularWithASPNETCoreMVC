using PostAPI.Models;

namespace PostAPI.Repositories
{
    public class PostRepositrory
    {
        private List<Post> _posts = new();

        private int _nextId = 1;
        public PostRepositrory()
        {
            // Initialize with some sample data
            _posts.Add(new Post { Id = _nextId++, Title = "First Post", Body = "This is the body of the first post", UserId = 1 });
            _posts.Add(new Post { Id = _nextId++, Title = "Second Post", Body = "This is the body of the second post", UserId = 2 });
        }

        public IEnumerable<Post> GetAllPosts() => _posts;

        public Post GetByPostId(int postId) => _posts.FirstOrDefault(p=> p.Id == postId);

        public Post CreatePost(Post postInfo)
        {
            postInfo.Id = _nextId++;
            _posts.Add(postInfo);
            return postInfo;
        }

        public bool UpdatePost(Post postInfo)
        {

            var postExist = GetByPostId(postInfo.Id);

            if (postExist == null)
                return false;

            postExist.Title = postInfo.Title;
            postExist.Body = postInfo.Body;
            postExist.UserId= postInfo.UserId;
            return true;


        }

        public bool DeletePost(int postId)
        {

            var postExist = GetByPostId(postId);
            if (postExist == null) return false;
            
            return _posts.Remove(postExist);
        }

    }
}
