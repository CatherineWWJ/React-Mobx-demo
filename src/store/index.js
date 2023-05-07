// 组合子模块
// 封装统一导出的供业务使用的方法

import { ListStore } from "./list.Store";
import { CounterStore } from "./counter.Store";
import React from "react";
// 1.声明一个rootStore
class RootStore {
    constructor() {
        // 对子模块进行实例化操作
        /**
         * 将来实例化rootStore的时候，rootStore有两个属性：counterStore  listStore
         * 各自对应的值 就是我们导入的子模块的实例对象
         */
        this.counterStore = new CounterStore()
        this.listStore = new ListStore()
    }
}

// 实例化操作
const rootStore = new RootStore()
// 使用react  context机制   完成统一方法封装
// 核心目的：让每个业务组件可以通过统一一样的方法获取store中的数据
// 方便调试是一个额外的补充的功能
/**
 * why?
 * 之前使用的是：Provider value={传递的数据}
 * 查找机制：useContext
 * 优先从Provider value中找    如果找不到，就会找createContext方法传递过来的默认参数
 */
const context = React.createContext(rootStore)
// 这个方法的作用：通过useStore拿到rootStore实例对象 然后返回
// 只要在业务组件中调用useStore()   就会获得rootStore
const useStore = () => React.useContext(context)
export {useStore}