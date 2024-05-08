ARG NODE_VERSION=20
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

RUN wget https://github.com/kkomelin/sui-explorer/archive/refs/heads/after-fork.zip && \
    unzip after-fork.zip && \
    cd ./sui-explorer-after-fork && \
    pnpm install && \
    cd ./apps/explorer && \
    pnpm build

### TODO: Build and run in prod mode.

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.local/share/pnpm/store to speed up subsequent builds.
# Leverage a bind mounts to package.json and pnpm-lock.yaml to avoid having to copy them into
# into this layer.
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
#     --mount=type=cache,target=/root/.local/share/pnpm/store \
#     pnpm install --prod --frozen-lockfile

#Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 9001

# Run the application.
CMD pnpm dlx serve ./sui-explorer-after-fork/apps/explorer/build -p 9001
