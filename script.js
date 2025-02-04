function updateTime() {
    const currentTimeUTC = document.getElementById('currentTimeUTC')
    const now = new Date();
    const utcTime = now.toUTCString();
    currentTimeUTC.textContent = `Current Time (UTC): ${utcTime}`;
}

window.onload = updateTime;