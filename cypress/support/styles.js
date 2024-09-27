const { $ } = Cypress;

$("#resizable-panels-root", top.document)
  .find(".bg-gray-100")
  .css("background", "#1b1e2e");
$("#resizable-panels-root", top.document)
  .find("#spec-runner-header")
  .css("background", "#1b1e2e");

$("#unified-reporter", top.document).find("");
// excluded ::before in methods -type -get -contains
let style = document.createElement("style");
style.innerHTML = `
  #unified-reporter .runnables-region .runnable-instruments .attempt-content .command-info > .command-method::before
 {
    content: "";
  }
`;
top.document.head.appendChild(style);

style = top.document.createElement("style");
style.innerHTML = `.command-name-request,
 .command-name-xhr, .command-name-page-load, .command-name-new-url { display: none };`;
style.setAttribute("data-hide-command-log-request", "");
top.document.head.appendChild(style);

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
