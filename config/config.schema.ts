import * as joi from '@hapi/joi';

export const configSchema = joi.object().keys({
  logger: joi.object().keys({
    level: joi.string().valid('warn', 'debug', 'info', 'error').required(),
  }),
  formats: joi.object().keys({
    datetime: joi.string().required(),
  }),
  worker: joi.object().keys({
    port: joi.number().integer().min(1024).max(65535).required(),
  }),
  instagram: joi.object().keys({
    host: joi.string().uri().required(),
    paths: joi.object().keys({
      login: joi.string().required(),
    }),
    login: joi.object().keys({
      email: joi.string().email().required(),
      password: joi.string().required(),
    }),
  }),
});
