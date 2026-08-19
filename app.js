const status = document.querySelector("#status");
const items = document.querySelector("#items");
const addBtn = document.querySelector("#addBtn");

fetch("/api/health")
  .then(r => r.json())
  .then(data => status.textContent = data.ok ? "آنلاین" : "خطا")
  .catch(() => status.textContent = "آفلاین");

let data = [
  { name: "نمونه اول", desc: "آیتم آزمایشی پنل" },
  { name: "نمونه دوم", desc: "برای تست رابط کاربری" }
];

function render() {
  items.innerHTML = data.map(x =>
    `<div class="item"><b>${escapeHtml(x.name)}</b><small>${escapeHtml(x.desc)}</small></div>`
  ).join("");
}

addBtn.addEventListener("click", () => {
  const name = prompt("نام آیتم:");
  if (!name) return;
  data.push({name, desc: "آیتم جدید"});
  render();
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

render();
