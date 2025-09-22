# KYD Labs Lending Pool - Local Development Setup

A modern React application with Three.js floating image backgrounds, lending pool dashboards, and interactive UI components. This guide will help you set up the project locally from scratch.

## 📋 What You'll Need

Before we start, you'll need to install some software on your computer:

### 1. Node.js (JavaScript Runtime)
- **What it is**: Software that lets you run JavaScript on your computer
- **Download**: Go to [nodejs.org](https://nodejs.org/)
- **Which version**: Download the **LTS** version (recommended for most users)
- **Installation**: Run the installer and follow the prompts

### 2. Code Editor (Optional but Recommended)
- **VS Code**: Free, powerful editor - [code.visualstudio.com](https://code.visualstudio.com/)
- **Alternative**: Any text editor works, but VS Code has great React support

### 3. Git (Version Control)
- **What it is**: Tool for managing code versions
- **Download**: [git-scm.com](https://git-scm.com/)
- **Installation**: Run installer with default settings

## 🚀 Quick Start Guide

### Step 1: Extract the Project
1. Find the downloaded `kyd-lending-pool.zip` file
2. Right-click and select "Extract All" (Windows) or double-click (Mac)
3. Choose a location like your Desktop or Documents folder

### Step 2: Open Terminal/Command Prompt
- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type "terminal", press Enter
- **Alternative**: In VS Code, go to `Terminal` > `New Terminal`

### Step 3: Navigate to Your Project
```bash
# Replace "path/to/your/project" with the actual path
cd path/to/your/project/kyd-lending-pool

# Example paths:
# Windows: cd C:\Users\YourName\Desktop\kyd-lending-pool
# Mac: cd /Users/YourName/Desktop/kyd-lending-pool
```

### Step 4: Install Dependencies
```bash
# This downloads all the required packages
npm install
```
*This might take 2-5 minutes. You'll see lots of text scroll by - this is normal!*

### Step 5: Start the Development Server
```bash
# This starts your local server
npm run dev
```

### Step 6: View Your Application
1. Look for a message like: `Local: http://localhost:5173/`
2. Open your web browser
3. Go to `http://localhost:5173/`
4. You should see your KYD Labs application!

## 📁 Project Structure

```
kyd-lending-pool/
├── README.md                     # This file
├── package.json                  # Project configuration
├── index.html                    # Main HTML file
├── vite.config.ts               # Build tool configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Styling configuration
├── App.tsx                      # Main application component
├── DashboardPage.tsx            # Dashboard page
├── BackgroundEffectsTestPage.tsx # Three.js test page
├── components/                  # Reusable components
│   ├── NavBar.tsx              # Navigation bar
│   ├── HeadlineSection.tsx     # Hero section
│   ├── FloatingImageGrid.tsx   # Three.js background
│   ├── LendingPoolOptions.tsx  # Pool options
│   ├── DashboardNavBar.tsx     # Dashboard navigation
│   ├── PoolMetrics.tsx         # Pool statistics
│   ├── DepositSection.tsx      # Deposit interface
│   └── ui/                     # UI library components
├── imports/                    # Figma imports and SVGs
├── styles/                     # CSS and styling
│   └── globals.css            # Global styles
└── guidelines/                 # Development guidelines
    └── Guidelines.md          # Project guidelines
```

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for TypeScript errors
npm run type-check

# Install a new package
npm install package-name

# Stop the server
# Press Ctrl+C in the terminal
```

## 🎨 Key Features

### 1. Three.js Floating Image Grid
- **File**: `components/FloatingImageGrid.tsx`
- **What it does**: Creates an interactive background with floating images
- **Technologies**: Three.js, WebGL
- **Features**: Mouse interaction, lazy loading, performance optimization

### 2. Responsive Dashboard
- **Files**: `DashboardPage.tsx`, `components/Dashboard*.tsx`
- **What it does**: Shows lending pool metrics and deposit interface
- **Features**: Coin selection, wallet integration UI, animated metrics

### 3. Landing Page
- **Files**: `App.tsx`, `components/HeadlineSection.tsx`
- **What it does**: Main marketing page with hero section
- **Features**: Animated CTAs, responsive design

## 🔧 Customization

### Changing Colors
Edit `styles/globals.css` to modify the color scheme:
```css
:root {
  --background: #000000;    /* Main background */
  --foreground: #ffffff;    /* Text color */
  --primary: #030213;       /* Primary brand color */
}
```

### Modifying the Three.js Background
Edit `components/FloatingImageGrid.tsx`:
- `imageUrls` array: Replace with your own images
- `driftIntensity`: Control how much images move
- `hoverScale`: How much images grow on hover

### Adding New Pages
1. Create a new `.tsx` file (e.g., `NewPage.tsx`)
2. Add navigation logic in `App.tsx`
3. Import and use your new component

## 🐛 Troubleshooting

### "Command not found" errors
- **Problem**: Node.js or npm not installed correctly
- **Solution**: Reinstall Node.js from [nodejs.org](https://nodejs.org/)

### Port already in use
- **Problem**: Another app is using port 5173
- **Solution**: 
  ```bash
  # Kill the process using the port
  npx kill-port 5173
  # Or use a different port
  npm run dev -- --port 3000
  ```

### Images not loading
- **Problem**: Three.js images failing to load
- **Solution**: Check your internet connection; images load from external URLs

### TypeScript errors
- **Problem**: Red squiggly lines in code
- **Solution**: Run `npm run type-check` to see detailed errors

### Build fails
- **Problem**: `npm run build` shows errors
- **Solution**: 
  1. Delete `node_modules` folder
  2. Run `npm install` again
  3. Try building again

## 📦 Dependencies

### Core Technologies
- **React 18**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool
- **Tailwind CSS v4**: Utility-first styling

### Special Libraries
- **Three.js**: 3D graphics and WebGL
- **Lucide React**: Modern icons
- **Motion/React**: Smooth animations
- **shadcn/ui**: High-quality UI components

## 🚀 Deployment

### Build for Production
```bash
npm run build
```
This creates a `dist` folder with optimized files.

### Deploy Options
1. **Vercel** (Recommended): Connect your GitHub repo
2. **Netlify**: Drag and drop the `dist` folder
3. **GitHub Pages**: Push to a repository

## 💡 Learning Resources

### If you're new to React:
- [Official React Tutorial](https://react.dev/learn)
- [React Beginner's Guide](https://www.freecodecamp.org/news/react-beginner-guide/)

### If you're new to TypeScript:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript for React](https://react-typescript-cheatsheet.netlify.app/)

### If you're new to Three.js:
- [Three.js Journey](https://threejs-journey.com/)
- [Three.js Documentation](https://threejs.org/docs/)

## 🔄 Making Changes

### Basic Workflow
1. Make changes to your files
2. Save the file (Ctrl+S / Cmd+S)
3. Check your browser - changes appear automatically!
4. If something breaks, check the terminal for error messages

### Git Workflow (Advanced)
```bash
# Check what files changed
git status

# Add files to staging
git add .

# Commit your changes
git commit -m "Describe what you changed"

# Push to remote repository (if you have one)
git push
```

## 🆘 Getting Help

1. **Check the terminal**: Error messages usually tell you what's wrong
2. **Google the error**: Copy/paste error messages into Google
3. **Check the documentation**: Links provided in Learning Resources
4. **Stack Overflow**: Great for specific coding questions

## 📝 Notes for Beginners

- **Don't panic**: Coding involves lots of trial and error
- **Save often**: Get in the habit of saving your work frequently
- **Read error messages**: They're usually helpful, not scary
- **Start small**: Make one small change at a time
- **Use version control**: Commit your working code before experimenting

---

**Happy coding!** 🎉

This project is a great foundation for learning modern web development with React, TypeScript, and Three.js.