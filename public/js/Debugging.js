const list = document.getElementById("catfacts");

try {
  fetch("/demo/facts")
    .then((response) => response.json())
    .then((result) => {
      result.forEach((item) => {
        const li = document.newElement("li");
        li.innerText = item.fact;
        list.appendChild(li);
      });
    });
} catch (e) {
  // Silence is golden
}
