import type { Tree } from '@nx/devkit';
import type { AggregatedLog } from '@nx/devkit/src/generators/plugin-migrations/aggregate-log-util';
import { processGenericOptions } from './process-generic-options';

export function processSubmitOptions(
  tree: Tree,
  options: any,
  projectName: string,
  projectRoot: string,
  migrationLogs: AggregatedLog
) {
  const args: string[] = [];
  if ('interactive' in options && options.interactive === false) {
    args.push('--non-interactive');
    delete options.interactive;
  }
  if ('wait' in options) {
    if (options.wait) args.push('--wait');
    else args.push('--no-wait');
    delete options.wait;
  }
  options.args = args;
  processGenericOptions(tree, options, projectName, projectRoot, migrationLogs);
}
