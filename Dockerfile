ARG NODE_VERSION=20.13.0
ARG PNPM_VERSION=9.0.6

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
# ENV NODE_ENV production

# Set localnet by default.
ENV VITE_NETWORK LOCAL

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

RUN apk update && \
    apk upgrade && \
    apk add \
    unzip \
    wget

# Used in combination with the corresponding build flag to skip cache for the commands below.
ARG VERSION=v0.0.0

RUN wget https://github.com/kkomelin/sui-explorer/archive/refs/heads/main.zip && \
    unzip main.zip && \
    cd ./sui-explorer-main && \
    pnpm install && \
    pnpm build

#Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 9001

WORKDIR /usr/src/app/sui-explorer-main

# Run the application.
CMD pnpm serve -p 9001
