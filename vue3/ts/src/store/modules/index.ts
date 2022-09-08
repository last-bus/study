import { deepClone } from '@/utils/index'
import * as T from "@/publicType/publicType";

const state = {
    tabsList: [{
        title: '首页',
        name: '/index',
    }], //标签页数组
    tabsListValue: '/index', //标签页值
    activeIndex: '', // 导航栏选中的值
}

const getters = {
    getTabsList(state: T.TypeState) {
        return state.tabsList
    },
    getTabsListValue(state: T.TypeState) {
        return state.tabsListValue
    },
    getActiveIndex(state: T.TypeState) {
        return state.activeIndex
    },
}

const mutations = {
    tabsListSyn: (state: T.TypeState, data: T.TypeTabsList) => {
        state.tabsList = data
    },
    tabsListValueSyn: (state: T.TypeState, data: string) => {
        state.tabsListValue = data
    },
    activeIndexSyn: (state: T.TypeState, data: string) => {
        state.activeIndex = data
    },
}

const actions = {
    tabsListAdd(context: T.TypeContext, data: T.TypeTabs) {
        const tabsList = deepClone(context.state.tabsList)
        tabsList.push(data)
        const res = new Map();
        //对象去重
        const list = tabsList.filter((tabsList: T.TypeTabs) => !res.has(tabsList.name) && res.set(tabsList.name, 1));

        context.commit('tabsListSyn', list)
    },
    tabsListDelete(context: T.TypeContext, data: string) {
        if (context.state.tabsList) {
            const tabsList = context.state.tabsList.filter(item => {
                return item.name != data
            })
            context.commit('tabsListSyn', tabsList)
        }
    },
    tabsListReset(context: T.TypeContext) {
        context.commit('tabsListSyn', [{
            title: '首页',
            name: '/index',
        }])
    },
    tabsListValueModify(context: T.TypeContext, data: string) {
        context.commit('tabsListValueSyn', data)
    },
    activeIndexModify(context: T.TypeContext, data: string) {
        context.commit('activeIndexSyn', data)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}