import chalk from "chalk";
import { execSync } from "child_process";
import commandExists from "command-exists";
import { Command } from "commander";

const APP_NAME = "Local Sui Explorer";
const APP_URL = "http://localhost:9001";

export const main = async () => {
  // Make sure Docker is installed.
  await checkDocker();

  // Commands.

  const program = new Command();

  program.name("sui-explorer-local").description(`Easily manage ${APP_NAME}`);

  program
    .command("start")
    .description(`Start ${APP_NAME}`)
    .option("-v, --verbose", "display logs")
    .action((options) => {
      performAction(
        "docker compose up -d",
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
        "docker compose down",
        `${APP_NAME} stopped`,
        `Could not stop ${APP_NAME}`,
        options.verbose
      );
    });

  program
    .command("rebuild")
    .description(`Rebuild the ${APP_NAME} app in case of any issues`)
    .option("-v, --verbose", "display logs")
    .action((options) => {
      performAction(
        "docker compose up -d --force-recreate --build",
        `${APP_NAME} rebuilt on ${APP_URL}`,
        `Could not rebuild ${APP_NAME}`,
        options.verbose
      );
    });

  program.parse();
};

export const checkDocker = async () => {
  try {
    await commandExists("docker");
  } catch {
    displayErrorMessage(
      "Docker not found. Please install https://docs.docker.com/get-docker/"
    );
    process.exit(1);
  }
};

export const performAction = (
  command,
  successMessage,
  errorMessage,
  verbose
) => {
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

export const displayErrorMessage = (message) => {
  console.error(chalk.red(message));
};

export const displaySuccessMessage = (message) => {
  console.log(chalk.green(message));
};

// Main entry point.
main().catch((e) => {
  console.error(chalk.red(e));
});
