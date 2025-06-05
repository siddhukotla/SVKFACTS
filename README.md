# SVKFACTS / FactFlow

This is a Next.js application called FactFlow, with the brand name SVKFACTS. It displays interesting facts, one per page, along with advertisements.

## Features

- Displays 500 unique facts, one per page.
- Each page features 9 unique advertisements.
- Persistent header with navigation to About Us, Contact Us, and Privacy Policy pages.
- "NEXT_FACT" button for sequential navigation with full page reloads.
- Custom themed UI with specific fonts and colors.

## Running the project in VSCode

1.  **Clone the repository.**
    If you haven't already, clone the project to your local machine.

2.  **Install dependencies:**
    Open a terminal in VSCode (you can use the integrated terminal: `Ctrl+\`` or `Terminal > New Terminal`).
    Navigate to the project directory and run:
    ```bash
    npm install
    ```

3.  **Set up environment variables (if necessary):**
    If your project uses features requiring API keys (e.g., for AI services if you add them later), you might need to set them up.
    Create a `.env.local` file in the root of the project (alongside `package.json`).
    Add any necessary environment variables to this file, for example:
    ```
    # EXAMPLE_API_KEY=your_api_key_here
    ```

4.  **Run the Next.js development server:**
    In the VSCode terminal, ensure you are in the project's root directory and run:
    ```bash
    npm run dev
    ```
    This command will start the Next.js application. By default (as per the `package.json` in this project), it usually runs on `http://localhost:9002`. Check your terminal output for the exact URL.

5.  **Access the application:**
    Open your web browser and navigate to the URL provided by the `npm run dev` command (e.g., `http://localhost:9002`). You should see the SVKFACTS website.

You should now have the Next.js frontend running locally. If you decide to add AI features using Genkit in the future, you will need to run the Genkit development server as well.
```
