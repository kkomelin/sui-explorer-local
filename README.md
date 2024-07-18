# Local Sui Explorer: Cli

A Cli tool that delivers an [adapted version](https://github.com/kkomelin/sui-explorer) of the discontinued [Sui Explorer](https://github.com/MystenLabs/sui-explorer) to your local machine.

![Sui Explorer for Localnet: Screenshot](https://repository-images.githubusercontent.com/797627100/052271ab-2ee5-4560-8c24-bda45edb608c)

## Requirements

- [Node (>= v20)](https://nodejs.org/en/download/)

## Install

```bash
# globally
npm install -g sui-explorer-local@latest
# or to your project:
npm install -D sui-explorer-local@latest
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

Restart:

```bash
sui-explorer-local restart
```

## Troubleshot

To display logs, run this command:

```bash
sui-explorer-local logs
```

## Usage examples

It's integrated into [Sui dApp Starter](https://github.com/kkomelin/sui-dapp-starter).

## License and copyright

Original version of [Sui Explorer](https://github.com/MystenLabs/sui-explorer) - &copy; [MystenLabs](https://github.com/MystenLabs), Apache-2.0

[Local Sui Explorer: Cli](https://github.com/kkomelin/sui-explorer-local) - &copy; [Konstantin Komelin](https://github.com/kkomelin), MIT

[Fork](https://github.com/kkomelin/sui-explorer) of Sui Explorer, which is used by the Cli - Apache-2.0
