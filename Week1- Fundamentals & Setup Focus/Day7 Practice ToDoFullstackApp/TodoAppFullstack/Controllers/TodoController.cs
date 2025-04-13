using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoAppFullstack.Models;

namespace TodoAppFullstack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private static List<TodoItem> _todoItems = new List<TodoItem>
        {
            new TodoItem { Id = 1, Title = "Learn ASP.NET Core", IsCompleted = false },
            new TodoItem { Id = 2, Title = "Build a Todo App", IsCompleted = false }
        };

        [HttpGet]
        public ActionResult<List<TodoItem>> GetTodoItems()
        {
            return Ok(_todoItems);
        }

        [HttpGet("{id}")]
        public ActionResult<TodoItem> GetTodoItem(int id)
        {
            var todoItem = _todoItems.FirstOrDefault(t => t.Id == id);
            if (todoItem == null)
            {
                return NotFound();
            }
            return Ok(todoItem);
        }

        [HttpPost]
        public ActionResult<TodoItem> CreateTodoItem([FromBody] TodoItem todoItem)
        {
            if (todoItem == null)
            {
                return BadRequest();
            }

            if (_todoItems==null|| _todoItems.Count==0)
            {
                todoItem.Id = 1;

            }
            else
            {
                todoItem.Id = _todoItems.Max(t => t.Id) + 1;

            }
            _todoItems.Add(todoItem);
            return CreatedAtAction(nameof(GetTodoItem), new { id = todoItem.Id }, todoItem);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateTodoItem(int id, [FromBody] TodoItem updatedTodoItem)
        {
            var todoItem = _todoItems.FirstOrDefault(t => t.Id == id);
            if (todoItem == null)
            {
                return NotFound();
            }

            todoItem.Title = updatedTodoItem.Title;
            todoItem.IsCompleted = updatedTodoItem.IsCompleted;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteTodoItem(int id)
        {
            var todoItem = _todoItems.FirstOrDefault(t => t.Id == id);
            if (todoItem == null)
            {
                return NotFound();
            }

            _todoItems.Remove(todoItem);
            return NoContent();
        }

        [HttpDelete]
        public ActionResult DeleteAllTodoItems()
        {
            _todoItems.Clear();
            return NoContent();
        }
        [HttpGet("completed")]
        public ActionResult<List<TodoItem>> GetCompletedTodoItems()
        {
            var completedItems = _todoItems.Where(t => t.IsCompleted).ToList();
            return Ok(completedItems);
        }

        [HttpGet("incomplete")]
        public ActionResult<List<TodoItem>> GetIncompleteTodoItems()
        {
            var incompleteItems = _todoItems.Where(t => !t.IsCompleted).ToList();
            return Ok(incompleteItems);
        }


    }
}
