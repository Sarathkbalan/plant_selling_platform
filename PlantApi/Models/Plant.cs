using System.ComponentModel.DataAnnotations;

namespace PlantApi.Models;

public class Plant
{
    public int Id { get; set; }

    [Required]
    public string Name { get; set; } = "";

    public string Description { get; set; } = "";

    public decimal Price { get; set; }

    public int Stock { get; set; }

    public string ImageUrl { get; set; } = "";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    [Required]
    public string CategoryName { get; set; } = "";
}