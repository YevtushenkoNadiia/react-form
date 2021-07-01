// const [initialState, usersReducer] = useState ({});

const initialState = {
  test: 222,
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
