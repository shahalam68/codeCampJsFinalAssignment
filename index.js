document.addEventListener("DOMContentLoaded", function () {
  let lastSentMessage = null;

  const inputField = document.getElementById("message-input");
  const sendButton = document.getElementById("send-btn");
  const chatContainer = document.getElementById("chat-messages");
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

  sendButton.addEventListener("click", sendMessage);

  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = inputField.value.trim();
    if (message !== "") {
      const messageDiv = appendMessage("sent", message);
      const sentTick = appendTick("grey", messageDiv);
      setTimeout(function () {
        sentTick.style.color = "black";
        setTimeout(function () {
          sentTick.style.color = "green";
        }, 1000);
      }, 2000);

      lastSentMessage = messageDiv;

      setTimeout(function () {
        typingIndicator.style.visibility = "visible";
      }, 3000);

      setTimeout(function () {
        typingIndicator.style.visibility = "hidden";
        appendMessage(
          "received",
          "Thanks for your message! I'm just a chat bot"
        );
      }, 7000);

      inputField.value = "";
    }
  }

  function appendMessage(type, content) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "chat-message " + type;

    const profilePicContainer = document.createElement("div");
    profilePicContainer.className = "profile-pic";

    const profilePicImg = document.createElement("img");
    profilePicImg.src =
      type === "sent"
        ? "assets/profile-pic (5).png"
        : "assets/profile-pic (6).png";
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

    chatContainer.prepend(messageDiv);
    chatContainer.scrollTop = 0;

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
