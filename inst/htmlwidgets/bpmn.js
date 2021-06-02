HTMLWidgets.widget({

  name: 'bpmn',

  type: 'output',

  factory: function(el) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {
        const bpmnVisualization = new bpmnvisu.BpmnVisualization({ container: el });

        const bpmnContent = x.bpmn_model;
        bpmnVisualization.load(bpmnContent);
      },

      resize: function(width, height) {

      }

    };
  }
});




