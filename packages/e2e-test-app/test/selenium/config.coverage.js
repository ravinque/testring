const browsers = require('@puppeteer/browsers');
const path = require('path');

module.exports = async (config) => {
    const info = await browsers.getInstalledBrowsers({
        cacheDir: path.join(__dirname, '..', '..', 'chrome-cache'),
    });
    const chrome = info.find((item) => item.browser === 'chrome');
    if (!chrome) {
        throw new Error('Chrome is not found');
    }
    const chromedriver = info.find((item) => item.browser === 'chromedriver');
    const local = !config.headless;

    const babelConfig = {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        node: 'current',
                    },
                },
            ],
        ],
    };

    if (config.debug) {
        babelConfig.presets[0][1].debug = true;
        babelConfig.sourceMaps = 'inline';
    }

    return {
        screenshotPath: './_tmp/',
        workerLimit: 'local',
        maxWriteThreadCount: 2,
        screenshots: 'disable',
        logLevel: 'verbose',
        retryCount: 0,
        testTimeout: local ? 0 : config.testTimeout,
        tests: 'packages/e2e-test-app/test/selenium/test/*.spec.js',
        plugins: [
            [
                'selenium-driver',
                {
                    clientTimeout: local ? 0 : config.testTimeout,
                    path: '/wd/hub',
                    chromeDriverPath: process.env['CHROMEDRIVER_PATH'] || chromedriver.executablePath,
                    workerLimit: 'local',
                    capabilities: local
                        ? {
                            'goog:chromeOptions': {
                                binary: chrome.executablePath,
                            },
                        }
                        : {
                            'goog:chromeOptions': {
                                binary: chrome.executablePath,
                                args: ['--headless=new', '--no-sandbox'],
                            },
                        },
                },
            ],
            ['babel', babelConfig],
        ],
    };
};
