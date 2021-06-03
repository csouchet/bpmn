HTMLWidgets.widget({

  name: 'bpmn',

  type: 'output',

  factory: function(containerElt) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(data) {
        const bpmnVisualization = new bpmnvisu.BpmnVisualization({ container: containerElt });

        const bpmnContent = data.bpmnContent;
        bpmnVisualization.load(bpmnContent, { fit: {type: bpmnvisu.FitType.Center, margin: 30} });

        // Add overlays
        data.overlays.map(overlay => {
          const elementsByIds =  bpmnVisualization.bpmnElementsRegistry.getElementsByIds(overlay.elementId);

          if(elementsByIds) {
            const overlayConfig = elementsByIds[0].bpmnSemantic.isShape ? {
              position: 'top-center',
              label: overlay.label,
              style: {
                font: {
                  color: 'White',
                  size: 14,
                },
                fill: {
                  color: 'rgba(54,160,54)',
                },
                stroke: {
                  color: 'rgba(54,160,54)',
                }
              }
            }: {
              position: 'middle',
              label: overlay.label,
              style: {
                font: {
                  color: 'White',
                  size: 18,
                },
                fill: {
                  color: 'rgba(170,107,209)',
                },
                stroke: {
                  color: 'rgba(170,107,209)',
                }
              }
            };

            bpmnVisualization.bpmnElementsRegistry.addOverlays(overlay.elementId, overlayConfig);
          }
        });
      },

    };
  }
});




