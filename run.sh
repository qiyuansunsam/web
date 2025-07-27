
#!/bin/bash

echo "Starting production server..."

# Check if we're in production environment (Render sets NODE_ENV)
if [ "$NODE_ENV" = "production" ] || [ -n "$RENDER" ]; then
    echo "Running in production mode"
    cd server
    npm start
else
    echo "Running in development mode"
    
    # Function to check if port is in use (only if lsof is available)
    check_port() {
        local port=$1
        local service=$2
        if command -v lsof &> /dev/null; then
            if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
                echo "Port $port is already in use by another process."
                echo "Killing process on port $port for $service..."
                kill -9 $(lsof -t -i:$port) 2>/dev/null || true
                sleep 2
            fi
        else
            echo "lsof not available, skipping port check"
        fi
    }

    # Check and free ports
    echo "Checking ports..."
    check_port 8080 "server"
    check_port 5173 "client"

    echo "Starting server..."
    cd server
    npm run dev &
    SERVER_PID=$!

    echo "Starting client..."
    cd ../client
    npm run dev &
    CLIENT_PID=$!

    # Function to cleanup on exit
    cleanup() {
        echo "Stopping services..."
        kill $SERVER_PID $CLIENT_PID 2>/dev/null || true
        exit
    }

    # Trap cleanup function on script exit
    trap cleanup EXIT INT TERM

    echo "Both services started. Press Ctrl+C to stop."
    wait
fi