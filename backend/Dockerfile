# context: . (backend folder)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore as distinct layers
COPY ["PersonalSite.Api.csproj", "."]
RUN dotnet restore "./PersonalSite.Api.csproj"

# Copy everything else and build (being mindful of .dockerignore, but explicitly removing obj/bin to be safe)
COPY . .
# Remove obj and bin from host if they were copied
RUN rm -rf obj bin
RUN dotnet build "PersonalSite.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PersonalSite.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/azure-functions/dotnet-isolated:4-dotnet-isolated8.0 AS final
WORKDIR /home/site/wwwroot
COPY --from=publish /app/publish .
ENV AzureWebJobsScriptRoot=/home/site/wwwroot \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true
