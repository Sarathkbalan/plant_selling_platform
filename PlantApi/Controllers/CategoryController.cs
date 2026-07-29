using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantApi.Data;
using PlantApi.DTOs;
using PlantApi.Models;

namespace PlantApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CategoryController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET ALL
    [HttpGet]
    public async Task<IActionResult> GetCategories()
    {
        var categories = await _context.Categories.ToListAsync();

        return Ok(categories);
    }

    // GET BY ID
    [HttpGet("{id}")]
    public async Task<IActionResult> GetCategory(int id)
    {
        var category = await _context.Categories.FindAsync(id);

        if (category == null)
            return NotFound();

        return Ok(category);
    }

    // ADD
    [HttpPost]
    public async Task<IActionResult> AddCategory(CategoryDto dto)
    {
        var category = new Category
        {
            Name = dto.Name
        };

        _context.Categories.Add(category);

        await _context.SaveChangesAsync();

        return Ok(category);
    }

    // UPDATE
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCategory(int id, CategoryDto dto)
    {
        var category = await _context.Categories.FindAsync(id);

        if (category == null)
            return NotFound();

        category.Name = dto.Name;

        await _context.SaveChangesAsync();

        return Ok(category);
    }

    // DELETE
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCategory(int id)
    {
        var category = await _context.Categories.FindAsync(id);

        if (category == null)
            return NotFound();

        _context.Categories.Remove(category);

        await _context.SaveChangesAsync();

        return Ok("Category Deleted Successfully");
    }
}