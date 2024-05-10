# Local Sui Explorer: Cli

A Cli tool that delivers a [slightly adapted version](https://github.com/kkomelin/sui-explorer) of the discontinued [Sui Explorer](https://github.com/MystenLabs/sui-explorer) to your local machine.

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

Restart the container:

```bash
sui-explorer-local restart
```

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

## License and copyright

Original version of [Sui Explorer](https://github.com/MystenLabs/sui-explorer) - &copy; [MystenLabs](https://github.com/MystenLabs), Apache-2.0

[Local Sui Explorer: Cli](https://github.com/kkomelin/sui-explorer-local) - &copy; [Konstantin Komelin](https://github.com/kkomelin), MIT

[Fork](https://github.com/kkomelin/sui-explorer) of Sui Explorer, which is used by the Cli - Apache-2.0
