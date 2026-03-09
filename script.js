const COUNTDOWN_TARGET = "2026-03-20T20:00:00";

function getTimeParts(targetDate) {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const distance = target - now;

  if (distance <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0")
  };
}

function updateCountdown(root, targetDate) {
  if (!root) return;

  const parts = getTimeParts(targetDate);

  root.querySelector('[data-unit="days"]').textContent = parts.days;
  root.querySelector('[data-unit="hours"]').textContent = parts.hours;
  root.querySelector('[data-unit="minutes"]').textContent = parts.minutes;
  root.querySelector('[data-unit="seconds"]').textContent = parts.seconds;
}

function initCountdowns() {
  const countdowns = [
    document.getElementById("countdown-main"),
    document.getElementById("countdown-bottom")
  ];

  countdowns.forEach((countdown) => updateCountdown(countdown, COUNTDOWN_TARGET));

  setInterval(() => {
    countdowns.forEach((countdown) => updateCountdown(countdown, COUNTDOWN_TARGET));
  }, 1000);
}

document.addEventListener("DOMContentLoaded", initCountdowns);