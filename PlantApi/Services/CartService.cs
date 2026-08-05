// using Microsoft.EntityFrameworkCore;
// using PlantApi.Data;
// using PlantApi.DTOs;
// using PlantApi.Models;

// namespace PlantApi.Services;

// public class CartService
// {
//     private readonly ApplicationDbContext _context;

//     public CartService(ApplicationDbContext context)
//     {
//         _context = context;
//     }

//     public async Task AddToCart(int userId, AddToCartDto dto)
//     {
//         var cart = await _context.Carts
//             .Include(c => c.CartItems)
//             .FirstOrDefaultAsync(c => c.UserId == userId);

//         if (cart == null)
//         {
//             cart = new Cart
//             {
//                 UserId = userId
//             };

//             _context.Carts.Add(cart);
//             await _context.SaveChangesAsync();
//         }

//         var item = cart.CartItems
//             .FirstOrDefault(x => x.PlantId == dto.PlantId);

//         if (item != null)
//         {
//             item.Quantity += dto.Quantity;
//         }
//         else
//         {
//             cart.CartItems.Add(new CartItem
//             {
//                 PlantId = dto.PlantId,
//                 Quantity = dto.Quantity
//             });
//         }

//         await _context.SaveChangesAsync();
//     }

//     public async Task<List<CartResponseDto>> GetCart(int userId)
//     {
//         var cart = await _context.Carts
//             .Include(c => c.CartItems)
//             .ThenInclude(ci => ci.Plant)
//             .FirstOrDefaultAsync(c => c.UserId == userId);

//         if (cart == null)
//             return new List<CartResponseDto>();

//         return cart.CartItems.Select(x => new CartResponseDto
//     {
//         CartItemId = x.Id,
//         PlantId = x.PlantId,
//         PlantName = x.Plant.Name,
//         ImageUrl = x.Plant.ImageUrl,   // <-- Add this line
//         Price = x.Plant.Price,
//         Quantity = x.Quantity
//     }).ToList();
//     }

//     public async Task UpdateQuantity(int cartItemId, int quantity)
//     {
//         var item = await _context.CartItems.FindAsync(cartItemId);

//         if (item == null)
//             return;

//         item.Quantity = quantity;

//         await _context.SaveChangesAsync();
//     }

//     public async Task RemoveItem(int cartItemId)
//     {
//         var item = await _context.CartItems.FindAsync(cartItemId);

//         if (item == null)
//             return;

//         _context.CartItems.Remove(item);

//         await _context.SaveChangesAsync();
//     }

//     public async Task ClearCart(int userId)
//     {
//         var cart = await _context.Carts
//             .Include(c => c.CartItems)
//             .FirstOrDefaultAsync(c => c.UserId == userId);

//         if (cart == null)
//             return;

//         _context.CartItems.RemoveRange(cart.CartItems);

//         await _context.SaveChangesAsync();
//     }
// }
using Microsoft.EntityFrameworkCore;
using PlantApi.Data;
using PlantApi.DTOs;
using PlantApi.Models;

namespace PlantApi.Services;

public class CartService
{
    private readonly ApplicationDbContext _context;

    public CartService(ApplicationDbContext context)
    {
        _context = context;
    }

    // ===========================
    // Add Item to Cart
    // ===========================
  public async Task AddToCart(int userId, AddToCartDto dto)
{
    Console.WriteLine($"UserId: {userId}");
    Console.WriteLine($"PlantId: {dto.PlantId}");
    Console.WriteLine($"Quantity: {dto.Quantity}");

    var plant = await _context.Plants.FindAsync(dto.PlantId);

    if (plant == null)
        throw new Exception($"Plant with Id {dto.PlantId} not found.");

    var cart = await _context.Carts
        .Include(c => c.CartItems)
        .FirstOrDefaultAsync(c => c.UserId == userId);

    if (cart == null)
    {
        Console.WriteLine("Creating new cart...");

        cart = new Cart
        {
            UserId = userId,
            CartItems = new List<CartItem>()
        };

        _context.Carts.Add(cart);
        await _context.SaveChangesAsync();
    }

    var item = cart.CartItems.FirstOrDefault(c => c.PlantId == dto.PlantId);

    if (item != null)
    {
        item.Quantity += dto.Quantity;
    }
    else
    {
        cart.CartItems.Add(new CartItem
        {
            CartId = cart.Id,
            PlantId = dto.PlantId,
            Quantity = dto.Quantity
        });
    }

    await _context.SaveChangesAsync();
}

    // ===========================
    // Get Cart
    // ===========================
    public async Task<List<CartResponseDto>> GetCart(int userId)
    {
        var cart = await _context.Carts
            .Include(c => c.CartItems)
            .ThenInclude(ci => ci.Plant)
            .FirstOrDefaultAsync(c => c.UserId == userId);

        if (cart == null)
            return new List<CartResponseDto>();

        return cart.CartItems.Select(item => new CartResponseDto
        {
            CartItemId = item.Id,
            PlantId = item.PlantId,
            PlantName = item.Plant.Name,
            ImageUrl = item.Plant.ImageUrl,
            Price = item.Plant.Price,
            Quantity = item.Quantity
        }).ToList();
    }

    // ===========================
    // Update Quantity
    // ===========================
    public async Task UpdateQuantity(int cartItemId, int quantity)
    {
        var item = await _context.CartItems.FindAsync(cartItemId);

        if (item == null)
            throw new Exception("Cart item not found.");

        item.Quantity = quantity;

        await _context.SaveChangesAsync();
    }

    // ===========================
    // Remove Item
    // ===========================
    public async Task RemoveItem(int cartItemId)
    {
        var item = await _context.CartItems.FindAsync(cartItemId);

        if (item == null)
            throw new Exception("Cart item not found.");

        _context.CartItems.Remove(item);

        await _context.SaveChangesAsync();
    }

    // ===========================
    // Clear Cart
    // ===========================
    public async Task ClearCart(int userId)
    {
        var cart = await _context.Carts
            .Include(c => c.CartItems)
            .FirstOrDefaultAsync(c => c.UserId == userId);

        if (cart == null)
            return;

        _context.CartItems.RemoveRange(cart.CartItems);

        await _context.SaveChangesAsync();
    }
}