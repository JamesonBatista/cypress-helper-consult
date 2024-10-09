const { $ } = Cypress;

$("#resizable-panels-root", top.document)
  .find(".bg-gray-100")
  .css("background", "#1b1e2e");
$("#resizable-panels-root", top.document)
  .find("#spec-runner-header")
  .css("background", "#1b1e2e");


Cypress.on("uncaught:exception", () => {
  return false;
});
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML = `.command-name-request, .command-name-xhr, .command-name-uncaught-exception { display: none };`;
  style.setAttribute("data-hide-command-log-request", "");
  app.document.head.appendChild(style);
}

const base = $("#unified-reporter", top?.document);

base.find(".container").css("border-right", "2px solid white");

// // remove -type -get -contains -click
let style = top.document.createElement("style");
const selector = `#unified-reporter .collapsible-content ul > li`;
const rule = `div > span > div > span.command-info`;
const beforeSpan = `span.command-method::before {content: '';}`;
style.innerHTML = `${selector} ${rule} ${beforeSpan}`;
style.setAttribute("data-hover-black-delete-before", "");
top.document.head.appendChild(style);
// // hide xhr fetch
style = top.document.createElement("style");
style.innerHTML = `.command.command-name-request,
 .command.command-name-uncaught-exception,
 .command-name-page-load,
 .command-name-new-url
 { display: none };`;
style.setAttribute("data-hide-command-log-request", "");
top.document.head.appendChild(style);

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

const projectName = require("../../package.json").name;
base
  .find("div > header > span > button > span")
  .css("color", "white")
  .text(projectName);

// remove -type -get -contains -click
const styles = [
  { selector: ".command-name-type" },
  { selector: ".command-name-eq" },
  { selector: ".command-name-get" },
  { selector: ".command-name-contains" },
  { selector: ".command-name-wrap" },
];

styles.forEach(({ selector }) => {
  const style = top.document.createElement("style");
  const beforeSpan = "span.command-method span {display: none;}";
  const rule = `div > span > div > span.command-info`;
  style.innerHTML = `#unified-reporter .collapsible-content ul > li${selector} ${rule} ${beforeSpan}`;
  style.setAttribute("data-hover-black-delete-before", "");
  top.document.head.appendChild(style);
});
