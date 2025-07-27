#!/bin/bash

# Start the server
cd server
npm run dev &

# Start the client
cd ../client
npm run dev &

# Wait for both processes
wait