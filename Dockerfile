# Use the official Node image as a base image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a lightweight image for the final stage
FROM nginx:alpine

# Copy the built Angular app from the build stage to the nginx server
COPY --from=build /app/dist/user-registration /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
