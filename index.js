#!/usr/bin/env node

import chalk from "chalk";
import { execSync } from "child_process";
import commandExists from "command-exists";
import { Command } from "commander";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const APP_NAME = "Local Sui Explorer";
const APP_URL = "http://localhost:9001";
const REPORT_ISSUE_URL =
  "https://github.com/kkomelin/sui-explorer-local/issues/new";

const main = async () => {
  // Make sure Docker is installed.
  await checkDocker();

  // Commands.

  const program = new Command();

  program
    .name("sui-explorer-local")
    .description(`Easily manage ${APP_NAME}`)
    .version(getPackageVersion());

  const cliDirectory = getCliDirectory();

  program
    .command("start")
    .description(`Start ${APP_NAME}`)
    .option("-v, --verbose", "display logs")
    .action((options) => {
      performAction(
        `docker compose -f ${cliDirectory}/compose.yml up -d`,
        `${APP_NAME} started on ${APP_URL}`,
        `Could not start ${APP_NAME}`,
        options.verbose
      );
    });

  program
    .command("stop")
    .description(`Stop ${APP_NAME}`)
    .option("-v, --verbose", "display logs")
    .action((options) => {
      performAction(
        `docker compose -f ${cliDirectory}/compose.yml down`,
        `${APP_NAME} stopped`,
        `Could not stop ${APP_NAME}`,
        options.verbose
      );
    });

  program
    .command("restart")
    .description(`Restart ${APP_NAME}`)
    .option("-v, --verbose", "display logs")
    .action((options) => {
      performAction(
        `docker compose -f ${cliDirectory}/compose.yml restart`,
        `${APP_NAME} restarted`,
        `Could not restart ${APP_NAME}`,
        options.verbose
      );
    });

  program
    .command("rebuild")
    .description(`Rebuild the ${APP_NAME} app in case of any issues`)
    .option("-v, --verbose", "display logs")
    .action((options) => {
      performAction(
        `docker compose -f ${cliDirectory}/compose.yml up -d --force-recreate --build`,
        `${APP_NAME} rebuilt on ${APP_URL}`,
        `Could not rebuild ${APP_NAME}`,
        options.verbose
      );
    });

  program.parse();
};

const checkDocker = async () => {
  try {
    await commandExists("docker");
  } catch {
    displayErrorMessage(
      "Docker not found. Please install https://docs.docker.com/get-docker/"
    );
    process.exit(1);
  }
};

const getCliDirectory = () => {
  const currentFileUrl = import.meta.url;
  return path.dirname(decodeURI(fileURLToPath(currentFileUrl)));
};

const getPackageVersion = () => {
  try {
    const packageFile = readFileSync(
      path.join(getCliDirectory(), "/package.json"),
      "utf8"
    );
    const packageMeta = JSON.parse(packageFile);
    return packageMeta.version;
  } catch (e) {
    displayErrorMessage(
      `Cannot read package meta-data. Please report the issue ${REPORT_ISSUE_URL}`
    );
    console.error(e);
    process.exit(1);
  }
};

const performAction = (command, successMessage, errorMessage, verbose) => {
  const ignore = !verbose ? "ignore" : undefined;

  try {
    execSync(command, {
      stdio: ignore,
    });
  } catch (e) {
    displayErrorMessage(errorMessage);
    verbose && console.error(e);
    process.exit(1);
  }

  displaySuccessMessage(successMessage);
};

const displayErrorMessage = (message) => {
  console.error(chalk.red(message));
};

const displaySuccessMessage = (message) => {
  console.log(chalk.green(message));
};

// Main entry point.
main().catch((e) => {
  console.error(chalk.red(e));
});
