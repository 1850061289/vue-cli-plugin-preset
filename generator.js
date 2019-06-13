module.exports = (api, options, rootOptions) => {
  // 项目依赖
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0'
    }
  })

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })

  // 生成项目文件
  // api.render('./template')

  // 屏蔽 generator 之后的文件写入操作
  // api.onCreateComplete(() => {
  //   process.env.VUE_CLI_SKIP_WRITE = true
  // })
}