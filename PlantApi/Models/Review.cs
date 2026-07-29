namespace PlantApi.Models;
public class Review
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public User User { get; set; } = null!;

    public int PlantId { get; set; }

    public Plant Plant { get; set; } = null!;

    public int Rating { get; set; }

    public string Comment { get; set; } = "";
}