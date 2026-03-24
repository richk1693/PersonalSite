# PersonalSite
richardkern.dev website

This repository contains the source code for [richardkern.dev](https://richardkern.dev), built with a modern React frontend and a robust .NET Web API backend.

## Project Structure

*   **backend/**: A .NET 10.0 Web API project serving data and handling logic.
*   **frontend/**: A React 19 application built with Vite, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:

1.  **[.NET 10.0 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)** (or later).
2.  **[Node.js](https://nodejs.org/)** (LTS version recommended) and npm.
3.  **[Visual Studio Code](https://code.visualstudio.com/)**.
4.  **[C# Dev Kit Extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)** for VS Code (recommended for best debugging experience).

## Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd rkWebsite
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    cd frontend
    npm install
    ```

3.  **Restore Backend Packages:**
    ```bash
    cd backend
    dotnet restore
    ```
    *(Note: VS Code or Visual Studio will typically handle this automatically upon opening).*

## Running the Project (VS Code)

This project is configured for a seamless "Full Stack" debugging experience within VS Code.

1.  Open the `rkWebsite` folder in **VS Code**.
2.  Navigate to the **Run and Debug** view (`Ctrl+Shift+D`).
3.  Select **"Full Stack"** from the dropdown configuration menu.
4.  Press **F5** (or click the green play button).

This task will automatically:
*   Build the .NET backend.
*   Start the Vite development server.
*   Launch the API (Swagger UI available at `http://localhost:5020/swagger`).
*   Launch the frontend in a Chrome window (at `http://localhost:5173`).

### Manual Start

If you prefer running terminals manually:

*   **Backend**:
    ```bash
    cd backend
    dotnet run
    ```
    *Runs on: `http://localhost:5020`*

*   **Frontend**:
    ```bash
    cd frontend
    npm run dev
    ```
    *Runs on: `http://localhost:5173` (proxies `/api` requests to backend port 5020).*

## Development Config

*   **Ports**: Fixed in `backend/Properties/launchSettings.json` (5020) and `frontend/vite.config.ts`.
*   **Debug Profiles**: Configured in `.vscode/launch.json`.
