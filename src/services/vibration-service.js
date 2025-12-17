export function vibrate(pattern) {
  if ("vibrate" in navigator) {
    navigator.vibrate(pattern);
  } else {
    console.warn("Vibration API not supported");
  }
}

