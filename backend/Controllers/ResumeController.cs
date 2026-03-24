using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.AspNetCore.Http;
using PersonalSite.Api.Models;

namespace PersonalSite.Api.Controllers;

public class ResumeFunction
{
    [Function("Resume")]
    public IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "resume")] HttpRequest req)
    {
        var resume = new Resume(
            Name: "Richard Kern",
            Title: "Software Engineer",
            Email: "richard@richardkern.dev",
            Phone: "(440) 555-0123",
            Location: "Cleveland, OH",
            LinkedIn: "https://linkedin.com/in/richardkern",
            GitHub: "https://github.com/richk1693",
            Summary: "Passionate software engineer with experience building scalable web applications and APIs. Dedicated to crafting clean, maintainable code and delivering exceptional user experiences. Based in Cleveland, OH and open to both local and remote opportunities.",
            Experience:
            [
                new Experience(
                    Company: "Tech Company Cleveland",
                    Title: "Senior Software Engineer",
                    StartDate: "Jan 2022",
                    EndDate: null,
                    Location: "Cleveland, OH",
                    Highlights:
                    [
                        "Architected and delivered microservices using .NET and React, reducing deployment time by 40%",
                        "Led a team of 4 engineers to redesign the customer-facing portal, improving user retention by 25%",
                        "Implemented CI/CD pipelines with GitHub Actions, cutting release cycles from monthly to weekly",
                        "Mentored junior developers through code reviews and pair programming sessions"
                    ]
                ),
                new Experience(
                    Company: "Midwest Software Solutions",
                    Title: "Software Engineer",
                    StartDate: "Jun 2019",
                    EndDate: "Dec 2021",
                    Location: "Cleveland, OH",
                    Highlights:
                    [
                        "Built RESTful APIs in C# ASP.NET Core consumed by Angular and React frontends",
                        "Optimized SQL Server queries reducing report generation time from 30s to under 2s",
                        "Collaborated with product and design teams using Agile/Scrum methodologies",
                        "Integrated third-party payment processing and authentication services"
                    ]
                )
            ],
            Skills:
            [
                new Skill("Languages", ["C#", "TypeScript", "JavaScript", "SQL", "Python", "Java"]),
                new Skill("Frontend", ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Angular"]),
                new Skill("Backend", ["ASP.NET Core", "Node.js", "RESTful APIs", "SignalR"]),
                new Skill("Databases", ["SQL Server", "PostgreSQL", "Redis", "MongoDB", "MySQL"]),
                new Skill("Cloud & DevOps", ["Azure", "Docker", "GitHub Actions", "CI/CD", "Jenkins"]),
                new Skill("Tools", ["Claude Code", "Git", "Visual Studio", "VS Code", "Jira", "Figma", "IntelliJ IDEA", "Azure DevOps"])
            ],
            Projects:
            [
                new Project(
                    Name: "richardkern.dev",
                    Description: "This personal website — a full-stack application built with ASP.NET Core and React. Serves as a resume site and platform for hosting toy project APIs.",
                    Technologies: ["C#", "ASP.NET Core", "React", "TypeScript", "Tailwind CSS"],
                    GitHubUrl: "https://github.com/richk1693/PersonalSite",
                    LiveUrl: "https://richardkern.dev"
                ),
                new Project(
                    Name: "Cleveland Weather Dashboard",
                    Description: "A real-time weather dashboard for the Cleveland area featuring historical trends, alerts, and a 7-day forecast with interactive charts.",
                    Technologies: ["React", "TypeScript", "C#", "Azure Functions", "Chart.js"],
                    GitHubUrl: "https://github.com/richk1693/cleveland-weather",
                    LiveUrl: null
                )
            ],
            Education:
            [
                new Education(
                    Institution: "Cleveland State University",
                    Degree: "Bachelor of Science",
                    Field: "Computer Science",
                    GraduationYear: "2019",
                    Location: "Cleveland, OH"
                )
            ]
        );

        return new OkObjectResult(resume);
    }
}
