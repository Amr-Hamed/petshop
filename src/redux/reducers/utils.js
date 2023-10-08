const createAsyncActionURL = (reducerName, actionName) =>
  `${reducerName}/${actionName}`;

export {createAsyncActionURL};
