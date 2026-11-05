const toggle = document.querySelector("#enabled");
const ver = document.querySelector("#ver");

ver.textContent = "v" + chrome.runtime.getManifest().version;

chrome.storage.local.get({ enabled: true }, (data) => {
  toggle.checked = data.enabled !== false;
});

toggle.addEventListener("change", () => {
  chrome.storage.local.set({ enabled: toggle.checked });
});

document.querySelector("#open").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://ncore.pro/torrents.php" });
});
