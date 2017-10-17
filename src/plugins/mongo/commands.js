import * as commandHandlers from './command-handlers';

export const setup = {
  description: 'Installs and starts MongoDB',
  handler: commandHandlers.setup
};

export const logs = {
  description: 'View MongoDB logs',
  builder(yargs) {
    return yargs.strict(false);
  },
  handler: commandHandlers.logs
};

export const start = {
  description: 'Start MongoDB',
  handler: commandHandlers.start
};

export const stop = {
  description: 'Stop MongoDB',
  handler: commandHandlers.stop
};
