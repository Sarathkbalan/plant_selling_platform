public class CartResponseDto
{
    public int CartItemId { get; set; }
    public int PlantId { get; set; }
    public string PlantName { get; set; }
    public string ImageUrl { get; set; }
    public decimal Price { get; set; }
    public int Quantity { get; set; }

    public decimal Total => Price * Quantity;
}