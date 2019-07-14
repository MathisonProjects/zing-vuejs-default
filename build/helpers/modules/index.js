import camelCase from 'lodash/camelCase'

const requireModule = require.context('.', false, /\.js$/)
const helpers = {}

requireModule.keys().forEach(fileName => {
    if (fileName === './index.js') return
    const moduleName = camelCase(
        fileName.replace(/(\.\/|\.js)/g, '')
    )

    helpers[moduleName] = requireModule(fileName).default;
})

export default helpers