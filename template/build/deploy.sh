#!/bin/sh
# author:大哥赵可
### 说明：传递参数$1表示要使用的构建脚本，构建脚本把代码打包到dist_pre目录中
###
deployScript=$1
if [ -z "$1" ]
then
  echo '\033[31m 警告：缺少执行脚本参数，即将默认构建线上版本【sh ./build/deploy.sh build】 \033[0m'
  echo '\033[32m 可以接收如下参数 \033[0m'
  echo '\033[32m    1. test_build:测试环境构建 \033[0m'
  echo '\033[32m    2. build:线上环境构建 \033[0m'
  deployScript='build'
else
  echo ' 你居然主动输入了参数'
fi

echo '\n 准备构建：'$deployScript;

npm run $deployScript

if [ $? -ne 0 ]; then
    echo "\033[31m \n 【构建失败！！！】【构建失败！！！】【构建失败！！！】  \033[0m"
    exit 1
else
    echo "\033[32m \n 【构建成功，准备替换线上包...】 \033[0m"
    # 备份之前线上的代码，把构建结果dist_pre替换成dist
    rm -rf dist
    mv dist_pre dist

    echo '\033[32m \n上线完成 \033[0m'
fi
