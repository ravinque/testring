export const enum BrowserProxyMessageTypes {
    execute = 'BrowserProxy/EXEC',
    response = 'BrowserProxy/RESPONSE',
    exception = 'BrowserProxy/EXCEPTION',
}

export const enum BrowserProxyPlugins {
    getPlugin = 'getPlugin',
}

export const enum BrowserProxyActions {
    refresh = 'refresh',
    click = 'click',
    execute = 'execute',
    executeAsync = 'executeAsync',
    url = 'url',
    newWindow = 'newWindow',
    waitForExist = 'waitForExist',
    waitForVisible = 'waitForVisible',
    isVisible = 'isVisible',
    moveToObject = 'moveToObject',
    getTitle = 'getTitle',
    clearValue = 'clearValue',
    keys = 'keys',
    elementIdText = 'elementIdText',
    elements = 'elements',
    getValue = 'getValue',
    setValue = 'setValue',
    getSize = 'getSize',
    selectByIndex = 'selectByIndex',
    selectByValue = 'selectByValue',
    selectByVisibleText = 'selectByVisibleText',
    getAttribute = 'getAttribute',
    windowHandleMaximize = 'windowHandleMaximize',
    isEnabled = 'isEnabled',
    scroll = 'scroll',
    scrollIntoView = 'scrollIntoView',
    isAlertOpen = 'isAlertOpen',
    alertAccept = 'alertAccept',
    alertDismiss = 'alertDismiss',
    alertText = 'alertText',
    dragAndDrop = 'dragAndDrop',
    frame = 'frame',
    frameParent = 'frameParent',
    setCookie = 'setCookie',
    getCookie = 'getCookie',
    deleteCookie = 'deleteCookie',
    getHTML = 'getHTML',
    getCurrentTabId = 'getCurrentTabId',
    switchTab = 'switchTab',
    close = 'close',
    getTabIds = 'getTabIds',
    window = 'window',
    windowHandles = 'windowHandles',
    getTagName = 'getTagName',
    isSelected = 'isSelected',
    getText = 'getText',
    elementIdSelected = 'elementIdSelected',
    makeScreenshot = 'makeScreenshot',
    uploadFile = 'uploadFile',
    end = 'end',
    kill = 'kill',
    getCssProperty = 'getCssProperty',
    getSource = 'getSource',
    isExisting = 'isExisting',
    waitForValue = 'waitForValue',
    waitForSelected = 'waitForSelected',
    waitUntil = 'waitUntil',
    selectByAttribute = 'selectByAttribute',
    gridTestSession = 'gridTestSession',
    keysOnElement = 'keysOnElement',
    mock = 'mock',
    getMockData = 'getMockData',
    getCdpCoverageFile = 'getCdpCoverageFile',
    emulateDevice = 'emulateDevice',
    getHubConfig = 'getHubConfig',
}
