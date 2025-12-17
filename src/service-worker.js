self.addEventListener("push", event => {
  let data = {
    title: "Genesis",
    message: "New notification",
    url: "/"
  };

  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      console.error("Invalid push data", e);
    }
  }

  const options = {
    body: data.message,
    data: {
      url: data.url
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  const url = event.notification.data?.url || "/";

  event.waitUntil(
    clients.openWindow(url)
  );
});
