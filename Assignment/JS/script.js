const timeDiv = document.getElementById("time");
const today = document.getElementById("today");

function getTime() {
    let now = new Date();
    let year = padZero(now.getUTCFullYear());
    let month = padZero(now.getMonth() + 1); //0부터 시작하므로 더해준다.
    let date = padZero(now.getDate());
    let hour = padZero(now.getHours());
    let minute = padZero(now.getMinutes());
    let second = padZero(now.getSeconds());

    today.textContent = `${year}년 ${month}월 ${date}일`;
    timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`;
}

function padZero(data) {
    return data < 10 ? `0${data}` : data;
}

getTime();
setInterval(getTime, 1000);
