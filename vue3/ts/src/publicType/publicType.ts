export type TypeTabs = {
    title: string;
    name: string;
}
export type TypeTabsList = [TypeTabs]
export type TypeState = {
    tabsList?: TypeTabsList,
    tabsListValue?: string,
    activeIndex?: string
};
export type TypeContext = { commit: (name: string, data: any) => void, state: TypeState }

export type TypeLogin = {
    password: string,
    username: string
}

export type TypeModifyPassword = {
    oldPwd: string,
    newPwd: string,
    confirmPwd: string,
}

export type TypeMethods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";
