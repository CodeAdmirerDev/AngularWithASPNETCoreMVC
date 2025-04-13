using ASPNETCoreMVCWIthRouting.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASPNETCoreMVCWIthRouting.Controllers
{
    [Route("employee")]
    public class EmployeeController : Controller
    {
        private static List<Employee> _data = new List<Employee>
    {
        new Employee { Id = 1, Name = "Suri", Salary = 120000 },
        new Employee { Id = 2, Name = "Mouni", Salary = 110000 }
    };

        [HttpGet]
        [Route("index")]
        public IActionResult Index() => View(_data);

        [HttpGet]
        [Route("details/{id}")]
        public IActionResult Details(int id)
        {
            var emp = _data.FirstOrDefault(e => e.Id == id);
            if (emp == null) return NotFound();
            return View(emp);
        }

        [HttpGet]
        [Route("create")]
        public IActionResult Create() => View();

        [HttpPost]
        [Route("create")]
        public IActionResult Create(Employee emp)
        {
            emp.Id = _data.Max(e => e.Id) + 1;
            _data.Add(emp);
            return RedirectToAction("Index");
        }
    }
}
