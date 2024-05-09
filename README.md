# Sui Explorer for Localnet

Uses an [unofficial fork](https://github.com/kkomelin/sui-explorer/tree/after-fork) of Sui Explorer, which was originally built by [MystenLabs](https://github.com/MystenLabs) and now it's not actively developed.

![Sui Explorer for Localnet: Screenshot](https://repository-images.githubusercontent.com/797627100/4b573a30-32b8-4725-b101-bbeb70883470)

## Requirements

- [Docker](https://docs.docker.com/engine/install/)
- [Node (>= v20)](https://nodejs.org/en/download/)

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

## Debug

To display logs for any command, pass `-v` or `--verbose` param to any command this way:

```bash
sui-explorer-local rebuild -v
```

## Usage examples

It's integrated into [Sui dApp Starter](https://github.com/kkomelin/sui-dapp-starter).

## Copyrights, Licenses and Credits

All credits go to [MystenLabs](https://github.com/MystenLabs) for their original version or [Sui Explorer](https://github.com/MystenLabs/sui-explorer) (Apache-2.0) 

Current project is just a tool that delivers a [slightly adapted version](https://github.com/kkomelin/sui-explorer/tree/after-fork) of Sui Explorer to your local machine.
