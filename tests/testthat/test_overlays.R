
context("Overlays")

test_that("Add two overlays", {

  bpmn_file <- system.file("examples/qr-code.bpmn", package = "bpmn")

  overlays <- list(

    overlay(
      elementId = "SCAN_OK",
      label = "<div style='color: red'>Mixed up the labels?</div>"
    ),
    overlay(
      elementId = "sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26",
      label = "<div style='color: red'>Manually?</div>",
    )
  )

  w1 <- bpmn(bpmn_file, overlays = overlays)
  expect_is(w1, "htmlwidget")

})
