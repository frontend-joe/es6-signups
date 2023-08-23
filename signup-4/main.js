const setCaret = (el) => {
  if (!el) return;

  try {
    const range = document.createRange();
    const sel = window.getSelection();

    range.setStart(el.childNodes[0], el.innerText.length);
    range.collapse(true);

    sel.removeAllRanges();
    sel.addRange(range);
  } catch (err) {
    console.log("Error Setting Caret: ", err);
  }
};

const togglePassword = (button) => {
  button.classList.toggle("showing");
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
  input.focus();
  setCaret(input);
};
