using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantApi.Data;
using PlantApi.DTOs;
using PlantApi.Models;

namespace PlantApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlantController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IWebHostEnvironment _environment;

    public PlantController(ApplicationDbContext context, IWebHostEnvironment environment)
    {
        _context = context;
        _environment = environment;
    }

    // GET: api/plant
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Plant>>> GetPlants()
    {
        var plants = await _context.Plants
            .Include(p => p.Category)
            .ToListAsync();

        return Ok(plants);
    }

    // GET: api/plant/1
    [HttpGet("{id}")]
    public async Task<ActionResult<Plant>> GetPlant(int id)
    {
        var plant = await _context.Plants
            .Include(p => p.Category)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (plant == null)
            return NotFound("Plant not found.");

        return Ok(plant);
    }

    // POST: api/plant
    [HttpPost]
public async Task<IActionResult> AddPlant([FromForm] PlantDto dto)
{
    Console.WriteLine("===== AddPlant Called =====");
    Console.WriteLine(dto.Name);
    Console.WriteLine(dto.Image?.FileName);

    var category = await _context.Categories.FindAsync(dto.CategoryId);

    if (category == null)
    {
        Console.WriteLine("Invalid Category");
        return BadRequest("Invalid Category.");
    }

    string imagePath = "";

    if (dto.Image != null)
    {
        var uploadsFolder = Path.Combine(_environment.WebRootPath, "uploads");

        if (!Directory.Exists(uploadsFolder))
            Directory.CreateDirectory(uploadsFolder);

        var fileName = Guid.NewGuid() + Path.GetExtension(dto.Image.FileName);
        var filePath = Path.Combine(uploadsFolder, fileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await dto.Image.CopyToAsync(stream);
        }

        imagePath = "/uploads/" + fileName;
    }

    var plant = new Plant
    {
        Name = dto.Name,
        Description = dto.Description,
        Price = dto.Price,
        Stock = dto.Stock,
        CategoryId = dto.CategoryId,
        ImageUrl = imagePath
    };

    _context.Plants.Add(plant);
    await _context.SaveChangesAsync();

    Console.WriteLine("Plant Saved Successfully");

    return Ok(plant);
}
    // PUT: api/plant/1
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePlant(int id, [FromForm] PlantDto dto)
    {
        var plant = await _context.Plants.FindAsync(id);

        if (plant == null)
            return NotFound("Plant not found.");

        var category = await _context.Categories.FindAsync(dto.CategoryId);

        if (category == null)
            return BadRequest("Invalid Category.");

        plant.Name = dto.Name;
        plant.Description = dto.Description;
        plant.Price = dto.Price;
        plant.Stock = dto.Stock;
        plant.CategoryId = dto.CategoryId;

        if (dto.Image != null)
        {
            var uploadsFolder = Path.Combine(_environment.WebRootPath, "uploads");

            if (!Directory.Exists(uploadsFolder))
                Directory.CreateDirectory(uploadsFolder);

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(dto.Image.FileName);

            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await dto.Image.CopyToAsync(stream);
            }

            plant.ImageUrl = "/uploads/" + fileName;
        }

        await _context.SaveChangesAsync();

        return Ok(plant);
    }

    // DELETE: api/plant/1
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePlant(int id)
    {
        var plant = await _context.Plants.FindAsync(id);

        if (plant == null)
            return NotFound("Plant not found.");

        _context.Plants.Remove(plant);
        await _context.SaveChangesAsync();

        return Ok(new
        {
            message = "Plant deleted successfully."
        });
    }
}