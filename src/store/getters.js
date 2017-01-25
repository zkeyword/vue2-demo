export default {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    isLogin: state => state.isLogin,
    isShowToast: state => state.isShowToast,
    toastText: state => state.toastText,
    isShowLoading: state => state.isShowLoading,
    loadingText: state => state.loadingText
}
