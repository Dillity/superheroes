export const getHeroes = (state) => {
    return state.superheroes.superheroes
}
export const getCreateSuccess = (state) => {
    return state.superheroes.createSuccess
}
export const getTotalItems = (state) => {
    return state.superheroes.totalItems
}
export const getPageLimit = (state) => {
    return state.superheroes.pageLimit
}
export const getCurrentPage = (state) => {
    return state.superheroes.currentPage
}
export const getImages = (state) => {
    return state.superheroes.superheroes.images
}
export const getTotalDocsPerPage = (state) => {
    return state.superheroes.totalDocsPerPage
}
export const getPrevPage = (state) => {
    return state.superheroes.prevPage
}
export const getIsAnyItems = (state) => {
    return state.superheroes.isAnyItems
}
export const getIsAllItems = (state) => {
    return state.superheroes.isAllItems
}
export const getTotalPages = (state) => {
    return state.superheroes.totalPages
}