module.exports = {
  prompts: {
    name: {
      type: 'input',
      message: 'The name of project:'
    },
    libname: {
      type: 'input',
      message: 'The name of lib that in global namespace:'
    },
    port: {
      type: 'input',
      message: 'dev port:'
    },
  },
  templateOptions: {
    delimiter: '$'
  },
  post(context) {
    if(context.pm === 'yarn') {
      // context.yarnInstall()
    } else if(context.pm === 'npm') {
      // context.npmInstall()
    } else {
      context.log.error('Could not find package manager (npm/yarn)')
    }
    context.gitInit()
  }
}
