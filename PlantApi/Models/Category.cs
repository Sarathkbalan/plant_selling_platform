using System.Text.Json.Serialization;

namespace PlantApi.Models;

public class Category
{
    public int Id { get; set; }

    public string Name { get; set; } = "";

    [JsonIgnore]
    public ICollection<Plant> Plants { get; set; } = new List<Plant>();
}