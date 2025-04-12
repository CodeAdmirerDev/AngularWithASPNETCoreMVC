using DemoASPNETCoreMVCApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace DemoASPNETCoreMVCApp.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            var emps = new List<Employee>
        {
            new Employee { Id = 1, Name = "Suri", Salary = 120000 },
            new Employee { Id = 2, Name = "Mouni", Salary = 100000 }
        };
            return View(emps); // Pass data to View
        }
    }
}
