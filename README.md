# Sui Explorer for Localnet

Uses an unofficial fork of the Sui Explorer https://github.com/kkomelin/sui-explorer/tree/after-fork

![Sui Explorer for Localnet: Screenshot](https://repository-images.githubusercontent.com/797627100/4b573a30-32b8-4725-b101-bbeb70883470)

## Requirements

- [Docker](https://docs.docker.com/engine/install/)

## Install

```bash
# globally
npm install -g sui-explorer-local
# or to your project:
npm install -D sui-explorer-local
```

## Use

Start (on [http://localhost:9001/](http://localhost:9001/)):

```bash
sui-explorer-local start
```

Stop:

```bash
sui-explorer-local stop
```

## Other commands

Rebuild the container in case of any issues:

```bash
sui-explorer-local rebuild
```

## Usage examples

It's integrated into [Sui dApp Starter](https://github.com/kkomelin/sui-dapp-starter).
