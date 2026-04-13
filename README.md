# MAQ Software Website

This repository contains the MAQ Software website - a static HTML website built with Grunt for build automation.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Node.js

This project requires Node.js to run Grunt and manage dependencies. 

**Installation Options:**

1. **Using Homebrew (macOS/Linux):**
   ```bash
   brew install node
   ```

2. **Windows - Using nvm-windows (Node Version Manager for Windows) - Recommended:**
   
   nvm-windows allows you to easily switch between Node.js versions on Windows.
   
   **Steps:**
   - Download the latest installer from [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases)
   - Download `nvm-setup.exe` (the installer version)
   - Run the installer and follow the setup wizard
   - Open a new Command Prompt or PowerShell window
   - Install and use Node.js LTS version:
     ```bash
     nvm install lts
     nvm use lts
     ```

3. **Windows - Direct Installer (Alternative):**
   - Visit [nodejs.org](https://nodejs.org/)
   - Download the Windows Installer (.msi) for the LTS version
   - Run the installer and follow the setup wizard
   - Make sure to check "Add to PATH" during installation
   - Restart your terminal/command prompt after installation

4. **Using nvm (macOS/Linux) - Recommended:**
   ```bash
   # Install nvm
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # Install and use Node.js (LTS version)
   nvm install --lts
   nvm use --lts
   ```

5. **Download from official website (All Platforms):**
   Visit [nodejs.org](https://nodejs.org/) and download the LTS version for your operating system.

**Verify Installation:**
```bash
node --version
npm --version
```

You should see version numbers for both commands. Node.js version 14.x or higher is recommended.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd MAQSoftware
```

### 2. Install Dependencies

Install all required Node.js packages (including Grunt and its plugins):

```bash
npm install
```

This will install the following dependencies:
- `grunt` - Task runner
- `grunt-contrib-cssmin` - CSS minification
- `grunt-contrib-imagemin` - Image optimization
- `grunt-contrib-jshint` - JavaScript linting
- `grunt-contrib-uglify` - JavaScript minification
- `grunt-contrib-nodeunit` - Unit testing

## Running Locally

### Option 1: Using Python's Built-in HTTP Server (Recommended)

**macOS/Linux:**
Python comes pre-installed on macOS and most Linux distributions. This is the simplest way to serve the static files:

```bash
# Python 3
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

**Windows:**
If you have Python installed on Windows:

```bash
# Python 3
python -m http.server 8000

# Or if python3 is in your PATH
python3 -m http.server 8000
```

**Note:** If Python is not installed on Windows, you can download it from [python.org](https://www.python.org/downloads/) or use one of the other options below.

Then open your browser and navigate to:
```
http://localhost:8000
```

### Option 2: Using Node.js http-server (Works on All Platforms)

Install `http-server` globally:
```bash
npm install -g http-server
```

Then run:
```bash
http-server -p 8000
```

Access the site at `http://localhost:8000`

**Note:** This option works well on Windows, macOS, and Linux. It's a good alternative if Python is not available.

### Option 3: Using PHP's Built-in Server

If you have PHP installed:
```bash
php -S localhost:8000
```

## Grunt Commands

This project uses Grunt for build automation. The following tasks are available:

### Run All Build Tasks (Default)

```bash
grunt
```

or

```bash
grunt default
```

This runs all tasks in sequence:
- **uglify** - Minifies JavaScript files
- **cssmin** - Minifies and combines CSS files
- **imagemin** - Optimizes images
- **jshint** - Lints JavaScript files

### Individual Tasks

You can run individual Grunt tasks:

```bash
# Minify JavaScript files
grunt uglify

# Minify and combine CSS files
grunt cssmin

# Optimize images
grunt imagemin

# Lint JavaScript files
grunt jshint
```

### Available Grunt Tasks

- **`uglify`** - Minifies JavaScript files in the `js/` directory:
  - Creates `.min.js` versions of all JavaScript files
  - Outputs to the same `js/` directory

- **`cssmin`** - Minifies and combines CSS files:
  - Combines multiple CSS files into `css/core.min.css`
  - Includes: timber.css, avalanche.css, summit.css, snowbridge.css, horizon.css, templates.css

- **`imagemin`** - Optimizes images:
  - Processes all PNG, JPG, and GIF files in the `images/` directory
  - Optimizes images in place

- **`jshint`** - JavaScript linting:
  - Validates JavaScript files for code quality and potential errors
  - Checks files in the `js/` directory

## Project Structure

```
MAQSoftware/
├── index.html          # Main homepage
├── *.html              # Other HTML pages
├── css/                # Stylesheets
├── js/                 # JavaScript files
├── images/             # Image assets
├── Gruntfile.js        # Grunt configuration
├── package.json        # Node.js dependencies
└── README.md           # This file
```

## Development Workflow

1. **Make changes** to HTML, CSS, or JavaScript files
2. **Run Grunt** to build/minify assets:
   ```bash
   grunt
   ```
3. **Start a local server** to preview changes:
   ```bash
   python3 -m http.server 8000
   ```
4. **Open browser** to `http://localhost:8000` to view the site

## Troubleshooting

### npm install fails
- Ensure you have Node.js and npm installed correctly
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

### Grunt command not found
- Ensure dependencies are installed: `npm install`
- Try running with npx: `npx grunt`

### Port 8000 already in use
- Use a different port: `python3 -m http.server 8080`
- Or stop the process using port 8000

## Additional Notes

- The website is a static site - no backend server is required
- All build artifacts (minified files) are generated in the same directories as source files
- Make sure to run `grunt` before committing changes if you've modified JavaScript or CSS files
