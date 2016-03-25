import {execSync} from 'child_process'
import tryPush from './utils/try-push'

const getModulePath = (info)=> {
    return `./lib/${info.categoryName}/${info.module.path}`
}

const deleteLib = (info)=> {
    execSync(`rm -rf ${getModulePath(info)}/lib`)
}

const deleteDTS = (info)=> {
    execSync(`find ${getModulePath(info)} -name "*.d.ts" | xargs rm`)
}

export default (info)=> {
    // 删除 lib目录
    deleteLib(info)
    // 删除.d.ts
    deleteDTS(info)
    // push
    tryPush(getModulePath(info))
}