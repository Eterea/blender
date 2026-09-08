/*
 * Collapsible nested sections in the "On this page" table of contents.
 *
 * Material for MkDocs does not natively support this (see
 * squidfunk/mkdocs-material discussion #7560), so this adds a small
 * arrow/chevron toggle to every TOC entry that has nested sub-headings.
 * All nested branches start collapsed; opening the page containing the
 * active heading auto-expands just enough to reveal it.
 *
 * Written to work with the `navigation.instant` feature, which swaps
 * page content via AJAX instead of a full reload — re-initializing on
 * every `document$` emission covers both the first load and every
 * subsequent instant navigation.
 */
(function () {
  function initTocCollapse() {
    var toc = document.querySelector(".md-sidebar--secondary .md-nav--secondary");
    if (!toc) return;

    var items = toc.querySelectorAll(".md-nav__item");
    var collapsibleCount = 0;

    items.forEach(function (item) {
      var nestedNav = item.querySelector(":scope > .md-nav");
      var link = item.querySelector(":scope > .md-nav__link");
      if (!nestedNav || !link) return;

      collapsibleCount += 1;
      item.classList.add("md-nav__item--collapsible", "md-nav__item--collapsed");

      // The link normally carries its own top spacing (margin-top) to
      // separate it from the previous entry. Once the toggle becomes a
      // sibling flex item next to it, that margin only pushes the link
      // down — not the toggle — so the two drift out of alignment. Move
      // that spacing onto the row itself, and zero it on the link, so
      // both the toggle and the link start from the same baseline.
      var linkMarginTop = window.getComputedStyle(link).marginTop;
      item.style.marginTop = linkMarginTop;
      link.style.marginTop = "0";

      var toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "md-nav__toc-toggle";
      toggle.setAttribute("aria-label", "Toggle section");
      toggle.setAttribute("aria-expanded", "false");
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var collapsed = item.classList.toggle("md-nav__item--collapsed");
        toggle.setAttribute("aria-expanded", String(!collapsed));
      });

      item.insertBefore(toggle, link);
    });

    addCollapseAllButton(toc, collapsibleCount > 0);
  }

  function addCollapseAllButton(toc, hasCollapsible) {
    var existing = toc.querySelector(":scope > .md-nav__collapse-all");
    if (!hasCollapsible) {
      if (existing) existing.remove();
      return;
    }
    if (existing) return;

    var button = document.createElement("button");
    button.type = "button";
    button.className = "md-nav__collapse-all";
    button.textContent = "Collapse all";
    button.addEventListener("click", function () {
      toc.querySelectorAll(".md-nav__item--collapsible").forEach(function (item) {
        item.classList.add("md-nav__item--collapsed");
        var toggle = item.querySelector(":scope > .md-nav__toc-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });
    });

    toc.insertBefore(button, toc.firstChild);
  }

  function expandAncestors(el) {
    var item = el.closest(".md-nav__item--collapsible");
    while (item) {
      item.classList.remove("md-nav__item--collapsed");
      var toggle = item.querySelector(":scope > .md-nav__toc-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
      var parentNav = item.parentElement ? item.parentElement.closest(".md-nav") : null;
      item = parentNav ? parentNav.closest(".md-nav__item--collapsible") : null;
    }
  }

  function watchActiveLink() {
    var toc = document.querySelector(".md-sidebar--secondary .md-nav--secondary");
    if (!toc) return;

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        var target = mutation.target;
        if (target.classList && target.classList.contains("md-nav__link--active")) {
          expandAncestors(target);
        }
      });
    });

    observer.observe(toc, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true,
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      initTocCollapse();
      watchActiveLink();
    });
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initTocCollapse();
      watchActiveLink();
    });
  }
})();
