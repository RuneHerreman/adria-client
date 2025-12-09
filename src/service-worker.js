self.addEventListener("push", e => {
  const data = e.data.json();
  
  return self.registration.showNotification("Hello", {
    body: data.message
  });
});