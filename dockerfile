### STAGE 1: Build ###

# FROM mhart/alpine-node:12 as builder
FROM mhart/alpine-node:12 as builder

# Create app directory
WORKDIR /usr/app

# Copy package.json to the WORKDIR
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy all the files from local folder to the container WORKDIR
COPY ./ ./

# Move the node_modules folder
RUN mv ./node_modules/ /usr/ && mv /usr/node_modules ./

# Expose the port
EXPOSE 3000

# Start the Server
CMD ["npm", "start"]