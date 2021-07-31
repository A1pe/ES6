/*
function saveSettings(settings){
    console.log(settings);
}

saveSettings(
    {
        follow: true, 
        unfollow: true, 
        mark: true, 
        theme: "green"
    }
);
*/
// 보통 함수를 사용할 때 인자를 여러개 받는 것 보다
// 사용할려는 정보가 모여있는 객체를 인자로 넣는게 훨씬 더 보기가 좋음.
// 그냥 정보만 전달하는 것보다는 정보랑 같이 전달.

// 하지만 위 방법은 함수를 호출할 때는 편하지만 작성할 때는 좋지가 않다.

function saveSettings({ notifications, color: { theme } }) {
  console.log(notifications.follow);
}

saveSettings({
  notifications: {
    follow: true,
    alert: true,
    mkt: false,
  },
  color: {
    theme: "blue",
  },
});
