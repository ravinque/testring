import * as deepmerge from 'deepmerge';
import { IConfig } from '@testring/typings';
import { getArguments } from './arguments-parser';
import { readConfig, getFileConfig } from './config-file-reader';
import { defaultConfiguration } from './default-config';

const getConfig = async (argv: Array<string> = []): Promise<IConfig> => {
    const args = getArguments(argv);

    const temporaryConfig = deepmerge.all<IConfig>([
        defaultConfiguration,
        args || {}
    ]);

    const fileConfig = await getFileConfig(temporaryConfig);
    const envConfig = await readConfig(temporaryConfig.envConfig);

    return deepmerge.all<IConfig>([
        defaultConfiguration,
        fileConfig || {},
        envConfig || {},
        args || {},
    ]);
};

export { defaultConfiguration, getConfig };
