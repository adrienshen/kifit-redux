// Sample comments to bootstrap the application.
const starterComments = {"lekir-fitness-mix-martial-arts-studio-5":[{"text":"This guy is the real deal! I never learnt so much before.👌🏻","user": "dessie.ann"},{"text":"Sign me up!","user": "jenngbrewer"}],"jazzercise-ara-damansara-10":[{"text":"Perfect workout for Sunday mornings.","user": "dessie.ann"},{"text":"😱 jealous","user": "jenngbrewer"}]};

const commentsLS = 'comments';

export const loadCommentsLS = () => {
  try{
    const serialComments = localStorage.getItem(commentsLS);
    if (serialComments === null) {
      return starterComments;
    }
    return JSON.parse(serialComments);
  }catch (err) {
    return starterComments;
  }
}

export const updateCommentsLS = (newCommentState) => {
  try{
    const serialComments = JSON.stringify(newCommentState);
      localStorage.setItem(commentsLS, serialComments);
  }catch (err) {
    console.log('Unable to update comments');
  }
}