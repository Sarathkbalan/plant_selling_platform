using System.Text.Json.Serialization;

namespace PlantApi.Models;

public class Plant
{
    public int Id { get; set; }

    public string Name { get; set; } = "";

    public string Description { get; set; } = "";

    public decimal Price { get; set; }

    public int Stock { get; set; }

    public string ImageUrl { get; set; } = "";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public int CategoryId { get; set; }

    [JsonIgnore]
    public Category? Category { get; set; }
}