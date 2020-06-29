import { getLogger } from './core/lib/logger';
import { wait } from './core/lib/helpers';
import config from '../config';

export class Worker {
  public static async start(): Promise<void> {
    const logger = getLogger({ level: config.logger.level });

    logger.info({ port: config.worker.port }, 'The instagram worker is running');

    while (true) {
      wait(100);
    }
  }
}
