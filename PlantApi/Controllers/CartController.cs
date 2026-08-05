using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlantApi.DTOs;
using PlantApi.Services;
using System.Security.Claims;

namespace PlantApi.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class CartController : ControllerBase
{
    private readonly CartService _cartService;

    public CartController(CartService cartService)
    {
        _cartService = cartService;
    }

    private int GetUserId()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (string.IsNullOrEmpty(userId))
        {
            throw new UnauthorizedAccessException("User is not authenticated.");
        }

        return int.Parse(userId);
    }

    [HttpPost("add")]
    public async Task<IActionResult> Add(AddToCartDto dto)
    {
        try
        {
            await _cartService.AddToCart(GetUserId(), dto);

            return Ok(new
            {
                success = true,
                message = "Plant added to cart."
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                success = false,
                message = ex.Message,
                inner = ex.InnerException?.Message
            });
        }
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var cart = await _cartService.GetCart(GetUserId());

            return Ok(cart);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                success = false,
                message = ex.Message
            });
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, UpdateCartDto dto)
    {
        try
        {
            await _cartService.UpdateQuantity(id, dto.Quantity);

            return Ok(new
            {
                success = true,
                message = "Quantity updated successfully."
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                success = false,
                message = ex.Message
            });
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            await _cartService.RemoveItem(id);

            return Ok(new
            {
                success = true,
                message = "Item removed successfully."
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                success = false,
                message = ex.Message
            });
        }
    }

    [HttpDelete("clear")]
    public async Task<IActionResult> Clear()
    {
        try
        {
            await _cartService.ClearCart(GetUserId());

            return Ok(new
            {
                success = true,
                message = "Cart cleared successfully."
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                success = false,
                message = ex.Message
            });
        }
    }
}