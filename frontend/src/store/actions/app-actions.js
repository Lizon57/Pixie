export function pageViewMode(isPageView) {
    return async dispatch => {
        try {
            dispatch({ type: 'CHANGE_VIEW', isPageView })
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}
