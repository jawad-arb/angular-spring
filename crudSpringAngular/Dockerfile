# Use the official OpenJDK image with Java 17 as a base image
FROM adoptopenjdk:17-jre-hotspot

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file into the container at the working directory
COPY target/crudSpringAngular.jar /app/app.jar

# Expose port 8080
EXPOSE 8080

# Specify the command to run on container startup
CMD ["java", "-jar", "app.jar"]
