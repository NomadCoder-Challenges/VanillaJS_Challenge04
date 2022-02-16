const clockTitle = document.querySelector(".js-clock");
const date = new Date();

function getDiff() {
  const now = Date.now();
  let nowYear = date.getFullYear();
  const xmasDate = new Date(nowYear, 11, 25);
  const diffMs = xmasDate - now;
  // console.log(diffMs);

  let diffSec = Math.floor(diffMs / 1000);
  let diffMin = Math.floor(diffSec / 60);
  diffSec %= 60;
  let diffHour = Math.floor(diffMin / 60);
  diffMin %= 60;
  let diffDate = Math.floor(diffHour / 24);
  diffHour %= 60;

  // if (diffMs < 0) {
  //   nowYear++;
  // }
  // console.log(diffDate, diffHour, diffMin, diffSec);
  clockTitle.innerText = `${diffDate}d \
                          ${String(diffHour).padStart(2, "0")}h \
                          ${String(diffMin).padStart(2, "0")}m \
                          ${String(diffSec).padStart(2, "0")}s `;
}

getDiff();
setInterval(getDiff, 1000);
