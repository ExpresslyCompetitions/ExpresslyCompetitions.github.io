if (form.on("click", "input", function() {
  var t = $(this),
    n = t.attr("id");
  "undefined" == typeof n && (n = t.attr("name")),
  siteTracking.runTrackingCommand("event", "form", "inputField", n),
  sectionElement.hasClass("writing") === !1 && sectionElement.addClass("writing"),
  "xly-subscribe" !== t.attr("id") && e(t, !0)
})
