# FAO Frontend IDEA Test

This repository contains the frontend implementation for the FAO IDEA Frontend test project. Visit the live site here: [https://fao-idea-frontend-test.pages.dev/](https://fao-idea-frontend-test.pages.dev/)

## Prerequisites

- Node.js (v22.x or newer)
- pnpm

## Installation

### Setting up the Environment

Before you begin, make sure you have the required tools installed:

#### Installing nvm (Node Version Manager)

```bash
# For macOS/Linux
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# For Windows, use nvm-windows:
# Download from: https://github.com/coreybutler/nvm-windows/releases
```

After installation, restart your terminal and verify:

```bash
nvm --version
```

#### Installing Node.js v22

```bash
nvm install 22
nvm use 22
node --version # Should display v22.x.x
```

#### Installing pnpm

```bash
npm install -g pnpm
pnpm --version # Verify installation
```

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/adityoashari/fao-idea-frontend-test.git
cd fao-idea-frontend-test

# Install dependencies
pnpm install
```

## Running the Project

To start the development server:

```bash
pnpm dev
```

The application should now be running at [http://localhost:5173](http://localhost:5173).

## Building for Production

```bash
pnpm build
```

## Testing

### Running Tests

Execute the test suite with:

```bash
pnpm test
```

### Running Linters

Check code quality with:

```bash
pnpm lint
```
