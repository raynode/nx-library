module.exports = {
  locals: function(options) {
    // Return custom template variables here.
    const { name } = options.entity
    const upperCaseName = name.toUpperCase()

    return {
      upperCaseName,
    }
  },

  fileMapTokens: function(/* options */) {
    // Return custom tokens to be replaced in your files
    return {
      upperCaseName: function(options){
        const { name } = options.entity
        return name.toUpperCase()
      }
    }
  },
}
  // Should probably never need to be overriden
  //
  // filesPath: function() {
    // return path.join(this.path, 'files')
  // },

  // beforeInstall: function(options) {},
  // afterInstall: function(options) {},
// }
