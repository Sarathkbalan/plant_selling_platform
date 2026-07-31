// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;
// using System.Security.Claims;
// using PlantApi.DTOs;
// using PlantApi.Services;

// namespace PlantApi.Controllers;

// [ApiController]
// [Route("api/[controller]")]
// // [Authorize]
// public class CartController : ControllerBase
// {
//     private readonly CartService _cartService;

//     public CartController(CartService cartService)
//     {
//         _cartService = cartService;
//     }

//     private int GetUserId()
//     {
//         return int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
//     }

//     [HttpPost("add")]
//     public async Task<IActionResult> Add(AddToCartDto dto)
//     {
//         await _cartService.AddToCart(GetUserId(), dto);

//         return Ok(new
//         {
//             message = "Added to cart"
//         });
//     }

//     [HttpGet]
//     public async Task<IActionResult> Get()
//     {
//         return Ok(await _cartService.GetCart(GetUserId()));
//     }

//     [HttpPut("{id}")]
//     public async Task<IActionResult> Update(int id, UpdateCartDto dto)
//     {
//         await _cartService.UpdateQuantity(id, dto.Quantity);

//         return Ok(new
//         {
//             message = "Quantity Updated"
//         });
//     }

//     [HttpDelete("{id}")]
//     public async Task<IActionResult> Delete(int id)
//     {
//         await _cartService.RemoveItem(id);

//         return Ok(new
//         {
//             message = "Item Removed"
//         });
//     }

//     [HttpDelete("clear")]
//     public async Task<IActionResult> Clear()
//     {
//         await _cartService.ClearCart(GetUserId());

//         return Ok(new
//         {
//             message = "Cart Cleared"
//         });
//     }
// }

using Microsoft.AspNetCore.Mvc;
using PlantApi.DTOs;
using PlantApi.Services;

namespace PlantApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly CartService _cartService;

    public CartController(CartService cartService)
    {
        _cartService = cartService;
    }

    // Temporary user id for testing
    private int GetUserId()
    {
        return 1;
    }

    [HttpPost("add")]
    public async Task<IActionResult> Add(AddToCartDto dto)
    {
        await _cartService.AddToCart(GetUserId(), dto);

        return Ok(new
        {
            message = "Added to cart"
        });
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await _cartService.GetCart(GetUserId()));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, UpdateCartDto dto)
    {
        await _cartService.UpdateQuantity(id, dto.Quantity);

        return Ok(new
        {
            message = "Quantity Updated"
        });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _cartService.RemoveItem(id);

        return Ok(new
        {
            message = "Item Removed"
        });
    }

    [HttpDelete("clear")]
    public async Task<IActionResult> Clear()
    {
        await _cartService.ClearCart(GetUserId());

        return Ok(new
        {
            message = "Cart Cleared"
        });
    }
}