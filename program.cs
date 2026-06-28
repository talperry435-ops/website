var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://127.0.0.1:5001");
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

string serverValue = "12";
string? storedName = null;

app.MapGet("/", () => Results.File(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/index.html"), "text/html"));
app.MapGet("/about", () => Results.File(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/about.html"), "text/html"));
app.MapGet("/games", () => Results.File(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/games.html"), "text/html"));

app.MapGet("/api/value", getValue);
app.MapPost("/api/name", (NameRequest request) =>
{
    storedName = request.Name;
    return Results.Json(new { name = storedName });
});
app.MapGet("/api/name", () =>
{
    return storedName is null
        ? Results.NotFound()
        : Results.Json(new { name = storedName });
});

app.Run();

IResult getValue()
{
    return Results.Text(serverValue);
}

record NameRequest(string Name);
