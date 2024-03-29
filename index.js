document.addEventListener("DOMContentLoaded", function () {
  let lastSentMessage = null;

  const messageInput = document.getElementById("message-input");
  const sendBtn = document.getElementById("send-btn");
  const chatMessages = document.getElementById("chat-messages");
  const typingIndicator = document.getElementById("typing-indicator");
  typingIndicator.textContent = "Someone is typing...";
  typingIndicator.classList.add("typing-animation");
  typingIndicator.style.visibility = "hidden";

  function autoReceiveMessage() {
    typingIndicator.style.visibility = "visible";
    setTimeout(function () {
      typingIndicator.style.visibility = "hidden";
      appendMessage("received", "Thanks for your message!");
    }, 3000);
  }

  sendBtn.addEventListener("click", sendMessage);

  messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
      const messageDiv = appendMessage("sent", message);
      const sentTick = appendTick("grey", messageDiv);
      setTimeout(function () {
        sentTick.style.color = "black"; // Delivered
        setTimeout(function () {
          sentTick.style.color = "green"; // Read
        }, 1000);
      }, 2000);

      lastSentMessage = messageDiv;

      setTimeout(function () {
        typingIndicator.style.visibility = "visible";
      }, 3000);

      setTimeout(function () {
        typingIndicator.style.visibility = "hidden";
        appendMessage("received", "Thanks for your message!");
      }, 7000);

      messageInput.value = "";
    }
  }

  function appendMessage(type, content) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "chat-message " + type;

    const profilePicContainer = document.createElement("div");
    profilePicContainer.className = "profile-pic";

    const profilePicImg = document.createElement("img");
    profilePicImg.src =
      type === "sent" ? "assets/profile-pic (5).png" : "assets/profile-pic (6).png";
    profilePicImg.alt = "Profile Picture";
    profilePicImg.className = "profile-pic-img";

    profilePicContainer.appendChild(profilePicImg);

    const contentContainer = document.createElement("div");
    contentContainer.className = "message-content";

    const messageTextSpan = document.createElement("span");
    messageTextSpan.textContent = content;

    contentContainer.appendChild(messageTextSpan);

    messageDiv.appendChild(profilePicContainer);
    messageDiv.appendChild(contentContainer);

    chatMessages.prepend(messageDiv);
    chatMessages.scrollTop = 0;

    if (type === "sent" && lastSentMessage) {
      const lastSentProfilePicContainer =
        lastSentMessage.querySelector(".profile-pic");
      if (lastSentProfilePicContainer) {
        lastSentProfilePicContainer.remove();
      }
    }

    if (type === "sent") {
      lastSentMessage = messageDiv;
    }

    return messageDiv;
  }

  function appendTick(color, messageDiv) {
    const tickSpan = document.createElement("span");
    tickSpan.className = "tick-mark";
    tickSpan.textContent = "✔";
    tickSpan.style.color = color;

    messageDiv.appendChild(tickSpan);
    return tickSpan;
  }
});
 