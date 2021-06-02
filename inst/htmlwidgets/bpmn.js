HTMLWidgets.widget({

  name: 'bpmn',

  type: 'output',

  factory: function(containerElt) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(data) {
        const bpmnVisualization = new bpmnvisu.BpmnVisualization({ container: containerElt });

        const bpmnContent = data.bpmnContent;
        bpmnVisualization.load(bpmnContent);
      },

      resize: function(width, height) {

      }

    };
  }
});




