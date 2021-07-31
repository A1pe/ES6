const follow = checkFollow();
const alertn = checkAlert();

const settings = {
  notifications: {
    follow,
    isalert: alertn,
  },
};

// 위의 notification안에 있는 follow 와 isalert 는 각각 변수들이 할당되어 있다.
// 해당 값들은 만약 변수와 이름이 같다면(follow) 그냥 저렇게 써도 된다.
// 만약 이름이 다를경우 (isalert) 저렇게 써야 한다.
