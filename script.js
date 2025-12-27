function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("Filling").onsubmit=function()
{alert("Your inquiry has been submitted.");
return false;
};
