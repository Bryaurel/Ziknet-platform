# Use official Node.js LTS version (small size)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy application source code (excluding files from .dockerignore)
COPY . .

# Expose the app port
EXPOSE 3000

# Start the server
CMD ["node", "src/server.js"]
