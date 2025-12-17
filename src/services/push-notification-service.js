const VAPID_PUBLIC_KEY =
  "BEjEUzpt6xpfP1jVCF3IpKsV4iOhfwZoKclTWjwR8NN514xRDjUWZXAh1F3-a3Rt54nD-zSbDWP4xPrHjBlpD2s";

const subscripteOptions = {
  userVisibleOnly: true,
  applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
};

async function enablePushNotifications() {
  const permission = await Notification.requestPermission();
  if (permission === "granted") renewPushNotification();
}

async function renewPushNotification() {
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.subscribe(subscripteOptions);

  postSubscriptionToServer(subscription);
}

function postSubscriptionToServer(subscription) {
  fetch(`${LOCALSERVER}/api/push/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(subscription)
  });
}

function urlBase64ToUint8Array(base64String) {
  var padding = "=".repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export { enablePushNotifications };