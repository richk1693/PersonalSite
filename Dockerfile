# context: . (root folder)

# Stage 1: Build the React app
FROM node:22-alpine AS build

WORKDIR /app

# Ensure we're not in production mode so devDependencies (like tsc) are installed
ENV NODE_ENV=development

# Copy package files
COPY package*.json ./
# Install all dependencies including devDependencies
RUN npm install

# Copy source code (files ignored by .dockerignore will be excluded)
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
