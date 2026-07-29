namespace PlantApi.Models;
public class OrderItem
{
    public int Id { get; set; }

    public int OrderId { get; set; }

    public Order Order { get; set; } = null!;

    public int PlantId { get; set; }

    public Plant Plant { get; set; } = null!;

    public int Quantity { get; set; }

    public decimal Price { get; set; }
}