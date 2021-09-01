<h1 align="center">BPMN Visualization - R package - Poc</h1>
<div align="center">
    <p align="center"> <img title="BPMN Visualization - R package - Poc" src="img/readme.png"></p>
</div>
<br>

:warning: :warning: :warning: This project has been replaced by [bpmn-visualization-R](https://github.com/process-analytics/bpmn-visualization-R). :warning: :warning: :warning:

## Overview
This project is an R interface to the [bpmn-visualization](https://github.com/process-analytics/bpmn-visualization-js) library. \
Using JavaScript in R is handled by [htmlwidgets](http://www.htmlwidgets.org/) framework.


## Usage

### Installation
Install from GitHub:
```r
devtools::install_github("csouchet/bpmn-visualization-R-poc")
library(bpmn)
```

### Load the BPMN file
`bpmn` widget accepts a BPMN file (or an XML document):
```r
bpmn_file <- system.file("examples/qr-code.bpmn", package = "bpmn")
```

Or
```r
bpmn_file <- file.choose()
```

Or
```r
bpmn_file <- "path_to_bpmn_file"
```


### Initialize the R package and load the BPMN diagram
```r
bpmn(bpmn_file)
```

### Initialize the R package and load the BPMN diagram with overlays
```r
bpmn(bpmn_file, overlays = list(overlay(bpmn_element_id_1, "42"), overlay(bpmn_element_id_2, "9")))
```

## Development
### Installation
```r
devtools::install()
```

## Licenses

This package: MIT License
