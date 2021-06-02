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


        const elementsByKinds = bpmnVisualization.bpmnElementsRegistry.getElementsByKinds('startEvent');

        // Add overlay
        const overlayConfig = {
          style: {
            font: {
              color: 'Black',
              size: 12,
            },
            fill: {
              color: '#ffaacc',
            },
            stroke: {
              color: 'Grey',
            }
          }
        };
        const overlay = { position: 'top-center', label: '456', ...overlayConfig };
        elementsByKinds.map(element => bpmnVisualization.bpmnElementsRegistry.addOverlays(element.bpmnSemantic.id, overlay));
      },

      resize: function(width, height) {

      }

    };
  }
});




