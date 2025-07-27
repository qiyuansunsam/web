#!/bin/bash

# Install Node.js if not already installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "Starting Portfolio Website..."

cd server
npm install &
SERVER_PID=$!

cd ../client
npm install &
CLIENT_PID=$!

wait $SERVER_PID
wait $CLIENT_PID

cd ../server
npm run dev &

cd ../client
npm run dev &

echo "Server running on http://localhost:5000"
echo "Client running on http://localhost:5173"

wait