using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PostAPI.Models;
using PostAPI.Repositories;

namespace PostAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {

        private PostRepositrory _postRepositrory;

        public PostsController(PostRepositrory postRepositrory)
        {
            _postRepositrory = postRepositrory; 
        }

        //Get api/posts
        [HttpGet]
        public ActionResult<IEnumerable<Post>> GetAllPosts()
        {
            return Ok(_postRepositrory.GetAllPosts());
        }

        //Get api/posts/4
        [HttpGet("{id}")]
        public ActionResult<Post> GetByPostId(int PostId)
        {

            var post = _postRepositrory.GetByPostId(PostId);

            if(post == null) 
                return NotFound();

            return Ok(post);
        }

        [HttpPost]
        public ActionResult CreatePost([FromBody]Post post) {

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var createdPostinfo = _postRepositrory.CreatePost(post);

            return CreatedAtAction(nameof(GetByPostId), createdPostinfo);

        }

        [HttpDelete]
        public ActionResult DeletePost(int PostId) {

            //var postInfo = _postRepositrory.GetByPostId(PostId);
            //if(postInfo == null)
            //    return NotFound();

            var sucess = _postRepositrory.DeletePost(PostId);

            if(!sucess)
                return NotFound();

            return NoContent();
        
        }

        [HttpPut]
        public ActionResult UpdatePost(int id, Post post)
        {

            if (post == null || post.Id != id)
                return BadRequest();

            var success = _postRepositrory.UpdatePost(post);
            if (!success)
                return NotFound();

            return NoContent();

        }



    }
}
