namespace PersonalSite.Api.Models;

public record Experience(
    string Company,
    string Title,
    string StartDate,
    string? EndDate,
    string Location,
    string[] Highlights
);

public record Skill(string Category, string[] Items);

public record Project(
    string Name,
    string Description,
    string[] Technologies,
    string? GitHubUrl,
    string? LiveUrl
);

public record Education(
    string Institution,
    string Degree,
    string Field,
    string GraduationYear,
    string Location
);

public record Resume(
    string Name,
    string Title,
    string Email,
    string Phone,
    string Location,
    string LinkedIn,
    string GitHub,
    string Summary,
    Experience[] Experience,
    Skill[] Skills,
    Project[] Projects,
    Education[] Education
);
