import logger, { BaseLogger } from 'pino';
import { configSchema } from './config.schema';

export interface IConfig {
  logger: {
    level: string;
  };
  formats: {
    datetime: string;
  };
  worker: {
    port: number;
  };
  instagram: {
    host: string;
    paths: {
      login: string;
    };
    login: {
      email: string;
      password: string;
    };
  };
}

export default ((logger: BaseLogger): IConfig => {
  const configs = {
    logger: {
      level: process.env.LOG_LEVEL || 'info',
    },
    formats: {
      datetime: process.env.DATETIME_FORMAT || 'YYYY-MM-DDTHH:mm:ssZ',
    },
    worker: {
      port: parseInt(process.env.WORKER_PORT as string, 10) || 3001,
    },
    instagram: {
      host: process.env.INSTAGRAM_HOST,
      paths: {
        login: process.env.INSTAGRAM_LOGIN_PATH,
      },
      login: {
        email: process.env.INSTAGRAM_LOGIN_EMAIL,
        password: process.env.INSTAGRAM_LOGIN_PASSWORD,
      },
    },
  };
  const { error, value } = configSchema.validate(configs);
  if (error) {
    logger.error('Validation error', error);
  }

  return value;
})(logger());
