using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantApi.Data;

namespace PlantApi.Controllers;

[ApiController]
[Route("api/[controller]")]
// [Authorize(Roles = "Admin")]
public class AdminController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public AdminController(ApplicationDbContext context)
    {
        _context = context;
    }

    // Get all sellers
    [HttpGet("sellers")]
    public async Task<IActionResult> GetSellers()
    {
        var sellers = await _context.Users
            .Where(u => u.Role == "Seller")
            .Select(u => new
            {
                u.Id,
                u.Name,
                u.Email,
                u.IsApproved
            })
            .ToListAsync();

        return Ok(sellers);
    }

    // Get all customers
    [HttpGet("customers")]
    public async Task<IActionResult> GetCustomers()
    {
        var customers = await _context.Users
            .Where(u => u.Role == "Customer")
            .Select(u => new
            {
                u.Id,
                u.Name,
                u.Email
            })
            .ToListAsync();

        return Ok(customers);
    }
}