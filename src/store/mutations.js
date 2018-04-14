import {
	GET_USERINFO,
} from './mutation-types.js'

import {setStore, getStore} from '../util/utils'

import {localapi, proapi} from '../util/env'

export default {

	//获取用户信息存入vuex
	[GET_USERINFO](state, info) {
		if (state.userInfo && (state.userInfo.username !== info.username)) {
			return;
		};
		if (!state.login) {
			return
		}
		if (!info.message) {
			state.userInfo = {...info};
		} else {
			state.userInfo = null;
		}
	},

}