using Microsoft.AspNetCore.Mvc;
using PlantApi.Data;
using PlantApi.DTOs;
using PlantApi.Models;
using PlantApi.Services;

namespace PlantApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly PasswordService _passwordService;
    private readonly JwtService _jwtService;

    public AuthController(
        ApplicationDbContext context,
        PasswordService passwordService,
        JwtService jwtService)
    {
        _context = context;
        _passwordService = passwordService;
        _jwtService = jwtService;
    }

    // ==========================
    // Register
    // ==========================
    [HttpPost("register")]
    public IActionResult Register(RegisterDto dto)
    {
        // Check email
        if (_context.Users.Any(x => x.Email == dto.Email))
            return BadRequest("Email already exists.");

        // Prevent Admin registration
        if (dto.Role == "Admin")
        {
            return BadRequest("Admin registration is not allowed.");
        }

        // Determine approval
        bool isApproved = dto.Role == "Seller" ? false : true;

        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
            PasswordHash = _passwordService.Hash(dto.Password),
            Role = dto.Role,
            IsApproved = isApproved
        };

        _context.Users.Add(user);
        _context.SaveChanges();

        return Ok(new
        {
            message = dto.Role == "Seller"
                ? "Seller registered successfully. Waiting for admin approval."
                : "Registration successful.",
            role = user.Role,
            isApproved = user.IsApproved
        });
    }

    // ==========================
    // Login
    // ==========================
    [HttpPost("login")]
    public IActionResult Login(LoginDto dto)
    {
        var user = _context.Users.FirstOrDefault(x => x.Email == dto.Email);

        if (user == null)
            return Unauthorized("Invalid email or password.");

        if (!_passwordService.Verify(dto.Password, user.PasswordHash))
            return Unauthorized("Invalid email or password.");

        // Seller approval check
        if (user.Role == "Seller" && !user.IsApproved)
        {
            return Unauthorized("Your seller account is waiting for admin approval.");
        }

        var token = _jwtService.GenerateToken(user);

        return Ok(new
        {
            message = "Login Successful",
            token,
            role = user.Role,
            name = user.Name,
            isApproved = user.IsApproved
        });
    }
}