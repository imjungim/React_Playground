let initialState = {
  contactList: [],
  keyword: "",
}

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      }; //array의 값은 유지하면서 뒤에 새로운 객체를 추가
    case "SEARCH_BY_USERNAME":
      state.keyword = payload.keyword;
      break;
  }
  return { ...state };
}

export default reducer