import { Loading } from "element-ui";
import request from "../../utils/request";

const state = {
    maskloading: false,
    loading: {}
};

const actions = {
    ReSetAllStates({ commit }, payload) {
        commit("resetAllState", payload);
    },
    // eslint-disable-next-line
    SayHelloToServer({ }) {
        return request.SayHelloToServe();
    }
};

const getters = {
    maskloading: state => state.maskloading
};

const mutations = {
    showLoading(state) {
        state.loading = Loading.service({
            text: "加载中...",
            lock: true,
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });
        state.maskloading = true;
    },
    hideLoading(state) {
        if (state.maskloading) {
            state.loading.close();
            state.maskloading = false;
        }
    }
};

export default {
    state,
    actions,
    getters,
    mutations
};
