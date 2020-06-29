import { Worker } from './src';

Worker.start()
  .catch((error: any) => {
    process.stderr.write(String(error));
    process.exit(1);
  });
