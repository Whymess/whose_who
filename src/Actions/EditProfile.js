export const UserProfile = (index,users) => {
	return {
		 type: 'USER_PROFILE',
		 payload: [index,users]
	}
}

export const EditUserProfile = (IndexUserToModify, newfavQoute, newfunFact) => {
	  return {
	  	type: 'EDIT_USER_PROFILE',
	  	payload: [IndexUserToModify, newfavQoute, newfunFact ]
	  }
}


// Not yet implemented.
export const UpdatePhoto = (file) => {
	return{
		type: 'UPDATE_PHOTO',
		payload: file
	}
}