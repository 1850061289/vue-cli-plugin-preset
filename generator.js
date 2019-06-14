module.exports = (api, options, rootOptions) => {
  // 项目依赖
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0',
      '@vue/cli': '^3.8.2'
    },
    scripts: {
      "test_build": "vue-cli-service build --mode test_production"
    }
  })

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/'))
      .forEach(path => delete files[path])

    Object.keys(files).forEach(path => {
      if(!path.startsWith('public')) {
        delete files[path]
      }
      
    })
  })

  // 生成项目文件
  api.render('./template')
}