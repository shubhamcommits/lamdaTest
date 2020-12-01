#!/bin/bash

# Lambda Test - Interview Test - 11/30/2020 - Shubham

# Make Suitable Directories
mkdir -p data \
        data/chrome \
        data/firefox \

# Deploy the Compose
docker-compose -p lamda-test up -d