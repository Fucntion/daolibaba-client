import {
	getUser,
	getAddressList
} from '../service/getData'


export default {

	async getUserInfo({
		commit,
		state
	}) {
		let res = await getUser();
		commit(getUser, res)
	},
	async saveAddress({
		commit,
		state
	}) {

		if(state.removeAddress.length > 0) return;
		let addres = await getAddressList(state.userInfo.user_id);
		commit(saveAddress, addres);	
	},
}