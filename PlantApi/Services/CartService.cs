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

    public async Task AddToCart(int userId, AddToCartDto dto)
    {
        var cart = await _context.Carts
            .Include(c => c.CartItems)
            .FirstOrDefaultAsync(c => c.UserId == userId);

        if (cart == null)
        {
            cart = new Cart
            {
                UserId = userId
            };

            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();
        }

        var item = cart.CartItems
            .FirstOrDefault(x => x.PlantId == dto.PlantId);

        if (item != null)
        {
            item.Quantity += dto.Quantity;
        }
        else
        {
            cart.CartItems.Add(new CartItem
            {
                PlantId = dto.PlantId,
                Quantity = dto.Quantity
            });
        }

        await _context.SaveChangesAsync();
    }

    public async Task<List<CartResponseDto>> GetCart(int userId)
    {
        var cart = await _context.Carts
            .Include(c => c.CartItems)
            .ThenInclude(ci => ci.Plant)
            .FirstOrDefaultAsync(c => c.UserId == userId);

        if (cart == null)
            return new List<CartResponseDto>();

        return cart.CartItems.Select(x => new CartResponseDto
        {
            CartItemId = x.Id,
            PlantId = x.PlantId,
            PlantName = x.Plant.Name,
            Price = x.Plant.Price,
            Quantity = x.Quantity
        }).ToList();
    }

    public async Task UpdateQuantity(int cartItemId, int quantity)
    {
        var item = await _context.CartItems.FindAsync(cartItemId);

        if (item == null)
            return;

        item.Quantity = quantity;

        await _context.SaveChangesAsync();
    }

    public async Task RemoveItem(int cartItemId)
    {
        var item = await _context.CartItems.FindAsync(cartItemId);

        if (item == null)
            return;

        _context.CartItems.Remove(item);

        await _context.SaveChangesAsync();
    }

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