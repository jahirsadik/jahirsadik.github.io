$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  // (one entry = the .col-sm-8/.col-sm-10 wrapper; only one of the three panes is open at a time)
  const bindReveal = (btnClass, paneClass) =>
    $("a." + btnClass).on("click", function (e) {
      e.preventDefault();
      const entry = $(this).closest('[class*="col-sm-"]');
      const pane = entry.find("." + paneClass + ".hidden");
      const wasOpen = pane.hasClass("open");
      entry.find(".abstract.hidden, .award.hidden, .bibtex.hidden").removeClass("open");
      if (!wasOpen) pane.addClass("open");
    });
  bindReveal("abstract", "abstract");
  bindReveal("award", "award");
  bindReveal("bibtex", "bibtex");
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
