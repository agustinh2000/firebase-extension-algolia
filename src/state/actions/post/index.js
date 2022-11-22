import postCreation from 'services/post/createPost';
import uploadImage from 'services/post/uploadImage';

import {
  CREATE_POST_SUCCESS,
  CREATE_POST_INIT,
  CREATE_POST_ERROR,
} from 'state/actionCreators/posts';
import firebaseError from 'utils/common/firebaseError';

const createPost = (content, img, user) => async (dispatch) => {
  dispatch(CREATE_POST_INIT());
  try {
    const fileUrl = await uploadImage(img);
    await postCreation(content, user, fileUrl);
    return dispatch(CREATE_POST_SUCCESS());
  } catch (error) {
    const errorMessage = error?.code ? firebaseError(error) : error.message;
    return dispatch(CREATE_POST_ERROR({ error: errorMessage }));
  }
};

export default createPost;
