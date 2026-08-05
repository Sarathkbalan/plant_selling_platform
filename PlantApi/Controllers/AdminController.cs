// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using PlantApi.Data;

// namespace PlantApi.Controllers;

// [ApiController]
// [Route("api/[controller]")]
// [Authorize(Roles = "Admin")]
// public class AdminController : ControllerBase
// {
//     private readonly ApplicationDbContext _context;

//     public AdminController(ApplicationDbContext context)
//     {
//         _context = context;
//     }

//     // Get all sellers
//     [HttpGet("sellers")]
//     public async Task<IActionResult> GetSellers()
//     {
//         var sellers = await _context.Users
//             .Where(u => u.Role == "Seller")
//             .Select(u => new
//             {
//                 u.Id,
//                 u.Name,
//                 u.Email,
//                 u.IsApproved
//             })
//             .ToListAsync();

//         return Ok(sellers);
//     }

//     // Get all customers
//     [HttpGet("customers")]
//     public async Task<IActionResult> GetCustomers()
//     {
//         var customers = await _context.Users
//             .Where(u => u.Role == "Customer")
//             .Select(u => new
//             {
//                 u.Id,
//                 u.Name,
//                 u.Email
//             })
//             .ToListAsync();

//         return Ok(customers);
//     }

//     // Approve Seller
//     [HttpPut("approve/{id}")]
//     public async Task<IActionResult> ApproveSeller(int id)
//     {
//         var seller = await _context.Users.FindAsync(id);

//         if (seller == null)
//             return NotFound("Seller not found.");

//         if (seller.Role != "Seller")
//             return BadRequest("User is not a seller.");

//         seller.IsApproved = true;

//         await _context.SaveChangesAsync();

//         return Ok(new
//         {
//             message = "Seller approved successfully."
//         });
//     }

//     // Reject Seller
//     [HttpPut("reject/{id}")]
//     public async Task<IActionResult> RejectSeller(int id)
//     {
//         var seller = await _context.Users.FindAsync(id);

//         if (seller == null)
//             return NotFound("Seller not found.");

//         if (seller.Role != "Seller")
//             return BadRequest("User is not a seller.");

//         seller.IsApproved = false;

//         await _context.SaveChangesAsync();

//         return Ok(new
//         {
//             message = "Seller approval removed."
//         });
//     }
// }
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantApi.Data;

namespace PlantApi.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "admin")]
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

    // Get pending seller requests
    [HttpGet("pending-sellers")]
    public async Task<IActionResult> GetPendingSellers()
    {
        var sellers = await _context.Users
            .Where(u => u.Role == "Seller" && !u.IsApproved)
            .Select(u => new
            {
                u.Id,
                u.Name,
                u.Email,
                Status = "Pending"
            })
            .ToListAsync();

        return Ok(sellers);
    }

    // Get customers
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

    // Approve seller
    [HttpPut("approve/{id}")]
    public async Task<IActionResult> ApproveSeller(int id)
    {
        var seller = await _context.Users.FindAsync(id);

        if (seller == null)
            return NotFound(new { message = "Seller not found." });

        if (seller.Role != "Seller")
            return BadRequest(new { message = "User is not a seller." });

        if (seller.IsApproved)
            return BadRequest(new { message = "Seller is already approved." });

        seller.IsApproved = true;

        await _context.SaveChangesAsync();

        return Ok(new
        {
            message = "Seller approved successfully."
        });
    }
    [HttpDelete("seller/{id}")]
public async Task<IActionResult> DeleteSeller(int id)
{
    var seller = await _context.Users
        .FirstOrDefaultAsync(x => x.Id == id && x.Role == "seller");

    if (seller == null)
        return NotFound();

    _context.Users.Remove(seller);
    await _context.SaveChangesAsync();

    return Ok(new { message = "Seller deleted successfully." });
}

    // Reject seller
    [HttpPut("reject/{id}")]
    public async Task<IActionResult> RejectSeller(int id)
    {
        var seller = await _context.Users.FindAsync(id);

        if (seller == null)
            return NotFound(new { message = "Seller not found." });

        if (seller.Role != "Seller")
            return BadRequest(new { message = "User is not a seller." });

        seller.IsApproved = false;

        await _context.SaveChangesAsync();

        return Ok(new
        {
            message = "Seller approval removed."
        });
    }
}