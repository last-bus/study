import { deepClone } from '@/utils/index'

const state = {
    tabsList: [{
        title: '首页',
        name: '/index',
    }], //标签页数组
    tabsListValue: '/index', //标签页值
    activeIndex: '', // 导航栏选中的值
}

const getters = {
    getTabsList(state) {
        return state.tabsList
    },
    getTabsListValue(state) {
        return state.tabsListValue
    },
    getActiveIndex(state) {
        return state.activeIndex
    },
}

const mutations = {
    tabsListSyn: (state, data) => {
        state.tabsList = data
    },
    tabsListValueSyn: (state, data) => {
        state.tabsListValue = data
    },
    activeIndexSyn: (state, data) => {
        state.activeIndex = data
    },
}

const actions = {
    tabsListAdd({ commit, state }, data) {
        let tabsList = deepClone(state.tabsList)
        tabsList.push(data)
        const res = new Map();
        //对象去重
        let list = tabsList.filter((tabsList) => !res.has(tabsList.name) && res.set(tabsList.name, 1));

        commit('tabsListSyn', list)
    },
    tabsListDelete({ commit, state }, data) {
        let tabsList = state.tabsList.filter(item => {
            return item.name != data
        })
        commit('tabsListSyn', tabsList)
    },
    tabsListReset({ commit }) {
        commit('tabsListSyn', [{
            title: '首页',
            name: '/index',
        }])
    },
    tabsListValueModify({ commit }, data) {
        commit('tabsListValueSyn', data)
    },
    activeIndexModify({ commit }, data) {
        commit('activeIndexSyn', data)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}