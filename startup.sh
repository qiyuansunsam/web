#!/bin/bash

echo "Building Portfolio Website..."

# Install server dependencies
echo "Installing server dependencies..."
cd server
npm install

# Install client dependencies and build
echo "Installing client dependencies and building..."
cd ../client
npm install
npm run build

echo "Build completed successfully!"