using System.ComponentModel.DataAnnotations;

namespace PlantApi.Models;

public class CartItem
{
    [Key]
    public int Id { get; set; }

    public int CartId { get; set; }

    public Cart Cart { get; set; }

    public int PlantId { get; set; }

    public Plant Plant { get; set; }

    public int Quantity { get; set; }
}