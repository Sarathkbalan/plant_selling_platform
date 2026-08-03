namespace PlantApi.Models;
public class User
{
    public int Id { get; set; }

    public string Name { get; set; } = "";

    public string Email { get; set; } = "";

    public string PasswordHash { get; set; } = "";

    // Customer | Seller | Admin
    public string Role { get; set; } = "Customer";

    public bool IsApproved { get; set; } = false;

    public ICollection<Order> Orders { get; set; } = new List<Order>();

    public Cart? Cart { get; set; }

    public ICollection<Review> Reviews { get; set; } = new List<Review>();
}