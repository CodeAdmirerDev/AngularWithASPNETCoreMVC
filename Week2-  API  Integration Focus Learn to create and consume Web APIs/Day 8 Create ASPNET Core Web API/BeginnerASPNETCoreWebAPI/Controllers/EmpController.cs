using BeginnerASPNETCoreWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BeginnerASPNETCoreWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {
        List<Emp> emps;

        public EmpController()
        {
            emps = new List<Emp>()
            {

                new Emp() {Address = "Address1", Email = "Email1", Id = 1, Name = "CodeAdmirer", salary=12000},
                new Emp() {Address = "Address2", Email = "Email2", Id = 2, Name = "Name2", salary=150000},
            };
        }


        [HttpGet]
        public JsonResult GetAllEmps()
        {
            //retrun json result

            return new JsonResult(emps); // 👈 Explicitly returns JSON
        }

        [HttpGet("{id}")]
        public IActionResult GetEmpById(int id)
        {
            var emp = emps.FirstOrDefault(e => e.Id == id);
            if (emp == null)
            {
                return NotFound();
            }
            return Ok(emp);
        }

        [HttpPost]
        public IActionResult PostEmp([FromBody]Emp emp) {
            if (emp == null)
            {
                return BadRequest();
            }
            emps.Add(emp);
            return CreatedAtAction(nameof(GetEmpById), new { id = emp.Id }, emp);
        }

    }

}
