'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var factory = require('mxgraph');
var debounce = require('lodash.debounce');
var throttle = require('lodash.throttle');
var parser = require('fast-xml-parser/src/parser');
var decode = require('entities/lib/decode');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var factory__default = /*#__PURE__*/_interopDefaultLegacy(factory);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
exports.ShapeBpmnCallActivityKind = void 0;
(function (ShapeBpmnCallActivityKind) {
    ShapeBpmnCallActivityKind["CALLING_PROCESS"] = "process";
    // CALLING_GLOBAL_TASK = 'global task',
})(exports.ShapeBpmnCallActivityKind || (exports.ShapeBpmnCallActivityKind = {}));

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The real name of the field in the BPMN XSD.
 * @category BPMN
 */
exports.ShapeBpmnElementKind = void 0;
(function (ShapeBpmnElementKind) {
    ShapeBpmnElementKind["LANE"] = "lane";
    ShapeBpmnElementKind["POOL"] = "pool";
    ShapeBpmnElementKind["CALL_ACTIVITY"] = "callActivity";
    ShapeBpmnElementKind["SUB_PROCESS"] = "subProcess";
    ShapeBpmnElementKind["TASK"] = "task";
    ShapeBpmnElementKind["TASK_USER"] = "userTask";
    ShapeBpmnElementKind["TASK_SERVICE"] = "serviceTask";
    ShapeBpmnElementKind["TASK_RECEIVE"] = "receiveTask";
    ShapeBpmnElementKind["TASK_SEND"] = "sendTask";
    ShapeBpmnElementKind["TASK_MANUAL"] = "manualTask";
    ShapeBpmnElementKind["TASK_SCRIPT"] = "scriptTask";
    ShapeBpmnElementKind["TASK_BUSINESS_RULE"] = "businessRuleTask";
    ShapeBpmnElementKind["TEXT_ANNOTATION"] = "textAnnotation";
    ShapeBpmnElementKind["GATEWAY_PARALLEL"] = "parallelGateway";
    ShapeBpmnElementKind["GATEWAY_EXCLUSIVE"] = "exclusiveGateway";
    ShapeBpmnElementKind["GATEWAY_INCLUSIVE"] = "inclusiveGateway";
    ShapeBpmnElementKind["GATEWAY_EVENT_BASED"] = "eventBasedGateway";
    // TODO: Uncomment corresponding test in test/unit/component/parser/json/BpmnJsonParser.sequenceFlow.default.test.ts
    // TODO: Uncomment corresponding test in test/unit/component/parser/json/BpmnJsonParser.sequenceFlow.conditional.test.ts
    // TODO : Uncomment corresponding line in src/model/bpmn/shape/ShapeUtil.ts
    // TODO: Uncomment corresponding test in test/unit/component/parser/json/BpmnJsonParser.flowNode.test.ts
    // TODO: Uncomment corresponding test in test/unit/component/parser/json/BpmnJsonParser.label.bounds.test.ts
    // TODO: Uncomment corresponding test in test/unit/component/parser/json/BpmnJsonParser.label.font.test.ts
    // TODO: Uncomment corresponding test in test/unit/component/parser/json/BpmnJsonParser.label.test.ts
    // GATEWAY_COMPLEX = 'complexGateway',
    ShapeBpmnElementKind["EVENT_START"] = "startEvent";
    ShapeBpmnElementKind["EVENT_END"] = "endEvent";
    ShapeBpmnElementKind["EVENT_INTERMEDIATE_CATCH"] = "intermediateCatchEvent";
    ShapeBpmnElementKind["EVENT_INTERMEDIATE_THROW"] = "intermediateThrowEvent";
    ShapeBpmnElementKind["EVENT_BOUNDARY"] = "boundaryEvent";
})(exports.ShapeBpmnElementKind || (exports.ShapeBpmnElementKind = {}));

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Values available for the `eventGatewayType` property in the BPMN specification.
 * @internal
 */
exports.ShapeBpmnEventBasedGatewayKind = void 0;
(function (ShapeBpmnEventBasedGatewayKind) {
    ShapeBpmnEventBasedGatewayKind["Exclusive"] = "Exclusive";
    /** When no type is provided in the BPMN source. */
    ShapeBpmnEventBasedGatewayKind["None"] = "None";
    ShapeBpmnEventBasedGatewayKind["Parallel"] = "Parallel";
})(exports.ShapeBpmnEventBasedGatewayKind || (exports.ShapeBpmnEventBasedGatewayKind = {}));

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Base name of the EventDefinition fields in the BPMN XSD for event kinds. In the xsd, the value is <enum_value>EventDefinition.
 *
 * For instance, TERMINATE --> terminateEventDefinition
 * @category BPMN
 */
exports.ShapeBpmnEventKind = void 0;
(function (ShapeBpmnEventKind) {
    ShapeBpmnEventKind["NONE"] = "none";
    ShapeBpmnEventKind["TERMINATE"] = "terminate";
    ShapeBpmnEventKind["CANCEL"] = "cancel";
    ShapeBpmnEventKind["COMPENSATION"] = "compensate";
    ShapeBpmnEventKind["CONDITIONAL"] = "conditional";
    ShapeBpmnEventKind["ERROR"] = "error";
    ShapeBpmnEventKind["ESCALATION"] = "escalation";
    ShapeBpmnEventKind["LINK"] = "link";
    ShapeBpmnEventKind["MESSAGE"] = "message";
    ShapeBpmnEventKind["SIGNAL"] = "signal";
    ShapeBpmnEventKind["TIMER"] = "timer";
})(exports.ShapeBpmnEventKind || (exports.ShapeBpmnEventKind = {}));
/**
 * Elements that are effectively used in BPMN diagram as base for eventDefinition i.e all {@link ShapeBpmnEventKind} elements except {@link ShapeBpmnEventKind.NONE}
 * @internal
 */
const bpmnEventKinds = Object.values(exports.ShapeBpmnEventKind).filter(kind => {
    return kind != exports.ShapeBpmnEventKind.NONE;
});
/**
 * List supported events in addition to the NONE event.
 *
 * Temporarily used until we support all events
 * @internal
 */
// TODO When a new kind is supported, uncomment the corresponding line in test/unit/component/parser/json/BpmnJsonParser.event.test.ts
const supportedBpmnEventKinds = [
    exports.ShapeBpmnEventKind.TERMINATE,
    exports.ShapeBpmnEventKind.TIMER,
    exports.ShapeBpmnEventKind.MESSAGE,
    exports.ShapeBpmnEventKind.SIGNAL,
    exports.ShapeBpmnEventKind.LINK,
    exports.ShapeBpmnEventKind.ERROR,
    exports.ShapeBpmnEventKind.COMPENSATION,
    exports.ShapeBpmnEventKind.CANCEL,
    exports.ShapeBpmnEventKind.CONDITIONAL,
    exports.ShapeBpmnEventKind.ESCALATION,
];

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
exports.ShapeBpmnMarkerKind = void 0;
(function (ShapeBpmnMarkerKind) {
    ShapeBpmnMarkerKind["ADHOC"] = "adhoc";
    ShapeBpmnMarkerKind["COMPENSATION"] = "compensation";
    ShapeBpmnMarkerKind["EXPAND"] = "expand";
    ShapeBpmnMarkerKind["LOOP"] = "loop";
    ShapeBpmnMarkerKind["MULTI_INSTANCE_PARALLEL"] = "parallel multi instance";
    ShapeBpmnMarkerKind["MULTI_INSTANCE_SEQUENTIAL"] = "sequential multi instance";
})(exports.ShapeBpmnMarkerKind || (exports.ShapeBpmnMarkerKind = {}));

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Base name of the BPMN specification for sub-process kinds.
 * @category BPMN
 */
exports.ShapeBpmnSubProcessKind = void 0;
(function (ShapeBpmnSubProcessKind) {
    ShapeBpmnSubProcessKind["EMBEDDED"] = "embedded";
    ShapeBpmnSubProcessKind["EVENT"] = "event";
    // TRANSACTION = 'transaction',
    // AD_HOC = 'ad_hoc',
})(exports.ShapeBpmnSubProcessKind || (exports.ShapeBpmnSubProcessKind = {}));

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO move to ShapeBpmnElementKind? and rename into ShapeBpmnElementKindUtil?
// TODO bpmnEventKinds currently hosted in ProcessConverter may be hosted here
/**
 * @internal
 */
class ShapeUtil {
    static filterKind(suffix, ignoreCase = false) {
        return Object.values(exports.ShapeBpmnElementKind).filter(kind => {
            if (ignoreCase) {
                return kind.endsWith(suffix) || kind.toLowerCase().endsWith(suffix.toLowerCase());
            }
            return kind.endsWith(suffix);
        });
    }
    static isEvent(kind) {
        return this.EVENT_KINDS.includes(kind);
    }
    static isCallActivity(kind) {
        return exports.ShapeBpmnElementKind.CALL_ACTIVITY === kind;
    }
    static isSubProcess(kind) {
        return exports.ShapeBpmnElementKind.SUB_PROCESS === kind;
    }
    static isBoundaryEvent(kind) {
        return exports.ShapeBpmnElementKind.EVENT_BOUNDARY === kind;
    }
    static isStartEvent(kind) {
        return exports.ShapeBpmnElementKind.EVENT_START === kind;
    }
    static canHaveNoneEvent(kind) {
        return exports.ShapeBpmnElementKind.EVENT_INTERMEDIATE_THROW === kind || exports.ShapeBpmnElementKind.EVENT_END === kind || exports.ShapeBpmnElementKind.EVENT_START === kind;
    }
    static isActivity(kind) {
        return this.ACTIVITY_KINDS.includes(kind);
    }
    static isWithDefaultSequenceFlow(kind) {
        return this.FLOWNODE_WITH_DEFAULT_SEQUENCE_FLOW_KINDS.includes(kind);
    }
    // TODO should we clone the array to avoid modifications of this ref array by client code?
    // topLevelBpmnEventKinds to not mixed with the bpmnEventKinds that currently are the list of non None event subtypes
    static topLevelBpmnEventKinds() {
        return this.EVENT_KINDS;
    }
    static activityKinds() {
        return this.ACTIVITY_KINDS;
    }
    static taskKinds() {
        return this.TASK_KINDS;
    }
    static gatewayKinds() {
        return this.GATEWAY_KINDS;
    }
    static flowNodeKinds() {
        return Object.values(exports.ShapeBpmnElementKind).filter(kind => {
            return !ShapeUtil.isPoolOrLane(kind);
        });
    }
    static isPoolOrLane(kind) {
        return kind == exports.ShapeBpmnElementKind.POOL || kind == exports.ShapeBpmnElementKind.LANE;
    }
}
ShapeUtil.EVENT_KINDS = ShapeUtil.filterKind('Event');
ShapeUtil.GATEWAY_KINDS = ShapeUtil.filterKind('Gateway');
// TODO : To modify when we will support globalTask (They are not considered as Task in the BPMN Semantic)
ShapeUtil.TASK_KINDS = ShapeUtil.filterKind('Task', true);
ShapeUtil.ACTIVITY_KINDS = [...ShapeUtil.TASK_KINDS, exports.ShapeBpmnElementKind.CALL_ACTIVITY, exports.ShapeBpmnElementKind.SUB_PROCESS];
ShapeUtil.FLOWNODE_WITH_DEFAULT_SEQUENCE_FLOW_KINDS = [
    ...ShapeUtil.ACTIVITY_KINDS,
    exports.ShapeBpmnElementKind.GATEWAY_EXCLUSIVE,
    exports.ShapeBpmnElementKind.GATEWAY_INCLUSIVE,
    // TODO: Uncomment when complex gateway are supported
    // ShapeBpmnElementKind.GATEWAY_COMPLEX,
];

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
var SequenceFlowKind;
(function (SequenceFlowKind) {
    SequenceFlowKind["NORMAL"] = "normal";
    SequenceFlowKind["DEFAULT"] = "default";
    SequenceFlowKind["CONDITIONAL_FROM_ACTIVITY"] = "conditional_from_activity";
    SequenceFlowKind["CONDITIONAL_FROM_GATEWAY"] = "conditional_from_gateway";
})(SequenceFlowKind || (SequenceFlowKind = {}));

/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mxgraph = initialize();
function initialize() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // set options globally, as it is not working when passing options to the factory (https://github.com/jgraph/mxgraph/issues/479)
    window['mxLoadResources'] = false;
    window['mxLoadStylesheets'] = false;
    // extras, otherwise we got 'Uncaught ReferenceError: assignment to undeclared variable mx...'
    window['mxForceIncludes'] = false;
    window['mxResourceExtension'] = '.txt';
    /* eslint-enable @typescript-eslint/no-explicit-any */
    return factory__default['default']({});
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.MarkerIdentifier = void 0;
(function (MarkerIdentifier) {
    MarkerIdentifier["ARROW_DASH"] = "bpmn.dash";
})(exports.MarkerIdentifier || (exports.MarkerIdentifier = {}));
/**
 * Store all rendering defaults used by `bpmn-visualization`.
 * @experimental The way we store and allow to change the defaults in the current form is subject to change without prior any notice.
 */
exports.StyleDefault = void 0;
(function (StyleDefault) {
    StyleDefault[StyleDefault["STROKE_WIDTH_THIN"] = 2] = "STROKE_WIDTH_THIN";
    StyleDefault[StyleDefault["STROKE_WIDTH_THICK"] = 5] = "STROKE_WIDTH_THICK";
    StyleDefault[StyleDefault["SHAPE_ACTIVITY_BOTTOM_MARGIN"] = 7] = "SHAPE_ACTIVITY_BOTTOM_MARGIN";
    StyleDefault[StyleDefault["SHAPE_ACTIVITY_TOP_MARGIN"] = 7] = "SHAPE_ACTIVITY_TOP_MARGIN";
    StyleDefault[StyleDefault["SHAPE_ACTIVITY_LEFT_MARGIN"] = 7] = "SHAPE_ACTIVITY_LEFT_MARGIN";
    StyleDefault[StyleDefault["SHAPE_ACTIVITY_FROM_CENTER_MARGIN"] = 7] = "SHAPE_ACTIVITY_FROM_CENTER_MARGIN";
    StyleDefault[StyleDefault["SHAPE_ACTIVITY_MARKER_ICON_MARGIN"] = 5] = "SHAPE_ACTIVITY_MARKER_ICON_MARGIN";
    StyleDefault[StyleDefault["SHAPE_ACTIVITY_MARKER_ICON_SIZE"] = 20] = "SHAPE_ACTIVITY_MARKER_ICON_SIZE";
    StyleDefault[StyleDefault["POOL_LABEL_SIZE"] = 30] = "POOL_LABEL_SIZE";
    StyleDefault[StyleDefault["LANE_LABEL_SIZE"] = 30] = "LANE_LABEL_SIZE";
    StyleDefault["DEFAULT_FILL_COLOR"] = "White";
    StyleDefault["DEFAULT_STROKE_COLOR"] = "Black";
    StyleDefault["DEFAULT_FONT_FAMILY"] = "Arial, Helvetica, sans-serif";
    StyleDefault[StyleDefault["DEFAULT_FONT_SIZE"] = 11] = "DEFAULT_FONT_SIZE";
    StyleDefault["DEFAULT_FONT_COLOR"] = "Black";
    StyleDefault[StyleDefault["DEFAULT_MARGIN"] = 0] = "DEFAULT_MARGIN";
    StyleDefault[StyleDefault["DEFAULT_DASHED"] = 0] = "DEFAULT_DASHED";
    StyleDefault[StyleDefault["DEFAULT_FIX_DASH"] = 0] = "DEFAULT_FIX_DASH";
    StyleDefault["DEFAULT_DASH_PATTERN"] = "3 3";
    // Overlay defaults
    StyleDefault["DEFAULT_OVERLAY_FILL_COLOR"] = "White";
    StyleDefault[StyleDefault["DEFAULT_OVERLAY_FILL_OPACITY"] = 100] = "DEFAULT_OVERLAY_FILL_OPACITY";
    StyleDefault["DEFAULT_OVERLAY_STROKE_COLOR"] = "Black";
    StyleDefault[StyleDefault["DEFAULT_OVERLAY_STROKE_WIDTH"] = 1] = "DEFAULT_OVERLAY_STROKE_WIDTH";
    StyleDefault[StyleDefault["DEFAULT_OVERLAY_FONT_SIZE"] = 11] = "DEFAULT_OVERLAY_FONT_SIZE";
    StyleDefault["DEFAULT_OVERLAY_FONT_COLOR"] = "Black";
})(exports.StyleDefault || (exports.StyleDefault = {}));
exports.StyleIdentifier = void 0;
(function (StyleIdentifier) {
    StyleIdentifier["BPMN_STYLE_EVENT_KIND"] = "bpmn.eventKind";
    StyleIdentifier["BPMN_STYLE_SUB_PROCESS_KIND"] = "bpmn.subProcessKind";
    StyleIdentifier["BPMN_STYLE_IS_INTERRUPTING"] = "bpmn.isInterrupting";
    StyleIdentifier["BPMN_STYLE_MARKERS"] = "bpmn.markers";
    StyleIdentifier["BPMN_STYLE_INSTANTIATING"] = "bpmn.isInstantiating";
    StyleIdentifier["BPMN_STYLE_IS_INITIATING"] = "bpmn.isInitiating";
    StyleIdentifier["BPMN_STYLE_MESSAGE_FLOW_ICON"] = "bpmn.messageFlowIcon";
    StyleIdentifier["BPMN_STYLE_EVENT_BASED_GATEWAY_KIND"] = "bpmn.gatewayKind";
    StyleIdentifier["BPMN_STYLE_EXTRA_CSS_CLASSES"] = "bpmn.extra.css.classes";
})(exports.StyleIdentifier || (exports.StyleIdentifier = {}));
/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
class StyleUtils {
    static getFillColor(style) {
        return mxgraph.mxUtils.getValue(style, mxgraph.mxConstants.STYLE_FILLCOLOR, exports.StyleDefault.DEFAULT_FILL_COLOR);
    }
    static getStrokeColor(style) {
        return mxgraph.mxUtils.getValue(style, mxgraph.mxConstants.STYLE_STROKECOLOR, exports.StyleDefault.DEFAULT_STROKE_COLOR);
    }
    static getStrokeWidth(style) {
        return mxgraph.mxUtils.getValue(style, mxgraph.mxConstants.STYLE_STROKEWIDTH, exports.StyleDefault.STROKE_WIDTH_THIN);
    }
    static getMargin(style) {
        return mxgraph.mxUtils.getValue(style, mxgraph.mxConstants.STYLE_MARGIN, exports.StyleDefault.DEFAULT_MARGIN);
    }
    static isDashed(style) {
        return mxgraph.mxUtils.getValue(style, mxgraph.mxConstants.STYLE_DASHED, exports.StyleDefault.DEFAULT_DASHED);
    }
    static isFixDash(style) {
        return mxgraph.mxUtils.getValue(style, mxgraph.mxConstants.STYLE_FIX_DASH, exports.StyleDefault.DEFAULT_FIX_DASH);
    }
    static getDashPattern(style) {
        return mxgraph.mxUtils.getValue(style, mxgraph.mxConstants.STYLE_DASH_PATTERN, exports.StyleDefault.DEFAULT_DASH_PATTERN);
    }
    static getBpmnEventKind(style) {
        return mxgraph.mxUtils.getValue(style, exports.StyleIdentifier.BPMN_STYLE_EVENT_KIND, exports.ShapeBpmnEventKind.NONE);
    }
    static getBpmnSubProcessKind(style) {
        return mxgraph.mxUtils.getValue(style, exports.StyleIdentifier.BPMN_STYLE_SUB_PROCESS_KIND, undefined);
    }
    static getBpmnIsInterrupting(style) {
        return mxgraph.mxUtils.getValue(style, exports.StyleIdentifier.BPMN_STYLE_IS_INTERRUPTING, undefined);
    }
    static getBpmnMarkers(style) {
        return mxgraph.mxUtils.getValue(style, exports.StyleIdentifier.BPMN_STYLE_MARKERS, undefined);
    }
    static getBpmnIsInstantiating(style) {
        return JSON.parse(mxgraph.mxUtils.getValue(style, exports.StyleIdentifier.BPMN_STYLE_INSTANTIATING, false));
    }
    static getBpmnIsInitiating(style) {
        return mxgraph.mxUtils.getValue(style, exports.StyleIdentifier.BPMN_STYLE_IS_INITIATING, undefined);
    }
    static getBpmnIsParallelEventBasedGateway(style) {
        return (mxgraph.mxUtils.getValue(style, exports.StyleIdentifier.BPMN_STYLE_EVENT_BASED_GATEWAY_KIND, exports.ShapeBpmnEventBasedGatewayKind.Exclusive) == exports.ShapeBpmnEventBasedGatewayKind.Parallel);
    }
}
/* eslint-enable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class Shape {
    constructor(id, bpmnElement, bounds, label, isHorizontal) {
        this.id = id;
        this.bpmnElement = bpmnElement;
        this.bounds = bounds;
        this.label = label;
        this.isHorizontal = isHorizontal;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class ShapeBpmnElement {
    constructor(id, name, kind, parentId, instantiate = false) {
        this.id = id;
        this.name = name;
        this.kind = kind;
        this.parentId = parentId;
        this.instantiate = instantiate;
    }
}
/**
 * @internal
 */
class ShapeBpmnActivity extends ShapeBpmnElement {
    constructor(id, name, kind, parentId, instantiate, markers = []) {
        super(id, name, kind, parentId, instantiate);
        this.markers = markers;
    }
}
/**
 * @internal
 */
class ShapeBpmnCallActivity extends ShapeBpmnActivity {
    constructor(id, name, callActivityKind, parentId, markers) {
        super(id, name, exports.ShapeBpmnElementKind.CALL_ACTIVITY, parentId, undefined, markers);
        this.callActivityKind = callActivityKind;
    }
}
/**
 * @internal
 */
class ShapeBpmnSubProcess extends ShapeBpmnActivity {
    constructor(id, name, subProcessKind, parentId, markers) {
        super(id, name, exports.ShapeBpmnElementKind.SUB_PROCESS, parentId, undefined, markers);
        this.subProcessKind = subProcessKind;
    }
}
/**
 * @internal
 */
class ShapeBpmnEvent extends ShapeBpmnElement {
    constructor(id, name, elementKind, eventKind, parentId) {
        super(id, name, elementKind, parentId);
        this.eventKind = eventKind;
    }
}
/**
 * @internal
 */
class ShapeBpmnStartEvent extends ShapeBpmnEvent {
    constructor(id, name, eventKind, parentId, isInterrupting) {
        super(id, name, exports.ShapeBpmnElementKind.EVENT_START, eventKind, parentId);
        this.isInterrupting = isInterrupting;
    }
}
/**
 * @internal
 */
class ShapeBpmnBoundaryEvent extends ShapeBpmnEvent {
    constructor(id, name, eventKind, parentId, isInterrupting = true) {
        super(id, name, exports.ShapeBpmnElementKind.EVENT_BOUNDARY, eventKind, parentId);
        this.isInterrupting = isInterrupting;
    }
}
/**
 * @internal
 */
class ShapeBpmnEventBasedGateway extends ShapeBpmnElement {
    constructor(id, name, parentId, instantiate, gatewayKind = exports.ShapeBpmnEventBasedGatewayKind.None) {
        super(id, name, exports.ShapeBpmnElementKind.GATEWAY_EVENT_BASED, parentId, instantiate);
        this.gatewayKind = gatewayKind;
    }
}
/**
 * @internal
 */
class Participant {
    constructor(id, name, processRef) {
        this.id = id;
        this.name = name;
        this.processRef = processRef;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The real name of the field in the BPMN XSD.
 * @category BPMN
 */
var FlowKind;
(function (FlowKind) {
    FlowKind["SEQUENCE_FLOW"] = "sequenceFlow";
    FlowKind["MESSAGE_FLOW"] = "messageFlow";
    FlowKind["ASSOCIATION_FLOW"] = "association";
})(FlowKind || (FlowKind = {}));

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The real name of the field in the BPMN XSD
 * @internal
 */
var AssociationDirectionKind;
(function (AssociationDirectionKind) {
    AssociationDirectionKind["NONE"] = "None";
    AssociationDirectionKind["ONE"] = "One";
    AssociationDirectionKind["BOTH"] = "Both";
})(AssociationDirectionKind || (AssociationDirectionKind = {}));

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class Flow {
    constructor(id, name, kind, sourceRefId, targetRefId) {
        this.id = id;
        this.name = name;
        this.kind = kind;
        this.sourceRefId = sourceRefId;
        this.targetRefId = targetRefId;
    }
}
/**
 * @internal
 */
class SequenceFlow extends Flow {
    constructor(id, name, sourceRefId, targetRefId, sequenceFlowKind = SequenceFlowKind.NORMAL) {
        super(id, name, FlowKind.SEQUENCE_FLOW, sourceRefId, targetRefId);
        this.sequenceFlowKind = sequenceFlowKind;
    }
}
/**
 * @internal
 */
class MessageFlow extends Flow {
    constructor(id, name, sourceRefId, targetRefId) {
        super(id, name, FlowKind.MESSAGE_FLOW, sourceRefId, targetRefId);
    }
}
/**
 * @internal
 */
class AssociationFlow extends Flow {
    constructor(id, name, sourceRefId, targetRefId, associationDirectionKind = AssociationDirectionKind.NONE) {
        super(id, name, FlowKind.ASSOCIATION_FLOW, sourceRefId, targetRefId);
        this.associationDirectionKind = associationDirectionKind;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class StyleConfigurator {
    constructor(graph) {
        this.graph = graph;
        this.specificFlowStyles = new Map([
            [
                FlowKind.SEQUENCE_FLOW,
                (style) => {
                    style[mxgraph.mxConstants.STYLE_ENDARROW] = mxgraph.mxConstants.ARROW_BLOCK_THIN;
                },
            ],
            [
                FlowKind.MESSAGE_FLOW,
                (style) => {
                    style[mxgraph.mxConstants.STYLE_DASHED] = true;
                    style[mxgraph.mxConstants.STYLE_DASH_PATTERN] = '8 5';
                    style[mxgraph.mxConstants.STYLE_STARTARROW] = mxgraph.mxConstants.ARROW_OVAL;
                    style[mxgraph.mxConstants.STYLE_STARTSIZE] = 8;
                    style[mxgraph.mxConstants.STYLE_STARTFILL] = false;
                    style[mxgraph.mxConstants.STYLE_ENDARROW] = mxgraph.mxConstants.ARROW_BLOCK_THIN;
                    style[mxgraph.mxConstants.STYLE_ENDFILL] = false;
                },
            ],
            [
                FlowKind.ASSOCIATION_FLOW,
                (style) => {
                    style[mxgraph.mxConstants.STYLE_DASHED] = true;
                    style[mxgraph.mxConstants.STYLE_DASH_PATTERN] = '1 2';
                    style[mxgraph.mxConstants.STYLE_ENDARROW] = mxgraph.mxConstants.ARROW_OPEN_THIN;
                    style[mxgraph.mxConstants.STYLE_STARTARROW] = mxgraph.mxConstants.ARROW_OPEN_THIN;
                    style[mxgraph.mxConstants.STYLE_STARTSIZE] = 12;
                },
            ],
        ]);
        this.specificSequenceFlowStyles = new Map([
            [
                SequenceFlowKind.DEFAULT,
                (style) => {
                    style[mxgraph.mxConstants.STYLE_STARTARROW] = exports.MarkerIdentifier.ARROW_DASH;
                },
            ],
            [
                SequenceFlowKind.CONDITIONAL_FROM_ACTIVITY,
                (style) => {
                    style[mxgraph.mxConstants.STYLE_STARTARROW] = mxgraph.mxConstants.ARROW_DIAMOND_THIN;
                    style[mxgraph.mxConstants.STYLE_STARTSIZE] = 18;
                    style[mxgraph.mxConstants.STYLE_STARTFILL] = false;
                },
            ],
        ]);
        this.specificAssociationFlowStyles = new Map([
            [
                AssociationDirectionKind.NONE,
                (style) => {
                    style[mxgraph.mxConstants.STYLE_STARTARROW] = undefined;
                    style[mxgraph.mxConstants.STYLE_ENDARROW] = undefined;
                    style[mxgraph.mxConstants.STYLE_EDGE] = undefined; // ensure no orthogonal segments, see also https://github.com/process-analytics/bpmn-visualization-js/issues/295
                },
            ],
            [
                AssociationDirectionKind.ONE,
                (style) => {
                    style[mxgraph.mxConstants.STYLE_STARTARROW] = undefined;
                    style[mxgraph.mxConstants.STYLE_EDGE] = undefined; // ensure no orthogonal segments, see also https://github.com/process-analytics/bpmn-visualization-js/issues/295
                },
            ],
            [
                AssociationDirectionKind.BOTH,
                (style) => {
                    style[mxgraph.mxConstants.STYLE_EDGE] = undefined; // ensure no orthogonal segments, see also https://github.com/process-analytics/bpmn-visualization-js/issues/295
                },
            ],
        ]);
    }
    configureStyles() {
        mxgraph.mxConstants.RECTANGLE_ROUNDING_FACTOR = 0.1;
        this.configureDefaultVertexStyle();
        this.configurePoolStyle();
        this.configureLaneStyle();
        this.configureTextAnnotationStyle();
        this.configureActivityStyles();
        this.configureEventStyles();
        this.configureGatewayStyles();
        this.configureDefaultEdgeStyle();
        this.configureFlowStyles();
    }
    getStylesheet() {
        return this.graph.getStylesheet();
    }
    getDefaultVertexStyle() {
        return this.getStylesheet().getDefaultVertexStyle();
    }
    getDefaultEdgeStyle() {
        return this.getStylesheet().getDefaultEdgeStyle();
    }
    cloneDefaultVertexStyle() {
        const defaultStyle = this.getDefaultVertexStyle();
        return mxgraph.mxUtils.clone(defaultStyle);
    }
    cloneDefaultEdgeStyle() {
        const defaultStyle = this.getDefaultEdgeStyle();
        return mxgraph.mxUtils.clone(defaultStyle);
    }
    putCellStyle(name, style) {
        this.getStylesheet().putCellStyle(name, style);
    }
    configureDefaultVertexStyle() {
        const style = this.getDefaultVertexStyle();
        this.configureCommonDefaultStyle(style);
    }
    configurePoolStyle() {
        const style = this.cloneDefaultVertexStyle();
        style[mxgraph.mxConstants.STYLE_SHAPE] = mxgraph.mxConstants.SHAPE_SWIMLANE;
        // TODO Remove when the bounds of the pool label is implemented
        style[mxgraph.mxConstants.STYLE_VERTICAL_ALIGN] = mxgraph.mxConstants.ALIGN_MIDDLE;
        style[mxgraph.mxConstants.STYLE_ALIGN] = mxgraph.mxConstants.ALIGN_CENTER;
        // TODO manage pool text area rendering. Maybe we can calculate it from the label size/bounds
        // most of BPMN pool are ok when setting it to 30
        style[mxgraph.mxConstants.STYLE_STARTSIZE] = exports.StyleDefault.POOL_LABEL_SIZE;
        this.graph.getStylesheet().putCellStyle(exports.ShapeBpmnElementKind.POOL, style);
    }
    configureLaneStyle() {
        const style = this.cloneDefaultVertexStyle();
        style[mxgraph.mxConstants.STYLE_SHAPE] = mxgraph.mxConstants.SHAPE_SWIMLANE;
        // TODO Remove when the bounds of the lane label is implemented
        style[mxgraph.mxConstants.STYLE_VERTICAL_ALIGN] = mxgraph.mxConstants.ALIGN_MIDDLE;
        style[mxgraph.mxConstants.STYLE_ALIGN] = mxgraph.mxConstants.ALIGN_CENTER;
        style[mxgraph.mxConstants.STYLE_SWIMLANE_LINE] = 0; // hide the line between the title region and the content area
        // TODO manage lane text area rendering. there is no Label neither the size available (we have only attribute name="Text of the Label")
        // perhaps it can be calculated as a difference of starting point (either x or y) between pool, lane, sub-lane ?
        style[mxgraph.mxConstants.STYLE_STARTSIZE] = exports.StyleDefault.LANE_LABEL_SIZE;
        this.graph.getStylesheet().putCellStyle(exports.ShapeBpmnElementKind.LANE, style);
    }
    configureEventStyles() {
        ShapeUtil.topLevelBpmnEventKinds().forEach(kind => {
            const style = this.cloneDefaultVertexStyle();
            style[mxgraph.mxConstants.STYLE_SHAPE] = kind;
            style[mxgraph.mxConstants.STYLE_PERIMETER] = mxgraph.mxPerimeter.EllipsePerimeter;
            style[mxgraph.mxConstants.STYLE_VERTICAL_LABEL_POSITION] = mxgraph.mxConstants.ALIGN_BOTTOM;
            this.putCellStyle(kind, style);
        });
    }
    configureTextAnnotationStyle() {
        const style = this.cloneDefaultVertexStyle();
        style[mxgraph.mxConstants.STYLE_SHAPE] = exports.ShapeBpmnElementKind.TEXT_ANNOTATION;
        style[mxgraph.mxConstants.STYLE_VERTICAL_ALIGN] = mxgraph.mxConstants.ALIGN_MIDDLE;
        style[mxgraph.mxConstants.STYLE_ALIGN] = mxgraph.mxConstants.ALIGN_LEFT;
        style[mxgraph.mxConstants.STYLE_SPACING_LEFT] = 5;
        this.putCellStyle(exports.ShapeBpmnElementKind.TEXT_ANNOTATION, style);
    }
    configureActivityStyles() {
        ShapeUtil.activityKinds().forEach(kind => {
            const style = this.cloneDefaultVertexStyle();
            style[mxgraph.mxConstants.STYLE_SHAPE] = kind;
            style[mxgraph.mxConstants.STYLE_VERTICAL_ALIGN] = mxgraph.mxConstants.ALIGN_MIDDLE;
            this.putCellStyle(kind, style);
        });
    }
    configureGatewayStyles() {
        ShapeUtil.gatewayKinds().forEach(kind => {
            const style = this.cloneDefaultVertexStyle();
            style[mxgraph.mxConstants.STYLE_SHAPE] = kind;
            style[mxgraph.mxConstants.STYLE_PERIMETER] = mxgraph.mxPerimeter.RhombusPerimeter;
            style[mxgraph.mxConstants.STYLE_VERTICAL_ALIGN] = mxgraph.mxConstants.ALIGN_TOP;
            // Default positioning in case there is no BPMN LabelStyle
            style[mxgraph.mxConstants.STYLE_LABEL_POSITION] = mxgraph.mxConstants.ALIGN_LEFT;
            style[mxgraph.mxConstants.STYLE_VERTICAL_LABEL_POSITION] = mxgraph.mxConstants.ALIGN_TOP;
            this.putCellStyle(kind, style);
        });
    }
    configureDefaultEdgeStyle() {
        const style = this.getDefaultEdgeStyle();
        style[mxgraph.mxConstants.STYLE_EDGE] = mxgraph.mxConstants.EDGESTYLE_SEGMENT;
        style[mxgraph.mxConstants.STYLE_ENDSIZE] = 12;
        style[mxgraph.mxConstants.STYLE_STROKEWIDTH] = 1.5;
        style[mxgraph.mxConstants.STYLE_ROUNDED] = 1;
        style[mxgraph.mxConstants.STYLE_ARCSIZE] = 5;
        style[mxgraph.mxConstants.STYLE_VERTICAL_ALIGN] = mxgraph.mxConstants.ALIGN_BOTTOM;
        delete style[mxgraph.mxConstants.STYLE_ENDARROW];
        this.configureCommonDefaultStyle(style);
    }
    configureCommonDefaultStyle(style) {
        style[mxgraph.mxConstants.STYLE_FONTFAMILY] = exports.StyleDefault.DEFAULT_FONT_FAMILY;
        style[mxgraph.mxConstants.STYLE_FONTSIZE] = exports.StyleDefault.DEFAULT_FONT_SIZE;
        style[mxgraph.mxConstants.STYLE_FONTCOLOR] = exports.StyleDefault.DEFAULT_FONT_COLOR;
        style[mxgraph.mxConstants.STYLE_FILLCOLOR] = exports.StyleDefault.DEFAULT_FILL_COLOR;
        style[mxgraph.mxConstants.STYLE_STROKECOLOR] = exports.StyleDefault.DEFAULT_STROKE_COLOR;
        style[mxgraph.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = mxgraph.mxConstants.NONE;
        // only works with html labels (enabled by MxGraphConfigurator)
        style[mxgraph.mxConstants.STYLE_WHITE_SPACE] = 'wrap';
    }
    configureEdgeStyles(styleKinds, specificStyles) {
        styleKinds.forEach(kind => {
            const style = this.cloneDefaultEdgeStyle();
            const updateEdgeStyle = specificStyles.get(kind) ||
                (() => {
                    // Do nothing
                });
            updateEdgeStyle(style);
            this.graph.getStylesheet().putCellStyle(kind.toString(), style);
        });
    }
    configureSequenceFlowStyles() {
        this.configureEdgeStyles(Object.values(SequenceFlowKind), this.specificSequenceFlowStyles);
    }
    configureAssociationFlowStyles() {
        this.configureEdgeStyles(Object.values(AssociationDirectionKind), this.specificAssociationFlowStyles);
    }
    configureFlowStyles() {
        this.configureEdgeStyles(Object.values(FlowKind), this.specificFlowStyles);
        this.configureSequenceFlowStyles();
        this.configureAssociationFlowStyles();
    }
    computeStyle(bpmnCell, labelBounds) {
        const styles = [bpmnCell.bpmnElement.kind];
        let shapeStyleValues;
        if (bpmnCell instanceof Shape) {
            shapeStyleValues = this.computeShapeStyle(bpmnCell);
        }
        else {
            styles.push(...this.computeEdgeStyle(bpmnCell));
            shapeStyleValues = new Map();
        }
        const fontStyleValues = this.computeFontStyleValues(bpmnCell);
        const labelStyleValues = this.computeLabelStyleValues(bpmnCell, labelBounds);
        return [] //
            .concat([...styles])
            .concat([...shapeStyleValues, ...fontStyleValues, ...labelStyleValues].filter(([, v]) => v && v != 'undefined').map(([key, value]) => key + '=' + value))
            .join(';');
    }
    computeShapeStyle(shape) {
        const styleValues = new Map();
        const bpmnElement = shape.bpmnElement;
        if (bpmnElement instanceof ShapeBpmnEvent) {
            styleValues.set(exports.StyleIdentifier.BPMN_STYLE_EVENT_KIND, bpmnElement.eventKind);
            if (bpmnElement instanceof ShapeBpmnBoundaryEvent || (bpmnElement instanceof ShapeBpmnStartEvent && bpmnElement.isInterrupting !== undefined)) {
                styleValues.set(exports.StyleIdentifier.BPMN_STYLE_IS_INTERRUPTING, String(bpmnElement.isInterrupting));
            }
        }
        else if (bpmnElement instanceof ShapeBpmnActivity) {
            if (bpmnElement instanceof ShapeBpmnSubProcess) {
                styleValues.set(exports.StyleIdentifier.BPMN_STYLE_SUB_PROCESS_KIND, bpmnElement.subProcessKind);
            }
            else if (bpmnElement.kind === exports.ShapeBpmnElementKind.TASK_RECEIVE) {
                styleValues.set(exports.StyleIdentifier.BPMN_STYLE_INSTANTIATING, String(bpmnElement.instantiate));
            }
            const markers = bpmnElement.markers;
            if (markers.length > 0) {
                styleValues.set(exports.StyleIdentifier.BPMN_STYLE_MARKERS, markers.join(','));
            }
        }
        else if (ShapeUtil.isPoolOrLane(bpmnElement.kind)) {
            // mxgraph.mxConstants.STYLE_HORIZONTAL is for the label
            // In BPMN, isHorizontal is for the Shape
            styleValues.set(mxgraph.mxConstants.STYLE_HORIZONTAL, shape.isHorizontal ? '0' : '1');
        }
        else if (bpmnElement instanceof ShapeBpmnEventBasedGateway) {
            styleValues.set(exports.StyleIdentifier.BPMN_STYLE_INSTANTIATING, String(bpmnElement.instantiate));
            styleValues.set(exports.StyleIdentifier.BPMN_STYLE_EVENT_BASED_GATEWAY_KIND, String(bpmnElement.gatewayKind));
        }
        return styleValues;
    }
    computeEdgeStyle(edge) {
        const styles = [];
        const bpmnElement = edge.bpmnElement;
        if (bpmnElement instanceof SequenceFlow) {
            styles.push(bpmnElement.sequenceFlowKind);
        }
        if (bpmnElement instanceof AssociationFlow) {
            styles.push(bpmnElement.associationDirectionKind);
        }
        return styles;
    }
    computeFontStyleValues(bpmnCell) {
        var _a;
        const styleValues = new Map();
        const font = (_a = bpmnCell.label) === null || _a === void 0 ? void 0 : _a.font;
        if (font) {
            styleValues.set(mxgraph.mxConstants.STYLE_FONTFAMILY, font.name);
            styleValues.set(mxgraph.mxConstants.STYLE_FONTSIZE, font.size);
            styleValues.set(mxgraph.mxConstants.STYLE_FONTSTYLE, StyleConfigurator.getFontStyleValue(font));
        }
        return styleValues;
    }
    computeLabelStyleValues(bpmnCell, labelBounds) {
        const styleValues = new Map();
        const bpmnElement = bpmnCell.bpmnElement;
        if (labelBounds) {
            styleValues.set(mxgraph.mxConstants.STYLE_VERTICAL_ALIGN, mxgraph.mxConstants.ALIGN_TOP);
            if (bpmnCell.bpmnElement.kind != exports.ShapeBpmnElementKind.TEXT_ANNOTATION) {
                styleValues.set(mxgraph.mxConstants.STYLE_ALIGN, mxgraph.mxConstants.ALIGN_CENTER);
            }
            if (bpmnCell instanceof Shape) {
                // arbitrarily increase width to relax too small bounds (for instance for reference diagrams from miwg-test-suite)
                styleValues.set(mxgraph.mxConstants.STYLE_LABEL_WIDTH, labelBounds.width + 1);
                // align settings
                styleValues.set(mxgraph.mxConstants.STYLE_LABEL_POSITION, mxgraph.mxConstants.ALIGN_TOP);
                styleValues.set(mxgraph.mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxgraph.mxConstants.ALIGN_LEFT);
            }
        }
        // when no label bounds, adjust the default style dynamically
        else if (bpmnCell instanceof Shape &&
            (bpmnElement instanceof ShapeBpmnSubProcess || bpmnElement instanceof ShapeBpmnCallActivity) &&
            !bpmnElement.markers.includes(exports.ShapeBpmnMarkerKind.EXPAND)) {
            styleValues.set(mxgraph.mxConstants.STYLE_VERTICAL_ALIGN, mxgraph.mxConstants.ALIGN_TOP);
        }
        return styleValues;
    }
    computeMessageFlowIconStyle(edge) {
        return `shape=${exports.StyleIdentifier.BPMN_STYLE_MESSAGE_FLOW_ICON};${exports.StyleIdentifier.BPMN_STYLE_IS_INITIATING}=${edge.messageVisibleKind}`;
    }
    static getFontStyleValue(font) {
        let value = 0;
        if (font.isBold) {
            value += mxgraph.mxConstants.FONT_BOLD;
        }
        if (font.isItalic) {
            value += mxgraph.mxConstants.FONT_ITALIC;
        }
        if (font.isStrikeThrough) {
            value += mxgraph.mxConstants.FONT_STRIKETHROUGH;
        }
        if (font.isUnderline) {
            value += mxgraph.mxConstants.FONT_UNDERLINE;
        }
        return value;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Compute the icon size proportionally to a ratio of the shape size. The proportions of the icon are left untouched.
 */
function computeScaledIconSize(initialIconSize, iconStyleConfiguration, shapeConfiguration, ratioFromShape) {
    let iconWidthProportionalToShape;
    let iconHeightProportionalToShape;
    if (initialIconSize.height < initialIconSize.width || (initialIconSize.height == initialIconSize.width && shapeConfiguration.w <= shapeConfiguration.h)) {
        iconWidthProportionalToShape = shapeConfiguration.w;
        iconHeightProportionalToShape = (shapeConfiguration.w * initialIconSize.height) / initialIconSize.width;
    }
    else {
        iconWidthProportionalToShape = (shapeConfiguration.h * initialIconSize.width) / initialIconSize.height;
        iconHeightProportionalToShape = shapeConfiguration.h;
    }
    const inset = iconStyleConfiguration.strokeWidth ? (iconStyleConfiguration.strokeWidth - 1) * 2 : 0;
    const paintIconWidth = iconWidthProportionalToShape * ratioFromShape - inset;
    const paintIconHeight = iconHeightProportionalToShape * ratioFromShape - inset;
    return { width: paintIconWidth, height: paintIconHeight };
}
/**
 * Wrapper of {@link mxAbstractCanvas2D} to simplify method calls when painting icons/markers of BPMN shapes.
 *
 * It can scale dimensions passed to the method of the original {@link mxAbstractCanvas2D}
 *
 * @example vanilla canvas calls when a scale factor must be applied to positions
 * const scaleX = 0.26;
 * const scaleY = 0.35;
 * c.moveTo(8 * scaleX, 39 * scaleY);
 * c.lineTo(12 * scaleX, 25 * scaleY);
 *
 * @example with `BpmnCanvas`
 * const canvas = new BpmnCanvas(c, 0.26, 0.35);
 * canvas.moveTo(8, 39);
 * canvas.lineTo(12, 25);
 */
class BpmnCanvas {
    constructor({ mxCanvas, shapeConfiguration, iconConfiguration }) {
        this.iconPaintingOriginX = 0;
        this.iconPaintingOriginY = 0;
        this.c = mxCanvas;
        this.shapeConfiguration = shapeConfiguration; // TODO clone?
        this.iconOriginalSize = iconConfiguration.originalSize;
        const ratioFromShape = iconConfiguration.ratioFromShape;
        if (ratioFromShape) {
            const scaledIconSize = computeScaledIconSize(this.iconOriginalSize, iconConfiguration.style, this.shapeConfiguration, ratioFromShape);
            this.scaleX = scaledIconSize.width / this.iconOriginalSize.width;
            this.scaleY = scaledIconSize.height / this.iconOriginalSize.height;
        }
        else {
            this.scaleX = 1;
            this.scaleY = 1;
        }
        this.updateCanvasStyle(iconConfiguration.style);
        iconConfiguration.setIconOrigin(this);
    }
    /**
     * Set the icon origin to the top left corner of the shape.
     *
     * @param shapeDimensionProportion proportion of the width/height used to translate the icon origin from the shape origin.
     * @internal
     */
    setIconOriginToShapeTopLeftProportionally(shapeDimensionProportion) {
        const shape = this.shapeConfiguration;
        this.iconPaintingOriginX = shape.x + shape.w / shapeDimensionProportion;
        this.iconPaintingOriginY = shape.y + shape.h / shapeDimensionProportion;
    }
    /**
     * Set the icon origin to the top left corner of the shape.
     */
    setIconOriginToShapeTopLeft(topMargin = exports.StyleDefault.SHAPE_ACTIVITY_TOP_MARGIN, leftMargin = exports.StyleDefault.SHAPE_ACTIVITY_LEFT_MARGIN) {
        const shape = this.shapeConfiguration;
        this.iconPaintingOriginX = shape.x + leftMargin;
        this.iconPaintingOriginY = shape.y + topMargin;
    }
    /**
     * Set the icon origin to ensure that the icon is centered on the shape.
     */
    setIconOriginForIconCentered() {
        const shape = this.shapeConfiguration;
        this.iconPaintingOriginX = shape.x + (shape.w - this.iconOriginalSize.width * this.scaleX) / 2;
        this.iconPaintingOriginY = shape.y + (shape.h - this.iconOriginalSize.height * this.scaleY) / 2;
    }
    /**
     * Set the icon origin to ensure that, on the shape, the icon is horizontally centered and vertically aligned to the bottom.
     */
    setIconOriginForIconBottomCentered(bottomMargin = exports.StyleDefault.SHAPE_ACTIVITY_BOTTOM_MARGIN) {
        const shape = this.shapeConfiguration;
        this.iconPaintingOriginX = shape.x + (shape.w - this.iconOriginalSize.width * this.scaleX) / 2;
        this.iconPaintingOriginY = shape.y + (shape.h - this.iconOriginalSize.height * this.scaleY - bottomMargin);
    }
    /**
     * Set the icon origin to ensure that, on the shape, the icon is vertically aligned to the bottom and translate to the left from the horizontal center.
     */
    setIconOriginForIconOnBottomLeft(bottomMargin = exports.StyleDefault.SHAPE_ACTIVITY_BOTTOM_MARGIN, fromCenterMargin = exports.StyleDefault.SHAPE_ACTIVITY_FROM_CENTER_MARGIN) {
        const shape = this.shapeConfiguration;
        this.iconPaintingOriginX = shape.x + (shape.w - this.iconOriginalSize.width * this.scaleX) / 3 - fromCenterMargin;
        this.iconPaintingOriginY = shape.y + (shape.h - this.iconOriginalSize.height * this.scaleY - bottomMargin);
    }
    /**
     * Translate the icon origin using the scale factor associated to the horizontal and vertical directions.
     *
     * The values should be given with using the icon original size (as translated values will be scaled as other values passed to method of this class).
     *
     * @param dx the horizontal translation
     * @param dy the vertical translation
     */
    translateIconOrigin(dx, dy) {
        this.iconPaintingOriginX += this.scaleX * dx;
        this.iconPaintingOriginY += this.scaleY * dy;
    }
    computeScaleFromOriginX(x) {
        return this.iconPaintingOriginX + x * this.scaleX;
    }
    computeScaleFromOriginY(y) {
        return this.iconPaintingOriginY + y * this.scaleY;
    }
    updateCanvasStyle({ isFilled, strokeColor, fillColor, strokeWidth }) {
        if (isFilled) {
            this.c.setFillColor(strokeColor);
        }
        else {
            this.c.setFillColor(fillColor);
        }
        this.c.setStrokeWidth(strokeWidth);
    }
    arcTo(rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
        this.c.arcTo(rx * this.scaleX, ry * this.scaleY, angle, largeArcFlag, sweepFlag, this.computeScaleFromOriginX(x), this.computeScaleFromOriginY(y));
    }
    begin() {
        this.c.begin();
    }
    close() {
        this.c.close();
    }
    curveTo(x1, y1, x2, y2, x3, y3) {
        this.c.curveTo(this.computeScaleFromOriginX(x1), this.computeScaleFromOriginY(y1), this.computeScaleFromOriginX(x2), this.computeScaleFromOriginY(y2), this.computeScaleFromOriginX(x3), this.computeScaleFromOriginY(y3));
    }
    fill() {
        this.c.fill();
    }
    fillAndStroke() {
        this.c.fillAndStroke();
    }
    setFillColor(fillColor) {
        this.c.setFillColor(fillColor);
    }
    stroke() {
        this.c.stroke();
    }
    setStrokeColor(color) {
        this.c.setStrokeColor(color);
    }
    setRoundLineJoin() {
        this.c.setLineJoin('round');
    }
    lineTo(x, y) {
        this.c.lineTo(this.computeScaleFromOriginX(x), this.computeScaleFromOriginY(y));
    }
    moveTo(x, y) {
        this.c.moveTo(this.computeScaleFromOriginX(x), this.computeScaleFromOriginY(y));
    }
    rect(x, y, w, h) {
        this.c.rect(this.computeScaleFromOriginX(x), this.computeScaleFromOriginY(y), w * this.scaleX, h * this.scaleY);
    }
    roundrect(x, y, w, h, dx, dy) {
        this.c.roundrect(this.computeScaleFromOriginX(x), this.computeScaleFromOriginY(y), w * this.scaleX, h * this.scaleY, dx, dy);
    }
    ellipse(x, y, w, h) {
        this.c.ellipse(this.computeScaleFromOriginX(x), this.computeScaleFromOriginY(y), w * this.scaleX, h * this.scaleY);
    }
    rotateOnIconCenter(theta) {
        const rotationCenterX = this.iconPaintingOriginX + (this.iconOriginalSize.width / 2) * this.scaleX;
        const rotationCenterY = this.iconPaintingOriginY + (this.iconOriginalSize.height / 2) * this.scaleY;
        this.c.rotate(theta, false, false, rotationCenterX, rotationCenterY);
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function buildPaintParameter(c, x, y, width, height, shape, ratioFromParent = 0.25, isFilled = false, iconStrokeWidth = 0) {
    const shapeStrokeWidth = shape.strokewidth || StyleUtils.getStrokeWidth(shape.style);
    const fillColor = shape.fill || StyleUtils.getFillColor(shape.style);
    const strokeColor = shape.stroke || StyleUtils.getStrokeColor(shape.style);
    const margin = StyleUtils.getMargin(shape.style);
    return {
        c,
        ratioFromParent,
        setIconOrigin: (canvas) => canvas.setIconOriginForIconCentered(),
        shape: { x, y, w: width, h: height, strokeWidth: shapeStrokeWidth },
        icon: { isFilled, fillColor, strokeColor, strokeWidth: iconStrokeWidth, margin },
    };
}
class IconPainter {
    paintEmptyIcon() {
        // empty by nature
    }
    /**
     * Utility paint icon methods to easily instantiate a {@link BpmnCanvas} from a {@link PaintParameter}.
     *
     * @param c                       mxgraph `mxAbstractCanvas2D` in charge of performing the paint operations.
     * @param ratioFromParent         the actual size of the icon will be computed from the shape dimensions using this ratio.
     * @param setIconOrigin           called function to set the origin of the icon. Generally, it calls a method of {@link BpmnCanvas}.
     * @param shape                   dimension and style of the shape where the icon is painted.
     * @param icon                    style of the icon.
     * @param originalIconSize        original size of the icon used to compute the scaling/ratio in {@link BpmnCanvas}.
     * @protected
     */
    newBpmnCanvas({ c, ratioFromParent, setIconOrigin, shape, icon }, originalIconSize) {
        return new BpmnCanvas({
            mxCanvas: c,
            shapeConfiguration: shape,
            iconConfiguration: {
                originalSize: originalIconSize,
                style: icon,
                ratioFromShape: ratioFromParent,
                setIconOrigin,
            },
        });
    }
    /**
     * This icon is used by `message event`, `receive task`, `send task`.
     */
    paintEnvelopeIcon(paintParameter) {
        // this implementation is adapted from the draw.io BPMN 'message' symbol
        // https://github.com/jgraph/drawio/blob/0e19be6b42755790a749af30450c78c0d83be765/src/main/webapp/shapes/bpmn/mxBpmnShape2.js#L465
        const originalIconSize = { width: 485.41, height: 321.76 };
        const canvas = this.newBpmnCanvas(paintParameter, originalIconSize);
        const w = originalIconSize.width;
        const h = originalIconSize.height;
        // Paint the envelope outline with dark color
        canvas.rect(0, 0, w, h);
        canvas.fillAndStroke();
        const { icon } = paintParameter;
        if (icon.isFilled) {
            // Choose light color for envelope closure
            canvas.setStrokeColor(icon.fillColor);
        }
        // Paint the envelope closure
        canvas.begin();
        // V line
        canvas.moveTo(0, 0);
        canvas.lineTo(w * 0.5, h * 0.6);
        canvas.lineTo(w, 0);
        // First bottom line
        canvas.moveTo(0, h);
        canvas.lineTo(w / 3, h * 0.45);
        // Second bottom line
        canvas.moveTo(w, h);
        canvas.lineTo((w * 2) / 3, h * 0.45);
        canvas.stroke();
    }
    /**
     * This icon is used by `inclusive gateway` and `terminate event`.
     */
    paintCircleIcon(paintParameter) {
        // highly inspired from mxDoubleEllipse
        const originalIconSize = { width: paintParameter.shape.w, height: paintParameter.shape.h };
        const canvas = this.newBpmnCanvas(paintParameter, originalIconSize);
        const w = originalIconSize.width;
        const h = originalIconSize.height;
        if (w > 0 && h > 0) {
            canvas.ellipse(0, 0, w, h);
        }
        if (paintParameter.icon.isFilled) {
            canvas.fillAndStroke();
        }
        else {
            canvas.stroke();
        }
    }
    /**
     * This icon is used by `timer event`.
     */
    paintClockIcon(paintParameter) {
        // implementation adapted from https://www.flaticon.com/free-icon/clock_223404
        const canvas = this.newBpmnCanvas(paintParameter, { height: 152, width: 152 });
        canvas.begin();
        canvas.moveTo(184, 60);
        canvas.curveTo(188.4, 60, 192, 56.4, 192, 52);
        canvas.lineTo(192, 48);
        canvas.curveTo(192, 40, 188.4, 40, 184, 40);
        canvas.curveTo(179.6, 40, 176, 43.6, 176, 48);
        canvas.lineTo(176, 52);
        canvas.curveTo(176, 56.4, 179.6, 60, 184, 60);
        canvas.close();
        canvas.moveTo(184, 308);
        canvas.curveTo(179.6, 308, 176, 311.6, 176, 316);
        canvas.lineTo(176, 320);
        canvas.curveTo(176, 324.4, 179.6, 328, 184, 328);
        canvas.curveTo(188.4, 328, 192, 324.4, 192, 320);
        canvas.lineTo(192, 316);
        canvas.curveTo(192, 311.6, 188.4, 308, 184, 308);
        canvas.close();
        canvas.moveTo(52, 176);
        canvas.lineTo(48, 176);
        canvas.curveTo(43.6, 176, 40, 179.6, 40, 184);
        canvas.curveTo(40, 188.4, 43.6, 192, 48, 192);
        canvas.lineTo(52, 192);
        canvas.curveTo(56.4, 192, 69, 188.4, 60, 184);
        canvas.curveTo(60, 179.6, 56.4, 176, 52, 176);
        canvas.close();
        canvas.moveTo(320, 176);
        canvas.lineTo(316, 176);
        canvas.curveTo(311.6, 176, 308, 179.6, 308, 184);
        canvas.curveTo(308, 188.4, 311.6, 192, 316, 192);
        canvas.lineTo(320, 192);
        canvas.curveTo(324.4, 192, 328, 188.4, 328, 184);
        canvas.curveTo(328, 179.6, 324.4, 176, 320, 176);
        canvas.moveTo(93.6, 82.4);
        canvas.curveTo(90.4, 79.2, 85.6, 79.2, 82.4, 82.4);
        canvas.curveTo(79.2, 85.6, 79.2, 90.4, 82.4, 93.6);
        canvas.lineTo(85.2, 96.4);
        canvas.curveTo(86.8, 98, 88.8, 98.8, 90.8, 98.8);
        canvas.curveTo(92.8, 98.8, 94.4, 98, 96.4, 96.4);
        canvas.curveTo(99.6, 93.2, 99.6, 88.4, 96.4, 85.2);
        canvas.lineTo(93.6, 82.4);
        canvas.moveTo(85.2, 271.6);
        canvas.lineTo(82.4, 274.4);
        canvas.curveTo(79.2, 277.6, 79.2, 282.4, 82.4, 285.6);
        canvas.curveTo(84, 287.2, 86, 288, 88, 288);
        canvas.curveTo(90, 288, 92, 287.2, 93.6, 285.6);
        canvas.lineTo(96.4, 282.8);
        canvas.curveTo(99.6, 279.6, 99.6, 274.8, 96.4, 271.6);
        canvas.curveTo(93.2, 268.4, 88.4, 268.4, 85.2, 271.6);
        canvas.moveTo(274.4, 82.4);
        canvas.lineTo(271.6, 85.2);
        canvas.curveTo(268.4, 88.4, 268.4, 93.2, 271.6, 96.4);
        canvas.curveTo(273.298, 98, 275.2, 98.8, 277.2, 98.8);
        canvas.curveTo(279.2, 98.8, 281.2, 98, 282.8, 96.4);
        canvas.lineTo(285.6, 93.6);
        canvas.curveTo(288.8, 90.4, 288.8, 85.6, 285.6, 82.4);
        canvas.curveTo(282.4, 79.2, 277.6, 79.2, 274.4, 82.4);
        canvas.moveTo(192, 180.8);
        canvas.lineTo(192, 108);
        canvas.curveTo(192, 103.6, 188.4, 100, 184, 100);
        canvas.curveTo(179.6, 100, 176, 103.6, 176, 108);
        canvas.lineTo(176, 184);
        canvas.curveTo(176, 186, 176.8, 188, 178.4, 189.6);
        canvas.lineTo(266, 277.2);
        canvas.curveTo(267.6, 278.8, 269.6, 279.6, 271.6, 279.6);
        canvas.curveTo(273.6, 279.6, 275.6, 278.8, 277.2, 277.2);
        canvas.curveTo(280.4, 274, 280.4, 269.2, 277.2, 266);
        canvas.lineTo(192, 180.8);
        canvas.moveTo(184, 0);
        canvas.curveTo(82.4, 0, 0, 82.4, 0, 184);
        canvas.curveTo(0, 285.6, 82.4, 368, 184, 368);
        canvas.curveTo(285.6, 368, 368, 285.6, 368, 184);
        canvas.curveTo(368, 82.4, 285.6, 0, 184, 0);
        canvas.moveTo(184, 352);
        canvas.curveTo(91.2, 352, 16, 276.8, 16, 184);
        canvas.curveTo(16, 91.2, 91.2, 16, 184, 16);
        canvas.curveTo(276.8, 16, 352, 91.2, 352, 184);
        canvas.curveTo(352, 276.8, 276.8, 352, 184, 352);
        canvas.fillAndStroke();
    }
    /**
     * This icon is used by `signal event`.
     */
    paintTriangleIcon(paintParameter) {
        // implementation adapted from https://thenounproject.com/term/triangle/2452089/
        const canvas = this.newBpmnCanvas(paintParameter, { height: 735, width: 849 });
        canvas.begin();
        canvas.moveTo(497, 55);
        canvas.lineTo(817, 609);
        canvas.curveTo(849, 665, 808, 735, 744, 735);
        canvas.lineTo(105, 735);
        canvas.curveTo(40, 735, 0, 665, 32, 609);
        canvas.lineTo(352, 55);
        canvas.curveTo(384, 0, 465, 0, 497, 55);
        canvas.close();
        canvas.fillAndStroke();
    }
    /**
     * This icon is used by `escalation event`.
     */
    paintUpArrowheadIcon(paintParameter) {
        const canvas = this.newBpmnCanvas(paintParameter, { height: 50, width: 40 });
        canvas.begin();
        canvas.moveTo(0, 49.5);
        canvas.lineTo(19.5, 1);
        canvas.curveTo(19.75, 0.25, 20, 0, 20.25, 0.25);
        canvas.lineTo(40, 49.5);
        canvas.curveTo(40, 49.5, 39.75, 50, 39.6, 49.75);
        canvas.lineTo(20, 30);
        canvas.lineTo(0.4, 49.75);
        canvas.curveTo(0.4, 49.75, 0.25, 50, 0, 49.5);
        canvas.close();
        canvas.fillAndStroke();
    }
    /**
     * This icon is used by `compensation event`.
     */
    paintDoubleLeftArrowheadsIcon(paintParameter) {
        const canvas = this.newBpmnCanvas(paintParameter, { height: 53.5, width: 105 });
        canvas.begin();
        canvas.moveTo(91.4, 0);
        canvas.curveTo(91.4, 0, 91.2, 0, 91, 0.2);
        canvas.lineTo(50, 25);
        canvas.curveTo(47.9, 25.8, 46.7, 26.6, 46.4, 27.3);
        canvas.lineTo(46.4, 0);
        canvas.curveTo(46.4, 0, 46.2, 0, 46, 0.2);
        canvas.lineTo(4.9, 25);
        canvas.curveTo(2, 26.2, 0, 27.3, 4.9, 28.5);
        canvas.lineTo(45.8, 53);
        canvas.curveTo(46, 53.3, 46.2, 53.5, 46.4, 53.5);
        canvas.lineTo(46.4, 27);
        canvas.curveTo(46.6, 27.3, 47.8, 28.1, 49.9, 29.9);
        canvas.lineTo(90.8, 53.3);
        canvas.curveTo(91, 53.3, 91.2, 53.5, 91.4, 53.5);
        canvas.lineTo(91.4, 0);
        canvas.close();
        canvas.fillAndStroke();
    }
    drawCrossIcon(paintParameter) {
        const canvas = this.newBpmnCanvas(paintParameter, { height: 1, width: 1 });
        canvas.begin();
        canvas.moveTo(0.38, 0);
        canvas.lineTo(0.62, 0);
        canvas.lineTo(0.62, 0.38);
        canvas.lineTo(1, 0.38);
        canvas.lineTo(1, 0.62);
        canvas.lineTo(0.62, 0.62);
        canvas.lineTo(0.62, 1);
        canvas.lineTo(0.38, 1);
        canvas.lineTo(0.38, 0.62);
        canvas.lineTo(0, 0.62);
        canvas.lineTo(0, 0.38);
        canvas.lineTo(0.38, 0.38);
        canvas.close();
        return canvas;
    }
    /**
     * This icon is used by `conditional event`.
     */
    paintListIcon(paintParameter) {
        const canvas = this.newBpmnCanvas(paintParameter, { height: 60, width: 60 });
        canvas.begin();
        canvas.moveTo(0, 0);
        canvas.lineTo(60, 0);
        canvas.lineTo(60, 60);
        canvas.lineTo(0, 60);
        canvas.lineTo(0, 0);
        canvas.close();
        canvas.moveTo(5, 5);
        canvas.lineTo(55, 5);
        canvas.close();
        canvas.moveTo(5, 21.6);
        canvas.lineTo(55, 21.6);
        canvas.close();
        canvas.moveTo(5, 38.3);
        canvas.lineTo(55, 38.3);
        canvas.close();
        canvas.moveTo(5, 55);
        canvas.lineTo(55, 55);
        canvas.close();
        canvas.fillAndStroke();
    }
    /**
     * This icon is used by `exclusive gateway`.
     */
    paintXCrossIcon(paintParameter) {
        const canvas = this.drawCrossIcon(paintParameter);
        canvas.rotateOnIconCenter(45);
        canvas.fillAndStroke();
    }
    /**
     * This icon is used by `parallel gateway` and 'event-based gateway'.
     */
    paintPlusCrossIcon(paintParameter) {
        this.drawCrossIcon(paintParameter).fillAndStroke();
    }
    /**
     * This icon is used by `user task`.
     */
    paintPersonIcon(paintParameter) {
        // implementation adapted from https://www.flaticon.com/free-icon/employees_554768
        // use https://github.com/process-analytics/mxgraph-svg2shape to generate the xml stencil and port it to code
        const canvas = this.newBpmnCanvas(Object.assign(Object.assign({}, paintParameter), { icon: Object.assign(Object.assign({}, paintParameter.icon), { isFilled: true }) }), { height: 239.68, width: 143.61 });
        canvas.begin();
        canvas.moveTo(124.31, 150.29);
        canvas.lineTo(99.66, 141.03);
        canvas.arcTo(6.43, 6.43, 0, 0, 1, 95.51, 135.03);
        canvas.lineTo(95.51, 130.66);
        canvas.arcTo(47.75, 47.75, 0, 0, 0, 119.51, 89.25);
        canvas.lineTo(119.51, 71.25);
        canvas.arcTo(47.62, 47.62, 0, 0, 0, 101.18, 33.64);
        canvas.arcTo(29.35, 29.35, 0, 0, 0, 101.52, 29.14);
        canvas.arcTo(29.68, 29.68, 0, 0, 0, 42.17, 29.14);
        canvas.arcTo(29.24, 29.24, 0, 0, 0, 42.53, 33.63);
        canvas.arcTo(47.65, 47.65, 0, 0, 0, 24.14, 71.23);
        canvas.lineTo(24.14, 89.23);
        canvas.arcTo(47.7, 47.7, 0, 0, 0, 48.19, 130.63);
        canvas.lineTo(48.19, 135.03);
        canvas.arcTo(6.43, 6.43, 0, 0, 1, 44.03, 141.03);
        canvas.lineTo(19.31, 150.29);
        canvas.arcTo(29.81, 29.81, 0, 0, 0, 0.09, 178.03);
        canvas.lineTo(0.09, 233.51);
        canvas.arcTo(5.63, 5.63, 0, 1, 0, 11.34, 233.51);
        canvas.lineTo(11.34, 178.03);
        canvas.arcTo(18.19, 18.19, 0, 0, 1, 11.57, 175.17);
        canvas.lineTo(20.5, 184.11);
        canvas.arcTo(12.32, 12.32, 0, 0, 1, 24.14, 192.89);
        canvas.lineTo(24.14, 233.51);
        canvas.arcTo(5.63, 5.63, 0, 1, 0, 35.39, 233.51);
        canvas.lineTo(35.39, 192.93);
        canvas.arcTo(23.5, 23.5, 0, 0, 0, 28.46, 176.2);
        canvas.lineTo(17.04, 164.78);
        canvas.arcTo(18.34, 18.34, 0, 0, 1, 23.29, 160.78);
        canvas.lineTo(43.65, 153.15);
        canvas.lineTo(66.22, 175.72);
        canvas.lineTo(66.22, 233.51);
        canvas.arcTo(5.63, 5.63, 0, 1, 0, 77.47, 233.51);
        canvas.lineTo(77.47, 175.76);
        canvas.lineTo(100.04, 153.19);
        canvas.lineTo(120.4, 160.82);
        canvas.arcTo(18.39, 18.39, 0, 0, 1, 126.65, 164.82);
        canvas.lineTo(115.24, 176.24);
        canvas.arcTo(23.5, 23.5, 0, 0, 0, 108.31, 192.93);
        canvas.lineTo(108.31, 233.55);
        canvas.arcTo(5.63, 5.63, 0, 1, 0, 119.56, 233.55);
        canvas.lineTo(119.56, 192.93);
        canvas.arcTo(12.35, 12.35, 0, 0, 1, 123.19, 184.15);
        canvas.lineTo(132.13, 175.22);
        canvas.arcTo(18, 18, 0, 0, 1, 132.36, 178.08);
        canvas.lineTo(132.36, 233.56);
        canvas.arcTo(5.63, 5.63, 0, 0, 0, 143.61, 233.56);
        canvas.lineTo(143.61, 178.03);
        canvas.arcTo(29.81, 29.81, 0, 0, 0, 124.31, 150.29);
        canvas.close();
        canvas.moveTo(71.85, 10.72);
        canvas.arcTo(18.46, 18.46, 0, 0, 1, 90.17, 27.18);
        canvas.arcTo(47.68, 47.68, 0, 0, 0, 53.53, 27.18);
        canvas.arcTo(18.44, 18.44, 0, 0, 1, 71.85, 10.72);
        canvas.close();
        canvas.moveTo(35.39, 71.23);
        canvas.arcTo(36.46, 36.46, 0, 0, 1, 108.31, 71.23);
        canvas.lineTo(108.31, 77.4);
        canvas.curveTo(82.12, 75.4, 56.97, 60.55, 56.71, 60.4);
        canvas.arcTo(5.62, 5.62, 0, 0, 0, 48.78, 62.71);
        canvas.curveTo(46.24, 67.79, 40.45, 71.89, 35.39, 74.62);
        canvas.close();
        canvas.moveTo(35.39, 89.23);
        canvas.lineTo(35.39, 87.08);
        canvas.curveTo(40.55, 84.85, 49.73, 80.08, 55.67, 72.66);
        canvas.curveTo(64.83, 77.46, 85.92, 87.21, 108.31, 88.66);
        canvas.lineTo(108.31, 89.24);
        canvas.arcTo(36.46, 36.46, 0, 1, 1, 35.39, 89.24);
        canvas.close();
        canvas.moveTo(71.85, 165.45);
        canvas.lineTo(54.06, 147.69);
        canvas.arcTo(17.7, 17.7, 0, 0, 0, 59.43, 135.32);
        canvas.arcTo(47.57, 47.57, 0, 0, 0, 84.27, 135.32);
        canvas.arcTo(17.7, 17.7, 0, 0, 0, 89.64, 147.69);
        canvas.close();
        canvas.fill();
    }
    /**
     * This icon is used by `service tasks`.
     */
    paintGearIcon(paintParameter) {
        // this implementation is adapted from the draw.io BPMN 'Service Task' stencil
        // https://github.com/jgraph/drawio/blob/9394fb0f1430d2c869865827b2bbef5639f63478/src/main/webapp/stencils/bpmn.xml#L898
        // icon coordinates fill a 100x100 rectangle (approximately: 90x90 + foreground translation)
        const canvas = this.newBpmnCanvas(paintParameter, { height: 100, width: 100 });
        // background
        IconPainter.paintGearIconBackground(canvas);
        // foreground
        canvas.translateIconOrigin(14, 14);
        IconPainter.paintGearIconForeground(canvas);
    }
    static paintGearIconBackground(canvas) {
        canvas.begin();
        canvas.moveTo(2.06, 24.62);
        canvas.lineTo(10.17, 30.95);
        canvas.lineTo(9.29, 37.73);
        canvas.lineTo(0, 41.42);
        canvas.lineTo(2.95, 54.24);
        canvas.lineTo(13.41, 52.92);
        canvas.lineTo(17.39, 58.52);
        canvas.lineTo(13.56, 67.66);
        canvas.lineTo(24.47, 74.44);
        canvas.lineTo(30.81, 66.33);
        canvas.lineTo(37.88, 67.21);
        canvas.lineTo(41.57, 76.5);
        canvas.lineTo(54.24, 73.55);
        canvas.lineTo(53.06, 62.94);
        canvas.lineTo(58.52, 58.52);
        canvas.lineTo(67.21, 63.09);
        canvas.lineTo(74.58, 51.88);
        canvas.lineTo(66.03, 45.25);
        canvas.lineTo(66.92, 38.62);
        canvas.lineTo(76.5, 34.93);
        canvas.lineTo(73.7, 22.26);
        canvas.lineTo(62.64, 23.44);
        canvas.lineTo(58.81, 18.42);
        canvas.lineTo(62.79, 8.7);
        canvas.lineTo(51.74, 2.21);
        canvas.lineTo(44.81, 10.47);
        canvas.lineTo(38.03, 9.43);
        canvas.lineTo(33.75, 0);
        canvas.lineTo(21.52, 3.24);
        canvas.lineTo(22.7, 13.56);
        canvas.lineTo(18.13, 17.54);
        canvas.lineTo(8.7, 13.56);
        canvas.close();
        const arcStartX = 24.8;
        const arcStartY = 39;
        IconPainter.paintGearInnerCircle(canvas, arcStartX, arcStartY);
    }
    static paintGearIconForeground(canvas) {
        canvas.begin();
        canvas.moveTo(16.46, 41.42);
        canvas.lineTo(24.57, 47.75);
        canvas.lineTo(23.69, 54.53);
        canvas.lineTo(14.4, 58.22);
        canvas.lineTo(17.35, 71.04);
        canvas.lineTo(27.81, 69.72);
        canvas.lineTo(31.79, 75.32);
        canvas.lineTo(27.96, 84.46);
        canvas.lineTo(38.87, 91.24);
        canvas.lineTo(45.21, 83.13);
        canvas.lineTo(52.28, 84.01);
        canvas.lineTo(55.97, 93.3);
        canvas.lineTo(68.64, 90.35);
        canvas.lineTo(67.46, 79.74);
        canvas.lineTo(72.92, 75.32);
        canvas.lineTo(81.61, 79.89);
        canvas.lineTo(88.98, 68.68);
        canvas.lineTo(80.43, 62.05);
        canvas.lineTo(81.32, 55.42);
        canvas.lineTo(90.9, 51.73);
        canvas.lineTo(88.1, 39.06);
        canvas.lineTo(77.04, 40.24);
        canvas.lineTo(73.21, 35.22);
        canvas.lineTo(77.19, 25.5);
        canvas.lineTo(66.14, 19.01);
        canvas.lineTo(59.21, 27.27);
        canvas.lineTo(52.43, 26.23);
        canvas.lineTo(48.15, 16.8);
        canvas.lineTo(35.92, 20.04);
        canvas.lineTo(37.1, 30.36);
        canvas.lineTo(32.53, 34.34);
        canvas.lineTo(23.1, 30.36);
        canvas.close();
        const arcStartX = 39.2;
        const arcStartY = 55.8;
        IconPainter.paintGearInnerCircle(canvas, arcStartX, arcStartY);
        // fill the inner circle to mask the background
        canvas.begin();
        IconPainter.paintGearInnerCircle(canvas, arcStartX, arcStartY);
    }
    static paintGearInnerCircle(canvas, arcStartX, arcStartY) {
        const arcRay = 13.5;
        canvas.moveTo(arcStartX, arcStartY);
        canvas.arcTo(arcRay, arcRay, 0, 1, 1, arcStartX + 2 * arcRay, arcStartY);
        canvas.arcTo(arcRay, arcRay, 0, 0, 1, arcStartX, arcStartY);
        canvas.close();
        canvas.fillAndStroke();
    }
    /**
     * This icon is used to render the `expand marker` on `activities`.
     */
    paintExpandIcon(paintParameter) {
        const originalIconSize = { width: 16, height: 16 };
        const canvas = this.newBpmnCanvas(paintParameter, originalIconSize);
        const w = originalIconSize.width;
        const h = originalIconSize.height;
        // Rounded rectangle
        canvas.roundrect(0, 0, w, h, 2, 2);
        canvas.stroke();
        // Cross
        canvas.begin();
        canvas.moveTo(w / 2, h / 4);
        canvas.lineTo(w / 2, (h * 3) / 4);
        canvas.close();
        canvas.moveTo(w / 4, h / 2);
        canvas.lineTo((w * 3) / 4, h / 2);
        canvas.close();
        canvas.fillAndStroke();
    }
    /**
     * This icon is used to render the `loop marker` on `activities`.
     */
    paintLoopIcon(paintParameter) {
        // this implementation is adapted from the draw.io BPMN 'Loop'
        // https://github.com/jgraph/drawio/blob/9394fb0f1430d2c869865827b2bbef5639f63478/src/main/webapp/stencils/bpmn.xml#L543
        const { icon } = paintParameter;
        icon.fillColor = icon.strokeColor;
        const canvas = this.newBpmnCanvas(paintParameter, { width: 22.49, height: 21.62 });
        // Loop
        canvas.begin();
        canvas.moveTo(5.5, 19.08);
        canvas.arcTo(8, 8, 0, 1, 1, 10.5, 21.08);
        canvas.stroke();
        // Arrow
        canvas.begin();
        canvas.moveTo(7.5, 14.08);
        canvas.lineTo(5.75, 19.08);
        canvas.lineTo(0, 17.08);
        canvas.close();
        canvas.fillAndStroke();
    }
    /**
     * This icon is used to render the `sequential multi-instance marker` on `activities`.
     */
    paintSequentialMultiInstanceIcon(paintParameter) {
        const originalIconSize = { width: 16, height: 16 };
        const canvas = this.newBpmnCanvas(paintParameter, originalIconSize);
        const { c, icon } = paintParameter;
        c.setFillColor(icon.strokeColor);
        const barWidth = originalIconSize.width;
        const barHeight = originalIconSize.height / 5; // 3 bars + 2 interspaces
        canvas.rect(0, 0, barWidth, barHeight);
        canvas.fill();
        canvas.rect(0, 2 * barHeight, barWidth, barHeight);
        canvas.fill();
        canvas.rect(0, 4 * barHeight, barWidth, barHeight);
        canvas.fill();
    }
    /**
     * This icon is used to render the `parallel multi-instance marker` on `activities`.
     */
    paintParallelMultiInstanceIcon(paintParameter) {
        const originalIconSize = { width: 16, height: 16 };
        const canvas = this.newBpmnCanvas(paintParameter, originalIconSize);
        const { c, icon } = paintParameter;
        c.setFillColor(icon.strokeColor);
        const barWidth = originalIconSize.width / 5; // 3 bars + 2 interspaces
        const barHeight = originalIconSize.height;
        canvas.begin();
        canvas.rect(0, 0, barWidth, barHeight);
        canvas.fill();
        canvas.rect(2 * barWidth, 0, barWidth, barHeight);
        canvas.fill();
        canvas.rect(4 * barWidth, 0, barWidth, barHeight);
        canvas.fill();
    }
    /**
     * This icon is used by `link event`.
     */
    paintRightArrowIcon(paintParameter) {
        // this implementation is adapted from https://www.flaticon.com/free-icon/right-arrow_222330
        const canvas = this.newBpmnCanvas(paintParameter, { width: 512, height: 415.23 });
        canvas.setRoundLineJoin();
        canvas.begin();
        canvas.moveTo(512, 207.61);
        canvas.lineTo(304.38, 0);
        canvas.lineTo(304.38, 135.39);
        canvas.lineTo(0, 135.39);
        canvas.lineTo(0, 279.84);
        canvas.lineTo(304.38, 279.84);
        canvas.lineTo(304.38, 415.23);
        canvas.lineTo(512, 207.61);
        canvas.close();
        canvas.fillAndStroke();
    }
    /**
     * This icon is used by `error event`.
     */
    paintErrorIcon(paintParameter) {
        const canvas = this.newBpmnCanvas(paintParameter, { width: 72.44, height: 71.82 });
        canvas.begin();
        canvas.moveTo(0, 53.32);
        canvas.lineTo(19.48, 0);
        canvas.lineTo(19.48, 0);
        canvas.lineTo(50.85, 40.07);
        canvas.lineTo(72.44, 18.21);
        canvas.lineTo(53.12, 71.82);
        canvas.lineTo(22.5, 31.37);
        canvas.close();
        canvas.fillAndStroke();
    }
    /**
     * This icon is used by `manual task`.
     */
    paintHandIcon(paintParameter) {
        // this implementation is adapted from the noun project 'hand' icon
        // https://thenounproject.com/term/hand/7660/
        const canvas = this.newBpmnCanvas(paintParameter, { width: 343.65, height: 354.12 });
        canvas.begin();
        canvas.moveTo(231.66, 336.39);
        canvas.curveTo(240.84, 316.9, 220.53, 306.92, 220.53, 306.92);
        canvas.curveTo(215.2, 303.67, 188.58, 287.43, 140.67, 258.19);
        canvas.lineTo(146.33, 248.39);
        canvas.curveTo(223.98, 269.38, 267.12, 281.04, 275.75, 283.38);
        canvas.curveTo(275.75, 283.38, 297.25, 288, 301.42, 267.77);
        canvas.curveTo(306.34, 245.29, 288.32, 238.63, 288.32, 238.63);
        canvas.curveTo(279.91, 236.44, 237.86, 225.48, 162.18, 205.75);
        canvas.lineTo(165.2, 194.8);
        canvas.curveTo(255.88, 204.4, 306.27, 209.73, 316.34, 210.8);
        canvas.curveTo(316.34, 210.8, 339.89, 212.16, 341.76, 189.55);
        canvas.curveTo(343.65, 166.93, 320.5, 164.13, 320.5, 164.13);
        canvas.curveTo(310.43, 163.1, 260.04, 157.99, 169.35, 148.77);
        canvas.lineTo(169.35, 138.97);
        canvas.curveTo(253.41, 132.12, 300.11, 128.32, 309.45, 127.56);
        canvas.curveTo(309.45, 127.56, 332.27, 122.38, 332.27, 102.61);
        canvas.curveTo(332.27, 82.85, 305.48, 81.87, 305.48, 81.87);
        canvas.curveTo(293.99, 82.2, 236.54, 83.88, 133.13, 86.9);
        canvas.lineTo(127.61, 81.87);
        canvas.curveTo(145.3, 59.39, 155.12, 46.9, 157.09, 44.41);
        canvas.curveTo(157.09, 44.41, 171.12, 26.8, 156.78, 12.72);
        canvas.curveTo(143.83, 0, 124.08, 14.49, 124.08, 14.49);
        canvas.curveTo(116.45, 19.41, 78.35, 44.06, 9.77, 88.43);
        canvas.lineTo(0, 251.94);
        canvas.curveTo(122.84, 308.79, 191.09, 340.37, 204.74, 346.69);
        canvas.curveTo(204.74, 346.69, 222.91, 354.12, 231.66, 336.39);
        canvas.fillAndStroke();
    }
    /**
     * This icon is used by `script task`.
     */
    paintScriptIcon(paintParameter) {
        // this implementation is adapted from the noun project 'script' icon
        // https://thenounproject.com/term/script/2331578/
        paintParameter.icon.fillColor = paintParameter.icon.strokeColor;
        const canvas = this.newBpmnCanvas(paintParameter, { width: 458.75, height: 461.64 });
        // Shape
        canvas.begin();
        canvas.moveTo(67.85, 0.57);
        canvas.curveTo(50.73, 0, 33.26, 8.86, 22.35, 18.84);
        canvas.curveTo(8.11, 32.15, 0, 50.77, 0, 70.26);
        canvas.curveTo(0, 73.15, 0, 87.59, 0, 113.6);
        canvas.curveTo(55.4, 113.6, 86.18, 113.6, 92.33, 113.6);
        canvas.curveTo(94.92, 150.46, 85.64, 180.4, 74.22, 211.27);
        canvas.curveTo(40.16, 298.07, 30.77, 339.83, 55.56, 410.87);
        canvas.curveTo(63.72, 438.26, 87.59, 457.85, 114.91, 461.09);
        canvas.curveTo(216.96, 460.85, 294.9, 461.64, 388.41, 461.2);
        canvas.curveTo(407.2, 461.09, 425.14, 453.55, 438.3, 440.13);
        canvas.curveTo(451.46, 426.71, 458.75, 403.06, 458.46, 384.26);
        canvas.curveTo(458.43, 382.23, 458.18, 365.93, 458.15, 363.89);
        canvas.curveTo(432.12, 364.24, 406.09, 364.04, 380.06, 364.04);
        canvas.curveTo(377.61, 347.52, 377.24, 337.58, 378.28, 324.48);
        canvas.curveTo(380.5, 296.47, 389.08, 273.36, 398.59, 247.1);
        canvas.curveTo(408.11, 220.83, 418.41, 191.47, 420.86, 154.24);
        canvas.curveTo(422.11, 135.34, 421.4, 110.24, 417.77, 86.75);
        canvas.curveTo(417.76, 86.71, 417.73, 86.54, 417.69, 86.22);
        canvas.curveTo(417.64, 85.95, 417.61, 85.79, 417.6, 85.76);
        canvas.curveTo(414.03, 68.13, 410.49, 48.84, 399.79, 31.47);
        canvas.curveTo(389.09, 14.11, 366.95, 0.59, 341.75, 0.59);
        canvas.curveTo(286.97, 0.59, 122.63, 0.57, 67.85, 0.57);
        canvas.close();
        canvas.moveTo(85.04, 72.68);
        canvas.curveTo(80.63, 72.68, 45.33, 72.68, 40.92, 72.68);
        canvas.curveTo(40.46, 58.4, 47.15, 51.87, 50.27, 48.75);
        canvas.curveTo(55.8, 44.28, 59.84, 41, 73.82, 41);
        canvas.curveTo(78.45, 52.13, 82.23, 62.71, 85.04, 72.68);
        canvas.close();
        canvas.moveTo(364.94, 52.9);
        canvas.curveTo(370, 61.11, 373.9, 76.44, 377.38, 93.51);
        canvas.curveTo(380.35, 113.1, 381.01, 136.42, 380.02, 151.57);
        canvas.curveTo(377.97, 182.76, 369.51, 207.12, 360.1, 233.1);
        canvas.curveTo(350.69, 259.09, 340.27, 286.77, 337.53, 321.27);
        canvas.curveTo(336.38, 335.86, 336.72, 346.69, 338.87, 364.01);
        canvas.curveTo(326.35, 364.01, 263.75, 364.01, 151.06, 364.01);
        canvas.curveTo(151.06, 382.2, 151.06, 392.31, 151.06, 394.33);
        canvas.curveTo(147.77, 404.8, 138.9, 418.2, 127.43, 419.94);
        canvas.curveTo(111.49, 422.35, 97.86, 411.8, 94.75, 399.19);
        canvas.curveTo(65.14, 321.99, 94.93, 275.54, 112.57, 225.47);
        canvas.curveTo(130.14, 177.95, 137.92, 117.41, 112.71, 42.09);
        canvas.curveTo(192.88, 41.9, 274.33, 42.21, 342.89, 41.98);
        canvas.curveTo(357.15, 42.03, 359.83, 44.61, 364.94, 52.9);
        canvas.close();
        canvas.moveTo(409.96, 399.48);
        canvas.curveTo(409.96, 408.42, 398.54, 425.67, 392.02, 425.67);
        canvas.curveTo(325.19, 425.79, 252.29, 425.67, 185.23, 425.67);
        canvas.curveTo(189.88, 424.43, 194.66, 405.64, 194.66, 399.48);
        canvas.curveTo(237.72, 399.48, 388.43, 399.48, 409.96, 399.48);
        canvas.close();
        canvas.fill();
        // Lines
        canvas.begin();
        canvas.moveTo(182.1, 131.2);
        canvas.lineTo(182.1, 151.68);
        canvas.lineTo(321.89, 151.68);
        canvas.lineTo(321.89, 131.2);
        canvas.lineTo(182.1, 131.2);
        canvas.close();
        canvas.moveTo(162.25, 251.09);
        canvas.lineTo(162.25, 271.49);
        canvas.lineTo(301.96, 271.49);
        canvas.lineTo(301.96, 251.09);
        canvas.lineTo(162.25, 251.09);
        canvas.close();
        canvas.fill();
    }
    /**
     * This icon is used by `business rule task`.
     */
    paintTableIcon(paintParameter) {
        const canvas = this.newBpmnCanvas(paintParameter, { width: 640, height: 640 });
        // Shape
        canvas.begin();
        canvas.moveTo(0.19, 0.1);
        canvas.lineTo(298.78, 0.1);
        canvas.lineTo(298.78, 198.88);
        canvas.lineTo(0.19, 198.88);
        canvas.lineTo(0.19, 0.1);
        canvas.close();
        canvas.fillAndStroke();
        canvas.begin();
        canvas.moveTo(0, 0);
        canvas.lineTo(298.78, 0);
        canvas.lineTo(298.78, 48.88);
        canvas.lineTo(0, 48.88);
        canvas.lineTo(0, 0);
        canvas.close();
        canvas.fillAndStroke();
        canvas.begin();
        canvas.moveTo(0, 48.88);
        canvas.lineTo(98.78, 48.88);
        canvas.lineTo(98.78, 198.88);
        canvas.lineTo(0, 198.88);
        canvas.lineTo(0, 48.88);
        canvas.close();
        canvas.fillAndStroke();
        canvas.begin();
        canvas.moveTo(1.09, 122.69);
        canvas.lineTo(298.78, 122.69);
        canvas.close();
        canvas.fillAndStroke();
        canvas.setFillColor(paintParameter.icon.strokeColor);
        canvas.begin();
        canvas.moveTo(0, 0);
        canvas.lineTo(298.78, 0);
        canvas.lineTo(298.78, 48.88);
        canvas.lineTo(0, 48.88);
        canvas.lineTo(0, 0);
        canvas.close();
        canvas.fillAndStroke();
    }
    /**
     * This icon is used by `event-based gateway`.
     */
    paintPentagon(paintParameter) {
        const canvas = this.newBpmnCanvas(paintParameter, { width: 16, height: 16 });
        // Shape
        canvas.begin();
        canvas.moveTo(16, 6.5);
        canvas.lineTo(8, 0);
        canvas.lineTo(0, 6.5);
        canvas.lineTo(3, 16);
        canvas.lineTo(13, 16);
        canvas.lineTo(16, 6.5);
        canvas.lineTo(8, 0); // extra line to ensure the path is fully closed (otherwise, there is a glitch on the latest corner)
        canvas.stroke();
    }
}
class IconPainterProvider {
    static get() {
        return this.instance;
    }
    static set(painter) {
        this.instance = painter;
    }
}
IconPainterProvider.instance = new IconPainter();

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EventShape extends mxgraph.mxEllipse {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
        this.iconPainter = IconPainterProvider.get();
        // TODO: when all/more event types will be supported, we could move to a Record/MappedType
        this.iconPainters = new Map([
            [exports.ShapeBpmnEventKind.MESSAGE, (paintParameter) => this.iconPainter.paintEnvelopeIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.5 }))],
            [exports.ShapeBpmnEventKind.TERMINATE, (paintParameter) => this.iconPainter.paintCircleIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.6 }))],
            [
                exports.ShapeBpmnEventKind.TIMER,
                (paintParameter) => this.iconPainter.paintClockIcon(Object.assign(Object.assign({}, paintParameter), { setIconOrigin: (canvas) => canvas.setIconOriginToShapeTopLeftProportionally(5) })),
            ],
            [
                exports.ShapeBpmnEventKind.SIGNAL,
                (paintParameter) => this.iconPainter.paintTriangleIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.55, icon: Object.assign(Object.assign({}, paintParameter.icon), { strokeWidth: exports.StyleDefault.STROKE_WIDTH_THIN.valueOf() }), setIconOrigin: (canvas) => canvas.setIconOriginToShapeTopLeftProportionally(4) })),
            ],
            [
                exports.ShapeBpmnEventKind.LINK,
                (paintParameter) => this.iconPainter.paintRightArrowIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.55, icon: Object.assign(Object.assign({}, paintParameter.icon), { strokeWidth: 1.5 }) })),
            ],
            [
                exports.ShapeBpmnEventKind.ERROR,
                (paintParameter) => this.iconPainter.paintErrorIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.55, icon: Object.assign(Object.assign({}, paintParameter.icon), { strokeWidth: 1.5 }) })),
            ],
            [
                exports.ShapeBpmnEventKind.COMPENSATION,
                (paintParameter) => this.iconPainter.paintDoubleLeftArrowheadsIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.7, icon: Object.assign(Object.assign({}, paintParameter.icon), { strokeWidth: 1.5 }) })),
            ],
            [exports.ShapeBpmnEventKind.CANCEL, (paintParameter) => this.iconPainter.paintXCrossIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.78 }))],
            [
                exports.ShapeBpmnEventKind.ESCALATION,
                (paintParameter) => this.iconPainter.paintUpArrowheadIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.55, icon: Object.assign(Object.assign({}, paintParameter.icon), { strokeWidth: exports.StyleDefault.STROKE_WIDTH_THIN.valueOf() }) })),
            ],
            [
                exports.ShapeBpmnEventKind.CONDITIONAL,
                (paintParameter) => this.iconPainter.paintListIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.6, icon: Object.assign(Object.assign({}, paintParameter.icon), { strokeWidth: 1.5 }) })),
            ],
        ]);
        this.withFilledIcon = false;
    }
    paintVertexShape(c, x, y, w, h) {
        this.markNonFullyRenderedEvents(c);
        const paintParameter = buildPaintParameter(c, x, y, w, h, this, 0.25, this.withFilledIcon);
        EventShape.setDashedOuterShapePattern(paintParameter, StyleUtils.getBpmnIsInterrupting(this.style));
        this.paintOuterShape(paintParameter);
        EventShape.restoreOriginalOuterShapePattern(paintParameter);
        this.paintInnerShape(paintParameter);
    }
    // This will be removed after implementation of all supported events
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    markNonFullyRenderedEvents(c) {
        // const eventKind = StyleUtils.getBpmnEventKind(this.style);
        // if (eventKind == ShapeBpmnEventKind.CONDITIONAL) {
        //   c.setFillColor('deeppink');
        //   c.setFillAlpha(0.3);
        // }
    }
    paintOuterShape({ c, shape: { x, y, w, h } }) {
        super.paintVertexShape(c, x, y, w, h);
    }
    paintInnerShape(paintParameter) {
        const paintIcon = this.iconPainters.get(StyleUtils.getBpmnEventKind(this.style)) || (() => this.iconPainter.paintEmptyIcon());
        paintIcon(paintParameter);
    }
    static setDashedOuterShapePattern(paintParameter, isInterrupting) {
        paintParameter.c.save(); // ensure we can later restore the configuration
        if (isInterrupting === 'false') {
            paintParameter.c.setDashed(true, false);
            paintParameter.c.setDashPattern('3 2');
        }
    }
    static restoreOriginalOuterShapePattern(paintParameter) {
        paintParameter.c.restore();
    }
}
/**
 * @internal
 */
class StartEventShape extends EventShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THIN) {
        super(bounds, fill, stroke, strokewidth);
    }
}
/**
 * @internal
 */
class EndEventShape extends EventShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THICK) {
        super(bounds, fill, stroke, strokewidth);
        this.withFilledIcon = true;
    }
}
class IntermediateEventShape extends EventShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THIN) {
        super(bounds, fill, stroke, strokewidth);
    }
    // this implementation is adapted from the draw.io BPMN 'throwing' outlines
    // https://github.com/jgraph/drawio/blob/0e19be6b42755790a749af30450c78c0d83be765/src/main/webapp/shapes/bpmn/mxBpmnShape2.js#L431
    paintOuterShape({ c, shape: { x, y, w, h, strokeWidth } }) {
        c.ellipse(x, y, w, h);
        c.fillAndStroke();
        const inset = strokeWidth * 1.5;
        c.ellipse(w * 0.02 + inset + x, h * 0.02 + inset + y, w * 0.96 - 2 * inset, h * 0.96 - 2 * inset);
        c.stroke();
    }
}
/**
 * @internal
 */
class CatchIntermediateEventShape extends IntermediateEventShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
}
/**
 * @internal
 */
class ThrowIntermediateEventShape extends IntermediateEventShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
        this.withFilledIcon = true;
    }
}
/**
 * @internal
 */
class BoundaryEventShape extends IntermediateEventShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GatewayShape extends mxgraph.mxRhombus {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
        this.iconPainter = IconPainterProvider.get();
    }
    paintVertexShape(c, x, y, w, h) {
        const paintParameter = buildPaintParameter(c, x, y, w, h, this);
        this.paintOuterShape(paintParameter);
        this.paintInnerShape(paintParameter);
    }
    paintOuterShape({ c, shape: { x, y, w, h } }) {
        super.paintVertexShape(c, x, y, w, h);
    }
}
/**
 * @internal
 */
class ExclusiveGatewayShape extends GatewayShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THIN) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintInnerShape(paintParameter) {
        this.iconPainter.paintXCrossIcon(Object.assign(Object.assign({}, paintParameter), { icon: Object.assign(Object.assign({}, paintParameter.icon), { isFilled: true }), ratioFromParent: 0.5 }));
    }
}
/**
 * @internal
 */
class ParallelGatewayShape extends GatewayShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THIN) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintInnerShape(paintParameter) {
        this.iconPainter.paintPlusCrossIcon(Object.assign(Object.assign({}, paintParameter), { icon: Object.assign(Object.assign({}, paintParameter.icon), { isFilled: true }), ratioFromParent: 0.5 }));
    }
}
/**
 * @internal
 */
class InclusiveGatewayShape extends GatewayShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THIN) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintInnerShape(paintParameter) {
        this.iconPainter.paintCircleIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.62, icon: Object.assign(Object.assign({}, paintParameter.icon), { isFilled: false, strokeWidth: exports.StyleDefault.STROKE_WIDTH_THICK.valueOf() }) }));
    }
}
/**
 * @internal
 */
class EventBasedGatewayShape extends GatewayShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THIN) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintInnerShape(paintParameter) {
        paintParameter = Object.assign(Object.assign({}, paintParameter), { icon: Object.assign(Object.assign({}, paintParameter.icon), { strokeWidth: 1 }) });
        // circle (simple or double)
        this.iconPainter.paintCircleIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.55 }));
        if (!StyleUtils.getBpmnIsInstantiating(this.style)) {
            this.iconPainter.paintCircleIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.45 }));
        }
        // inner icon
        const innerIconPaintParameter = Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.3 });
        if (StyleUtils.getBpmnIsParallelEventBasedGateway(this.style)) {
            this.iconPainter.paintPlusCrossIcon(innerIconPaintParameter);
        }
        else {
            this.iconPainter.paintPentagon(innerIconPaintParameter);
        }
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const referenceOrderedMarkers = [
    exports.ShapeBpmnMarkerKind.LOOP,
    exports.ShapeBpmnMarkerKind.MULTI_INSTANCE_PARALLEL,
    exports.ShapeBpmnMarkerKind.MULTI_INSTANCE_SEQUENTIAL,
    exports.ShapeBpmnMarkerKind.COMPENSATION,
    exports.ShapeBpmnMarkerKind.EXPAND,
    exports.ShapeBpmnMarkerKind.ADHOC,
];
/**
 * @internal
 */
function orderActivityMarkers(markers) {
    const orderedMarkers = [];
    referenceOrderedMarkers.forEach(marker => {
        if (markers.includes(marker)) {
            orderedMarkers.push(marker);
        }
    });
    // Put extra remaining at the end of the ordered markers, in the order they appear in the original array
    markers
        .filter(marker => {
        return !orderedMarkers.includes(marker);
    })
        .forEach(marker => {
        orderedMarkers.push(marker);
    });
    return orderedMarkers;
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function paintEnvelopeIcon(paintParameter, isFilled) {
    IconPainterProvider.get().paintEnvelopeIcon(Object.assign(Object.assign({}, paintParameter), { setIconOrigin: (canvas) => canvas.setIconOriginToShapeTopLeft(), ratioFromParent: 0.2, icon: Object.assign(Object.assign({}, paintParameter.icon), { isFilled: isFilled }) }));
}
/**
 * @internal
 */
class BaseActivityShape extends mxgraph.mxRectangleShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THIN) {
        super(bounds, fill, stroke, strokewidth);
        this.iconPainter = IconPainterProvider.get();
        // enforced by BPMN
        this.isRounded = true;
    }
    paintForeground(c, x, y, w, h) {
        super.paintForeground(c, x, y, w, h);
        // 0 is used for ratioParent as if we pass undefined to builder function the default 0.25 value will be used instead
        this.paintMarkerIcons(buildPaintParameter(c, x, y, w, h, this, 0, false, 1.5));
    }
    paintMarkerIcons(paintParameter) {
        const markers = StyleUtils.getBpmnMarkers(this.style);
        if (markers) {
            orderActivityMarkers(markers.split(',')).forEach((marker, idx, allMarkers) => {
                paintParameter = Object.assign(Object.assign({}, paintParameter), { setIconOrigin: this.getIconOriginForMarkerIcon(allMarkers.length, idx + 1) });
                paintParameter.c.save(); // ensure we can later restore the configuration
                switch (marker) {
                    case exports.ShapeBpmnMarkerKind.LOOP:
                        this.iconPainter.paintLoopIcon(paintParameter);
                        break;
                    case exports.ShapeBpmnMarkerKind.MULTI_INSTANCE_SEQUENTIAL:
                        this.iconPainter.paintSequentialMultiInstanceIcon(paintParameter);
                        break;
                    case exports.ShapeBpmnMarkerKind.MULTI_INSTANCE_PARALLEL:
                        this.iconPainter.paintParallelMultiInstanceIcon(paintParameter);
                        break;
                    case exports.ShapeBpmnMarkerKind.EXPAND:
                        this.iconPainter.paintExpandIcon(paintParameter);
                        break;
                }
                // Restore original configuration to avoid side effects if the iconPainter changed the canvas configuration (colors, ....)
                paintParameter.c.restore();
            });
        }
    }
    getIconOriginForMarkerIcon(allMarkers, markerOrder) {
        let setIconOrigin;
        if (allMarkers === 1) {
            setIconOrigin = (canvas) => canvas.setIconOriginForIconBottomCentered();
        }
        else if (allMarkers === 2) {
            setIconOrigin = (canvas) => {
                canvas.setIconOriginForIconBottomCentered();
                const xTranslation = Math.pow(-1, markerOrder) * (exports.StyleDefault.SHAPE_ACTIVITY_MARKER_ICON_SIZE / 2 + exports.StyleDefault.SHAPE_ACTIVITY_MARKER_ICON_MARGIN);
                canvas.translateIconOrigin(xTranslation, 0);
            };
        }
        else {
            // TODO: once we support 3 markers in a group
            throw new Error('NOT_IMPLEMENTED - to have a group of >2 markers in a row, centered in the task, implement this piece of code');
        }
        return setIconOrigin;
    }
}
class BaseTaskShape extends BaseActivityShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintForeground(c, x, y, w, h) {
        super.paintForeground(c, x, y, w, h);
        this.paintTaskIcon(buildPaintParameter(c, x, y, w, h, this));
    }
}
/**
 * @internal
 */
class TaskShape extends BaseTaskShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    paintTaskIcon(paintParameter) {
        // No symbol for the BPMN Task
        this.iconPainter.paintEmptyIcon();
    }
}
/**
 * @internal
 */
class ServiceTaskShape extends BaseTaskShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintTaskIcon(paintParameter) {
        this.iconPainter.paintGearIcon(Object.assign(Object.assign({}, paintParameter), { setIconOrigin: (canvas) => canvas.setIconOriginToShapeTopLeftProportionally(20) }));
    }
}
/**
 * @internal
 */
class UserTaskShape extends BaseTaskShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintTaskIcon(paintParameter) {
        this.iconPainter.paintPersonIcon(Object.assign(Object.assign({}, paintParameter), { setIconOrigin: (canvas) => canvas.setIconOriginToShapeTopLeftProportionally(20) }));
    }
}
/**
 * @internal
 */
class ReceiveTaskShape extends BaseTaskShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintTaskIcon(paintParameter) {
        if (!StyleUtils.getBpmnIsInstantiating(this.style)) {
            paintEnvelopeIcon(paintParameter, false);
            return;
        }
        const leftMargin = 4;
        const topMargin = 4;
        // paint a fixed size circle
        const circleShapeConfiguration = Object.assign(Object.assign({}, paintParameter.shape), { w: 20, h: 20 });
        this.iconPainter.paintCircleIcon({
            c: paintParameter.c,
            shape: circleShapeConfiguration,
            icon: Object.assign(Object.assign({}, paintParameter.icon), { isFilled: false }),
            ratioFromParent: undefined,
            setIconOrigin: (canvas) => canvas.setIconOriginToShapeTopLeft(topMargin, leftMargin),
        });
        // paint an envelope centered inside the circle, with dimensions proportional to the circle dimensions
        // set the actual origin of the circle icon: this is what 'setIconOriginToShapeTopLeft' has done prior painting the circle icon
        circleShapeConfiguration.x += leftMargin;
        circleShapeConfiguration.y += topMargin;
        this.iconPainter.paintEnvelopeIcon(Object.assign(Object.assign({}, paintParameter), { shape: circleShapeConfiguration, ratioFromParent: 0.65, setIconOrigin: (canvas) => canvas.setIconOriginForIconCentered() }));
    }
}
/**
 * @internal
 */
class SendTaskShape extends BaseTaskShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintTaskIcon(paintParameter) {
        paintEnvelopeIcon(paintParameter, true);
    }
}
/**
 * @internal
 */
class ManualTaskShape extends BaseTaskShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintTaskIcon(paintParameter) {
        this.iconPainter.paintHandIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.18, setIconOrigin: (canvas) => canvas.setIconOriginToShapeTopLeftProportionally(20) }));
    }
}
/**
 * @internal
 */
class ScriptTaskShape extends BaseTaskShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintTaskIcon(paintParameter) {
        this.iconPainter.paintScriptIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.22, setIconOrigin: (canvas) => canvas.setIconOriginToShapeTopLeftProportionally(20) }));
    }
}
/**
 * @internal
 */
class CallActivityShape extends BaseActivityShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THICK) {
        super(bounds, fill, stroke, strokewidth);
    }
}
/**
 * @internal
 */
class SubProcessShape extends BaseActivityShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintBackground(c, x, y, w, h) {
        const subProcessKind = StyleUtils.getBpmnSubProcessKind(this.style);
        c.save(); // ensure we can later restore the configuration
        if (subProcessKind === exports.ShapeBpmnSubProcessKind.EVENT) {
            c.setDashed(true, false);
            c.setDashPattern('1 2');
        }
        super.paintBackground(c, x, y, w, h);
        // Restore original configuration to avoid side effects if the iconPainter changed the canvas configuration (colors, ....)
        c.restore();
    }
}
/**
 * @internal
 */
class BusinessRuleTaskShape extends BaseTaskShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
    }
    paintTaskIcon(paintParameter) {
        this.iconPainter.paintTableIcon(Object.assign(Object.assign({}, paintParameter), { ratioFromParent: 0.6, setIconOrigin: (canvas) => canvas.setIconOriginToShapeTopLeftProportionally(15) }));
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class TextAnnotationShape extends mxgraph.mxRectangleShape {
    constructor(bounds, fill, stroke, strokewidth = exports.StyleDefault.STROKE_WIDTH_THIN) {
        super(bounds, fill, stroke, strokewidth);
        this.TEXT_ANNOTATION_BORDER_LENGTH = 10;
    }
    paintBackground(c, x, y, w, h) {
        // paint sort of left square bracket shape - for text annotation
        c.begin();
        c.moveTo(x + this.TEXT_ANNOTATION_BORDER_LENGTH, y);
        c.lineTo(x, y);
        c.lineTo(x, y + h);
        c.lineTo(x + this.TEXT_ANNOTATION_BORDER_LENGTH, y + h);
        c.fillAndStroke();
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The real value of the visible message field in the BPMN XSD, except 'None'.
 * @category BPMN
 */
var MessageVisibleKind;
(function (MessageVisibleKind) {
    MessageVisibleKind["NONE"] = "none";
    MessageVisibleKind["INITIATING"] = "initiating";
    MessageVisibleKind["NON_INITIATING"] = "non_initiating";
})(MessageVisibleKind || (MessageVisibleKind = {}));

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class MessageFlowIconShape extends mxgraph.mxRectangleShape {
    constructor(bounds, fill, stroke, strokewidth) {
        super(bounds, fill, stroke, strokewidth);
        this.iconPainter = IconPainterProvider.get();
    }
    paintVertexShape(c, x, y, w, h) {
        const withFilledIcon = StyleUtils.getBpmnIsInitiating(this.style) === MessageVisibleKind.NON_INITIATING;
        const paintParameter = buildPaintParameter(c, x, y, w, h, this, 1, withFilledIcon);
        this.iconPainter.paintEnvelopeIcon(paintParameter);
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Compute the all class names associated to a given bpmn element kind in an hyphen case form.
 *
 * @param bpmnElementKind the string representation of a BPMN element kind i.e {@link ShapeBpmnElementKind} and {@link FlowKind}.
 * @param isLabel the boolean that indicates if class must be computed for label.
 * @internal
 */
function computeAllBpmnClassNames(bpmnElementKind, isLabel) {
    const classes = [];
    classes.push(computeBpmnBaseClassName(bpmnElementKind));
    if (isLabel) {
        classes.push('bpmn-label');
    }
    return classes;
}
/**
 * Compute the class name in an hyphen case form.
 * For instance, `userTask` returns `bpmn-user-task`
 *
 * @param bpmnElementKind the string representation of a BPMN element kind i.e {@link ShapeBpmnElementKind} and {@link FlowKind}.
 * @internal
 */
function computeBpmnBaseClassName(bpmnElementKind) {
    return !bpmnElementKind ? '' : 'bpmn-' + bpmnElementKind.replace(/([A-Z])/g, g => '-' + g[0].toLowerCase());
}
/**
 * Extract the BPMN kind from the style of the cell. It is the string representation of the BPMN element kind i.e {@link ShapeBpmnElementKind} and {@link FlowKind}.
 * @param cell the mxCell whose style is checked.
 * @internal
 */
function extractBpmnKindFromStyle(cell) {
    return cell.style.split(';')[0];
}

/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MxGraphCustomOverlay extends mxgraph.mxCellOverlay {
    constructor(label, options) {
        super(null, '', options.position.horizontalAlign, options.position.verticalAlign, null, 'default');
        this.label = label;
        this.style = options.style;
    }
    // Based on original method from mxCellOverlay (mxCellOverlay.prototype.getBounds)
    getBounds(state) {
        const isEdge = state.view.graph.getModel().isEdge(state.cell);
        const s = state.view.scale;
        let pt;
        // START bpmn-visualization CUSTOMIZATION
        // 0 values to position the text overlays on extreme/center points
        const w = 0;
        const h = 0;
        // END bpmn-visualization CUSTOMIZATION
        if (isEdge) {
            pt = this.computeEdgeBounds(state);
        }
        else {
            pt = new mxgraph.mxPoint();
            if (this.align == mxgraph.mxConstants.ALIGN_LEFT) {
                pt.x = state.x;
            }
            else if (this.align == mxgraph.mxConstants.ALIGN_CENTER) {
                pt.x = state.x + state.width / 2;
            }
            else {
                pt.x = state.x + state.width;
            }
            if (this.verticalAlign == mxgraph.mxConstants.ALIGN_TOP) {
                pt.y = state.y;
            }
            else if (this.verticalAlign == mxgraph.mxConstants.ALIGN_MIDDLE) {
                pt.y = state.y + state.height / 2;
            }
            else {
                pt.y = state.y + state.height;
            }
        }
        return new mxgraph.mxRectangle(Math.round(pt.x - (w * this.defaultOverlap - this.offset.x) * s), Math.round(pt.y - (h * this.defaultOverlap - this.offset.y) * s), w * s, h * s);
    }
    computeEdgeBounds(state) {
        const pts = state.absolutePoints;
        // 1st point for start position
        if (this.align == mxgraph.mxConstants.ALIGN_LEFT) {
            return pts[0];
        }
        // middle point for middle position
        else if (this.align == mxgraph.mxConstants.ALIGN_CENTER) {
            if (pts.length % 2 == 1) {
                return pts[Math.floor(pts.length / 2)];
            }
            else {
                const idx = pts.length / 2;
                const p0 = pts[idx - 1];
                const p1 = pts[idx];
                return new mxgraph.mxPoint(p0.x + (p1.x - p0.x) / 2, p0.y + (p1.y - p0.y) / 2);
            }
        }
        // last point for end position
        else {
            return pts[pts.length - 1];
        }
    }
}

/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class OverlayBadgeShape extends mxgraph.mxText {
    constructor(value, bounds, style) {
        super(value, bounds, undefined, undefined, style.font.color, undefined, style.font.size, undefined, undefined, undefined, undefined, undefined, undefined, undefined, style.fill.color, style.stroke.color);
        this.fillOpacity = style.fill.opacity;
        this.strokewidth = style.stroke.width;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class ShapeConfigurator {
    configureShapes() {
        this.initMxShapePrototype();
        this.registerShapes();
        this.initMxCellRendererCreateCellOverlays();
    }
    registerShapes() {
        // events
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.EVENT_END, EndEventShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.EVENT_START, StartEventShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.EVENT_INTERMEDIATE_THROW, ThrowIntermediateEventShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.EVENT_INTERMEDIATE_CATCH, CatchIntermediateEventShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.EVENT_BOUNDARY, BoundaryEventShape);
        // gateways
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.GATEWAY_EVENT_BASED, EventBasedGatewayShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.GATEWAY_EXCLUSIVE, ExclusiveGatewayShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.GATEWAY_INCLUSIVE, InclusiveGatewayShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.GATEWAY_PARALLEL, ParallelGatewayShape);
        // activities
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.SUB_PROCESS, SubProcessShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.CALL_ACTIVITY, CallActivityShape);
        // tasks
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.TASK, TaskShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.TASK_SERVICE, ServiceTaskShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.TASK_USER, UserTaskShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.TASK_RECEIVE, ReceiveTaskShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.TASK_SEND, SendTaskShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.TASK_MANUAL, ManualTaskShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.TASK_SCRIPT, ScriptTaskShape);
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.TASK_BUSINESS_RULE, BusinessRuleTaskShape);
        // artifacts
        mxgraph.mxCellRenderer.registerShape(exports.ShapeBpmnElementKind.TEXT_ANNOTATION, TextAnnotationShape);
        // shapes for flows
        mxgraph.mxCellRenderer.registerShape(exports.StyleIdentifier.BPMN_STYLE_MESSAGE_FLOW_ICON, MessageFlowIconShape);
    }
    initMxShapePrototype() {
        // The following is copied from the mxgraph mxShape implementation then converted to TypeScript and enriched for bpmn-visualization
        // It is needed for adding the custom attributes that permits identification of the BPMN elements in the DOM
        mxgraph.mxShape.prototype.createSvgCanvas = function () {
            const canvas = new mxgraph.mxSvgCanvas2D(this.node, false);
            canvas.strokeTolerance = this.pointerEvents ? this.svgStrokeTolerance : 0;
            canvas.pointerEventsValue = this.svgPointerEvents;
            // TODO remove this commented code (has been removed in mxgraph@4.1.1
            //((canvas as unknown) as mxgraph.mxSvgCanvas2D).blockImagePointerEvents = isFF;
            const off = this.getSvgScreenOffset();
            if (off != 0) {
                this.node.setAttribute('transform', 'translate(' + off + ',' + off + ')');
            }
            else {
                this.node.removeAttribute('transform');
            }
            // START bpmn-visualization CUSTOMIZATION
            // add attributes to be able to identify elements in DOM
            if (this.state && this.state.cell) {
                // 'this.state.style' = the style definition associated with the cell
                // 'this.state.cell.style' = the style applied to the cell: 1st element: style name = bpmn shape name
                const cell = this.state.cell;
                // dialect = strictHtml is set means that current node holds an html label
                let allBpmnClassNames = computeAllBpmnClassNames(extractBpmnKindFromStyle(cell), this.dialect === mxgraph.mxConstants.DIALECT_STRICTHTML);
                const extraCssClasses = this.state.style[exports.StyleIdentifier.BPMN_STYLE_EXTRA_CSS_CLASSES];
                if (extraCssClasses) {
                    allBpmnClassNames = allBpmnClassNames.concat(extraCssClasses);
                }
                this.node.setAttribute('class', allBpmnClassNames.join(' '));
                this.node.setAttribute('data-bpmn-id', this.state.cell.id);
            }
            // END bpmn-visualization CUSTOMIZATION
            canvas.minStrokeWidth = this.minSvgStrokeWidth;
            if (!this.antiAlias) {
                // Rounds all numbers in the SVG output to integers
                canvas.format = function (value) {
                    return Math.round(parseFloat(value));
                };
            }
            return canvas;
        };
    }
    initMxCellRendererCreateCellOverlays() {
        mxgraph.mxCellRenderer.prototype.createCellOverlays = function (state) {
            const graph = state.view.graph;
            const overlays = graph.getCellOverlays(state.cell);
            let dict = null;
            if (overlays != null) {
                dict = new mxgraph.mxDictionary();
                for (let currentOverlay of overlays) {
                    const shape = (state.overlays != null) ? state.overlays.remove(currentOverlay) : null;
                    if (shape != null) {
                        dict.put(currentOverlay, shape);
                        continue;
                    }
                    let overlayShape;
                    // START bpmn-visualization CUSTOMIZATION
                    if (currentOverlay instanceof MxGraphCustomOverlay) {
                        overlayShape = new OverlayBadgeShape(currentOverlay.label, new mxgraph.mxRectangle(0, 0, 0, 0), currentOverlay.style);
                    }
                    else {
                        overlayShape = new mxgraph.mxImageShape(new mxgraph.mxRectangle(0, 0, 0, 0), currentOverlay.image.src);
                        overlayShape.preserveImageAspect = false;
                    }
                    // END bpmn-visualization CUSTOMIZATION
                    overlayShape.dialect = state.view.graph.dialect;
                    overlayShape.overlay = currentOverlay;
                    // The 'initializeOverlay' signature forces us to hardly cast the overlayShape
                    this.initializeOverlay(state, overlayShape);
                    this.installCellOverlayListeners(state, currentOverlay, overlayShape);
                    if (currentOverlay.cursor != null) {
                        overlayShape.node.style.cursor = currentOverlay.cursor;
                    }
                    // START bpmn-visualization CUSTOMIZATION
                    if (overlayShape instanceof OverlayBadgeShape) {
                        overlayShape.node.classList.add('overlay-badge');
                        overlayShape.node.setAttribute('data-bpmn-id', state.cell.id);
                    }
                    // END bpmn-visualization CUSTOMIZATION
                    dict.put(currentOverlay, overlayShape);
                }
            }
            // Removes unused
            if (state.overlays != null) {
                state.overlays.visit(function (id, shape) {
                    shape.destroy();
                });
            }
            state.overlays = dict;
        };
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class MarkerConfigurator {
    configureMarkers() {
        this.registerArrowDashMarker();
    }
    registerArrowDashMarker() {
        // This implementation is adapted from the draw.io BPMN 'dash' marker
        // https://github.com/jgraph/drawio/blob/f539f1ff362e76127dcc7e68b5a9d83dd7d4965c/src/main/webapp/js/mxgraph/Shapes.js#L2796
        const createMarker = (c, shape, type, pe, unitX, unitY, size, source, strokewidth) => {
            const nx = unitX * (size + strokewidth + 4);
            const ny = unitY * (size + strokewidth + 4);
            return function () {
                c.begin();
                c.moveTo(pe.x - nx / 2 - ny / 2, pe.y - ny / 2 + nx / 2);
                c.lineTo(pe.x + ny / 2 - (3 * nx) / 2, pe.y - (3 * ny) / 2 - nx / 2);
                c.stroke();
            };
        };
        mxgraph.mxMarker.addMarker(exports.MarkerIdentifier.ARROW_DASH, createMarker);
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @default {@link FitType.None}
 *
 * @category Initialization
 */
exports.FitType = void 0;
(function (FitType) {
    /** No fit, use dimensions and coordinates from the BPMN diagram. */
    FitType["None"] = "None";
    /** Fit the whole html container available to render the BPMN diagram. */
    FitType["HorizontalVertical"] = "HorizontalVertical";
    /** Fit only horizontally. */
    FitType["Horizontal"] = "Horizontal";
    /** Fit only vertically. */
    FitType["Vertical"] = "Vertical";
    /** Fit and center the BPMN Diagram. */
    FitType["Center"] = "Center";
})(exports.FitType || (exports.FitType = {}));

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
function ensureInRange(value, min, max, defaultValue) {
    let inRangeValue = value == undefined ? defaultValue : value;
    inRangeValue = Math.min(Math.max(inRangeValue, min), max);
    return inRangeValue;
}
/**
 * @internal
 */
function ensurePositiveValue(input) {
    return Math.max(input || 0, 0);
}
/**
 * Make sure the configuration parameters are defined and in range
 * @param config the {@link ZoomConfiguration} to make valid
 * @internal
 */
function ensureValidZoomConfiguration(config) {
    const validatedConfig = config !== null && config !== void 0 ? config : {};
    validatedConfig.debounceDelay = ensureInRange(validatedConfig.debounceDelay, 0, 100, 50);
    validatedConfig.throttleDelay = ensureInRange(validatedConfig.throttleDelay, 0, 100, 50);
    return validatedConfig;
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BpmnMxGraph extends mxgraph.mxGraph {
    /**
     * @internal
     */
    constructor(container) {
        super(container);
        this.container = container;
        this.cumulativeZoomFactor = 1;
    }
    /**
     * Overridden to set initial cumulativeZoomFactor
     * @internal
     */
    fit(border, keepOrigin, margin, enabled, ignoreWidth, ignoreHeight, maxHeight) {
        const scale = super.fit(border, keepOrigin, margin, enabled, ignoreWidth, ignoreHeight, maxHeight);
        this.cumulativeZoomFactor = scale;
        return scale;
    }
    /**
     * Overridden to set initial cumulativeZoomFactor
     * @internal
     */
    zoomActual() {
        super.zoomActual();
        this.cumulativeZoomFactor = this.view.scale;
    }
    /**
     * @internal
     */
    customFit(fitOptions) {
        // TODO avoid extra zoom/fit reset
        // see https://github.com/process-analytics/bpmn-visualization-js/issues/888
        this.zoomActual();
        const type = fitOptions === null || fitOptions === void 0 ? void 0 : fitOptions.type;
        if (type == undefined || type == exports.FitType.None) {
            return;
        }
        const margin = ensurePositiveValue(fitOptions === null || fitOptions === void 0 ? void 0 : fitOptions.margin);
        if (type != exports.FitType.Center) {
            let ignoreWidth = false;
            let ignoreHeight = false;
            switch (type) {
                case exports.FitType.Horizontal:
                    ignoreHeight = true;
                    break;
                case exports.FitType.Vertical:
                    ignoreWidth = true;
                    break;
            }
            this.fit(this.border, false, margin, true, ignoreWidth, ignoreHeight);
        }
        else {
            // Inspired from https://jgraph.github.io/mxgraph/docs/js-api/files/view/mxGraph-js.html#mxGraph.fit
            const maxScale = 3;
            const bounds = this.getGraphBounds();
            const clientWidth = this.container.clientWidth - margin;
            const clientHeight = this.container.clientHeight - margin;
            const width = bounds.width / this.view.scale;
            const height = bounds.height / this.view.scale;
            const scale = Math.min(maxScale, Math.min(clientWidth / width, clientHeight / height));
            this.cumulativeZoomFactor = scale;
            this.view.scaleAndTranslate(scale, (margin + clientWidth - width * scale) / (2 * scale) - bounds.x / this.view.scale, (margin + clientHeight - height * scale) / (2 * scale) - bounds.y / this.view.scale);
        }
    }
    /**
     * @internal
     */
    zoomTo(scale, center, up, offsetX, offsetY, performScaling) {
        if (scale === null) {
            const [newScale, dx, dy] = this.getScaleAndTranslationDeltas(up, offsetX, offsetY);
            if (performScaling) {
                this.view.scaleAndTranslate(newScale, this.view.translate.x + dx, this.view.translate.y + dy);
            }
        }
        else {
            super.zoomTo(scale, center);
        }
    }
    /**
     * @internal
     */
    createMouseWheelZoomExperience(config) {
        config = ensureValidZoomConfiguration(config);
        mxgraph.mxEvent.addMouseWheelListener(debounce__default['default'](this.getZoomHandler(true), config.debounceDelay), this.container);
        mxgraph.mxEvent.addMouseWheelListener(throttle__default['default'](this.getZoomHandler(false), config.throttleDelay), this.container);
    }
    // solution inspired by https://github.com/algenty/grafana-flowcharting/blob/0.9.0/src/graph_class.ts#L1254
    performZoom(up, evt, performScaling) {
        const [x, y] = this.getRelativeEventCoordinates(evt);
        this.zoomTo(null, null, up, x, y, performScaling);
        if (performScaling) {
            mxgraph.mxEvent.consume(evt);
        }
    }
    getZoomHandler(calculateFactorOnly) {
        return (event, up) => {
            // TODO review type: this hack is due to typed-mxgraph
            const evt = event;
            if (mxgraph.mxEvent.isConsumed(evt)) {
                return;
            }
            // only the ctrl key
            const isZoomWheelEvent = evt.ctrlKey && !evt.altKey && !evt.shiftKey && !evt.metaKey;
            if (isZoomWheelEvent) {
                this.performZoom(up, evt, calculateFactorOnly);
            }
        };
    }
    getRelativeEventCoordinates(evt) {
        const rect = this.container.getBoundingClientRect();
        const x = evt.clientX - rect.left;
        const y = evt.clientY - rect.top;
        return [x, y];
    }
    getScaleAndTranslationDeltas(up, offsetX, offsetY) {
        let dx = offsetX * 2;
        let dy = offsetY * 2;
        const [factor, scale] = this.calculateFactorAndScale(up);
        [dx, dy] = this.calculateTranslationDeltas(factor, scale, dx, dy);
        return [scale, dx, dy];
    }
    calculateTranslationDeltas(factor, scale, dx, dy) {
        if (factor > 1) {
            const f = (factor - 1) / (scale * 2);
            dx *= -f;
            dy *= -f;
        }
        else {
            const f = (1 / factor - 1) / (this.view.scale * 2);
            dx *= f;
            dy *= f;
        }
        return [dx, dy];
    }
    calculateFactorAndScale(up) {
        // as with new zoom scaling is invoked 2x the factor's square root is taken
        this.cumulativeZoomFactor *= up ? Math.sqrt(1.25) : Math.sqrt(0.8);
        let factor = this.cumulativeZoomFactor / this.view.scale;
        const scale = Math.round(this.view.scale * factor * 100) / 100;
        factor = scale / this.view.scale;
        return [factor, scale];
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Configure the BpmnMxGraph graph that can be used by the lib
 * <ul>
 *     <li>styles
 *     <li>shapes
 *     <li>markers
 * @internal
 */
class MxGraphConfigurator {
    constructor(container) {
        this.container = container;
        this.graph = new BpmnMxGraph(container);
    }
    configure(options) {
        this.configureGraph();
        this.configureNavigationSupport(options);
        new StyleConfigurator(this.graph).configureStyles();
        new ShapeConfigurator().configureShapes();
        new MarkerConfigurator().configureMarkers();
        return this.graph;
    }
    configureGraph() {
        this.graph.setCellsLocked(true);
        this.graph.setCellsSelectable(false);
        this.graph.setEdgeLabelsMovable(false);
        this.graph.setHtmlLabels(true); // required for wrapping
        // To have the boundary event on the border of a task
        this.graph.setConstrainChildren(false);
        this.graph.setExtendParents(false);
        // Disable folding for container mxCell (pool, lane, sub process, call activity) because we don't need it.
        // This also prevents requesting unavailable images (see #185) as we don't override BpmnMxGraph folding default images.
        this.graph.foldingEnabled = false;
    }
    configureNavigationSupport(options) {
        var _a, _b;
        const panningHandler = this.graph.panningHandler;
        if ((_a = options === null || options === void 0 ? void 0 : options.navigation) === null || _a === void 0 ? void 0 : _a.enabled) {
            // Pan configuration
            panningHandler.addListener(mxgraph.mxEvent.PAN_START, this.getPanningHandler('grab'));
            panningHandler.addListener(mxgraph.mxEvent.PAN_END, this.getPanningHandler('default'));
            this.graph.panningHandler.usePopupTrigger = false; // only use the left button to trigger panning
            // Reimplement the function as we also want to trigger 'panning on cells' (ignoreCell to true) and only on left click
            // The mxGraph standard implementation doesn't ignore right click in this case, so do it by ourself
            panningHandler.isForcePanningEvent = (me) => mxgraph.mxEvent.isLeftMouseButton(me.getEvent()) || mxgraph.mxEvent.isMultiTouchEvent(me.getEvent());
            this.graph.setPanning(true);
            // Zoom configuration
            this.graph.createMouseWheelZoomExperience((_b = options === null || options === void 0 ? void 0 : options.navigation) === null || _b === void 0 ? void 0 : _b.zoom);
        }
        else {
            this.graph.setPanning(false);
            // Disable gesture support for zoom
            panningHandler.setPinchEnabled(false);
            // Disable panning on touch device
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            panningHandler.isForcePanningEvent = (me) => false;
        }
    }
    getPanningHandler(cursor) {
        return this.getPanningHandlerCallback(cursor).bind(this.graph);
    }
    getPanningHandlerCallback(cursor) {
        return function () {
            this.isEnabled() && (this.container.style.cursor = cursor);
        };
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class CoordinatesTranslator {
    constructor(graph) {
        this.graph = graph;
    }
    /**
     * Compute an absolute coordinate in relative coordinates in the parent cell referential.
     * @param parent the cell to use for the new coordinate referential
     * @param absoluteCoordinate
     */
    computeRelativeCoordinates(parent, absoluteCoordinate) {
        const translateForRoot = this.getTranslateForRoot(parent);
        const relativeX = absoluteCoordinate.x + translateForRoot.x;
        const relativeY = absoluteCoordinate.y + translateForRoot.y;
        return new mxgraph.mxPoint(relativeX, relativeY);
    }
    // Returns the translation to be applied to a cell whose mxGeometry x and y values are expressed with absolute coordinates
    // (i.e related to the graph default parent) you want to assign as parent to the cell passed as argument of this function.
    // That way, you will be able to express the cell coordinates as relative to its parent cell.
    //
    // This implementation is taken from the example described in the documentation of mxgraph#getTranslateForRoot (4.1.1)
    // The translation is generally negative
    getTranslateForRoot(cell) {
        const model = this.graph.getModel();
        const offset = new mxgraph.mxPoint(0, 0);
        while (cell != null) {
            const geo = model.getGeometry(cell);
            if (geo != null) {
                offset.x -= geo.x;
                offset.y -= geo.y;
            }
            cell = model.getParent(cell);
        }
        return offset;
    }
    /**
     * Compute the center of the provided `mxCell` for absolute geometry: this is the center point of a segment whose edges
     * are the terminal points of the mxCell geometry points. Returns `undefined` if the 2 terminal points are not available.
     *
     * The center coordinates are given in the same referential as the `mxCell`, so relative to its parent.
     */
    computeEdgeCenter(mxEdge) {
        const points = mxEdge.geometry.points;
        const p0 = points[0];
        const pe = points[points.length - 1];
        if (p0 != null && pe != null) {
            const dx = pe.x - p0.x;
            const dy = pe.y - p0.y;
            return new mxgraph.mxPoint(p0.x + dx / 2, p0.y + dy / 2);
        }
        return undefined;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class MxGraphRenderer {
    constructor(graph, coordinatesTranslator, styleConfigurator) {
        this.graph = graph;
        this.coordinatesTranslator = coordinatesTranslator;
        this.styleConfigurator = styleConfigurator;
    }
    render(renderedModel, loadOptions) {
        this.insertShapesAndEdges(renderedModel);
        this.graph.customFit(loadOptions === null || loadOptions === void 0 ? void 0 : loadOptions.fit);
    }
    insertShapesAndEdges({ pools, lanes, subprocesses, otherFlowNodes, boundaryEvents, edges }) {
        const model = this.graph.getModel();
        model.clear(); // ensure to remove manual changes or already loaded graphs
        model.beginUpdate();
        try {
            this.insertShapes(pools);
            this.insertShapes(lanes);
            this.insertShapes(subprocesses);
            this.insertShapes(otherFlowNodes);
            // last shape as the boundary event parent must be in the model (subprocess or activity)
            this.insertShapes(boundaryEvents);
            // at last as edge source and target must be present in the model prior insertion, otherwise they are not rendered
            this.insertEdges(edges);
        }
        finally {
            model.endUpdate();
        }
    }
    insertShapes(shapes) {
        shapes.forEach(shape => {
            this.insertShape(shape);
        });
    }
    getParent(bpmnElement) {
        const bpmnElementParent = this.getCell(bpmnElement.parentId);
        if (bpmnElementParent) {
            return bpmnElementParent;
        }
        if (!ShapeUtil.isBoundaryEvent(bpmnElement.kind)) {
            return this.graph.getDefaultParent();
        }
    }
    insertShape(shape) {
        var _a;
        const bpmnElement = shape.bpmnElement;
        if (bpmnElement) {
            const parent = this.getParent(bpmnElement);
            if (!parent) {
                // TODO error management
                console.warn('Not possible to insert shape %s: parent cell %s is not found', bpmnElement.id, bpmnElement.parentId);
                return;
            }
            const bounds = shape.bounds;
            let labelBounds = (_a = shape.label) === null || _a === void 0 ? void 0 : _a.bounds;
            // pool/lane label bounds are not managed for now (use hard coded values)
            labelBounds = ShapeUtil.isPoolOrLane(bpmnElement.kind) ? undefined : labelBounds;
            const style = this.styleConfigurator.computeStyle(shape, labelBounds);
            this.insertVertex(parent, bpmnElement.id, bpmnElement.name, bounds, labelBounds, style);
        }
    }
    insertEdges(edges) {
        edges.forEach(edge => {
            var _a;
            const bpmnElement = edge.bpmnElement;
            if (bpmnElement) {
                const parent = this.graph.getDefaultParent();
                const source = this.getCell(bpmnElement.sourceRefId);
                const target = this.getCell(bpmnElement.targetRefId);
                const labelBounds = (_a = edge.label) === null || _a === void 0 ? void 0 : _a.bounds;
                const style = this.styleConfigurator.computeStyle(edge, labelBounds);
                const mxEdge = this.graph.insertEdge(parent, bpmnElement.id, bpmnElement.name, source, target, style);
                this.insertWaypoints(edge.waypoints, mxEdge);
                if (labelBounds) {
                    mxEdge.geometry.width = labelBounds.width;
                    mxEdge.geometry.height = labelBounds.height;
                    const edgeCenterCoordinate = this.coordinatesTranslator.computeEdgeCenter(mxEdge);
                    if (edgeCenterCoordinate) {
                        mxEdge.geometry.relative = false;
                        const labelBoundsRelativeCoordinateFromParent = this.coordinatesTranslator.computeRelativeCoordinates(mxEdge.parent, new mxgraph.mxPoint(labelBounds.x, labelBounds.y));
                        const relativeLabelX = labelBoundsRelativeCoordinateFromParent.x + labelBounds.width / 2 - edgeCenterCoordinate.x;
                        const relativeLabelY = labelBoundsRelativeCoordinateFromParent.y - edgeCenterCoordinate.y;
                        mxEdge.geometry.offset = new mxgraph.mxPoint(relativeLabelX, relativeLabelY);
                    }
                }
                this.insertMessageFlowIconIfNeeded(edge, mxEdge);
            }
        });
    }
    insertMessageFlowIconIfNeeded(edge, mxEdge) {
        if (edge.bpmnElement instanceof MessageFlow && edge.messageVisibleKind !== MessageVisibleKind.NONE) {
            const cell = this.graph.insertVertex(mxEdge, `messageFlowIcon_of_${mxEdge.id}`, undefined, 0, 0, 20, 14, this.styleConfigurator.computeMessageFlowIconStyle(edge));
            cell.geometry.relative = true;
            cell.geometry.offset = new mxgraph.mxPoint(-10, -7);
        }
    }
    insertWaypoints(waypoints, mxEdge) {
        if (waypoints) {
            mxEdge.geometry.points = waypoints.map(waypoint => {
                return this.coordinatesTranslator.computeRelativeCoordinates(mxEdge.parent, new mxgraph.mxPoint(waypoint.x, waypoint.y));
            });
        }
    }
    getCell(id) {
        return this.graph.getModel().getCell(id);
    }
    insertVertex(parent, id, value, bounds, labelBounds, style) {
        const vertexCoordinates = this.coordinatesTranslator.computeRelativeCoordinates(parent, new mxgraph.mxPoint(bounds.x, bounds.y));
        const cell = this.graph.insertVertex(parent, id, value, vertexCoordinates.x, vertexCoordinates.y, bounds.width, bounds.height, style);
        if (labelBounds) {
            // label coordinates are relative in the cell referential coordinates
            const relativeLabelX = labelBounds.x - bounds.x;
            const relativeLabelY = labelBounds.y - bounds.y;
            cell.geometry.offset = new mxgraph.mxPoint(relativeLabelX, relativeLabelY);
        }
        return cell;
    }
}
/**
 * @internal
 */
function newMxGraphRenderer(graph) {
    return new MxGraphRenderer(graph, new CoordinatesTranslator(graph), new StyleConfigurator(graph));
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Parse bpmn xml source
 * @internal
 */
class BpmnXmlParser {
    constructor() {
        this.options = {
            attributeNamePrefix: '',
            ignoreNameSpace: true,
            ignoreAttributes: false,
            parseAttributeValue: true,
            attrValueProcessor: (val) => {
                return decode.decodeXML(val);
            },
        };
    }
    // disable eslint as it comes from 3rd party
    parse(xml) {
        return parser.parse(xml, this.options);
    }
}

/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function convertEmptyStringAndObject(element, acceptEmptyString) {
    if (element === '') {
        return acceptEmptyString ? {} : undefined;
    }
    return element;
}
/**
 * @internal
 */
function ensureIsArray(elements, acceptEmptyString = false) {
    if (elements === undefined || elements === null) {
        return [];
    }
    let returnedArray;
    if (!Array.isArray(elements)) {
        returnedArray = [convertEmptyStringAndObject(elements, acceptEmptyString)];
    }
    else {
        returnedArray = elements.map(element => convertEmptyStringAndObject(element, acceptEmptyString));
    }
    return returnedArray.filter(value => value);
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class CollaborationConverter {
    constructor(convertedElements) {
        this.convertedElements = convertedElements;
    }
    deserialize(collaborations) {
        ensureIsArray(collaborations).forEach(collaboration => this.parseCollaboration(collaboration));
    }
    parseCollaboration(collaboration) {
        this.buildParticipant(collaboration.participant);
        this.buildMessageFlows(collaboration.messageFlow);
    }
    buildParticipant(bpmnElements) {
        ensureIsArray(bpmnElements).forEach(participant => {
            this.convertedElements.registerParticipant(new Participant(participant.id, participant.name, participant.processRef));
        });
    }
    buildMessageFlows(bpmnElements) {
        ensureIsArray(bpmnElements).forEach(messageFlow => {
            this.convertedElements.registerMessageFlow(new MessageFlow(messageFlow.id, messageFlow.name, messageFlow.sourceRef, messageFlow.targetRef));
        });
    }
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * @internal
 */
class ProcessConverter {
    constructor(convertedElements) {
        this.convertedElements = convertedElements;
        this.defaultSequenceFlowIds = [];
    }
    deserialize(processes) {
        ensureIsArray(processes).forEach(process => this.parseProcess(process));
    }
    parseProcess(process) {
        this.convertedElements.registerProcess(new ShapeBpmnElement(process.id, process.name, exports.ShapeBpmnElementKind.POOL));
        this.buildProcessInnerElements(process);
    }
    buildProcessInnerElements(process) {
        const processId = process.id;
        // flow nodes
        ShapeUtil.flowNodeKinds()
            .filter(kind => kind != exports.ShapeBpmnElementKind.EVENT_BOUNDARY)
            .forEach(kind => this.buildFlowNodeBpmnElements(processId, process[kind], kind));
        // process boundary events afterwards as we need its parent activity to be available when building it
        this.buildFlowNodeBpmnElements(processId, process.boundaryEvent, exports.ShapeBpmnElementKind.EVENT_BOUNDARY);
        // containers
        this.buildLaneBpmnElements(processId, process[exports.ShapeBpmnElementKind.LANE]);
        this.buildLaneSetBpmnElements(processId, process['laneSet']);
        // flows
        this.buildSequenceFlows(process[FlowKind.SEQUENCE_FLOW]);
        this.buildAssociationFlows(process[FlowKind.ASSOCIATION_FLOW]);
    }
    buildFlowNodeBpmnElements(processId, bpmnElements, kind) {
        ensureIsArray(bpmnElements).forEach(bpmnElement => {
            let shapeBpmnElement;
            if (ShapeUtil.isEvent(kind)) {
                shapeBpmnElement = this.buildShapeBpmnEvent(bpmnElement, kind, processId);
            }
            else if (ShapeUtil.isActivity(kind)) {
                shapeBpmnElement = this.buildShapeBpmnActivity(bpmnElement, kind, processId);
            }
            else if (kind == exports.ShapeBpmnElementKind.GATEWAY_EVENT_BASED) {
                const eventBasedGatewayBpmnElement = bpmnElement;
                shapeBpmnElement = new ShapeBpmnEventBasedGateway(bpmnElement.id, eventBasedGatewayBpmnElement.name, processId, eventBasedGatewayBpmnElement.instantiate, exports.ShapeBpmnEventBasedGatewayKind[eventBasedGatewayBpmnElement.eventGatewayType]);
            }
            else {
                // @ts-ignore We know that the text & name fields are not on all types, but it's already tested
                const name = kind === exports.ShapeBpmnElementKind.TEXT_ANNOTATION ? bpmnElement.text : bpmnElement.name;
                // @ts-ignore We know that the instantiate field is not on all types, but it's already tested
                shapeBpmnElement = new ShapeBpmnElement(bpmnElement.id, name, kind, processId, bpmnElement.instantiate);
            }
            // @ts-ignore We know that the default field is not on all types, but it's already tested
            const defaultFlow = bpmnElement.default;
            if (ShapeUtil.isWithDefaultSequenceFlow(kind) && defaultFlow) {
                this.defaultSequenceFlowIds.push(defaultFlow);
            }
            if (shapeBpmnElement) {
                this.convertedElements.registerFlowNode(shapeBpmnElement);
            }
        });
    }
    buildShapeBpmnActivity(bpmnElement, kind, processId) {
        const markers = this.buildMarkers(bpmnElement);
        if (ShapeUtil.isSubProcess(kind)) {
            return this.buildShapeBpmnSubProcess(bpmnElement, processId, markers);
        }
        if (!ShapeUtil.isCallActivity(kind)) {
            // @ts-ignore
            return new ShapeBpmnActivity(bpmnElement.id, bpmnElement.name, kind, processId, bpmnElement.instantiate, markers);
        }
        if (!this.convertedElements.isGlobalTask(bpmnElement.calledElement)) {
            return new ShapeBpmnCallActivity(bpmnElement.id, bpmnElement.name, exports.ShapeBpmnCallActivityKind.CALLING_PROCESS, processId, markers);
        }
    }
    buildMarkers(bpmnElement) {
        const markers = [];
        // @ts-ignore We know that the standardLoopCharacteristics field is not on all types, but it's already tested
        const standardLoopCharacteristics = bpmnElement.standardLoopCharacteristics;
        // @ts-ignore We know that the multiInstanceLoopCharacteristics field is not on all types, but it's already tested
        const multiInstanceLoopCharacteristics = ensureIsArray(bpmnElement.multiInstanceLoopCharacteristics, true)[0];
        if (standardLoopCharacteristics || standardLoopCharacteristics === '') {
            markers.push(exports.ShapeBpmnMarkerKind.LOOP);
        }
        else if (multiInstanceLoopCharacteristics && multiInstanceLoopCharacteristics.isSequential) {
            markers.push(exports.ShapeBpmnMarkerKind.MULTI_INSTANCE_SEQUENTIAL);
        }
        else if ((multiInstanceLoopCharacteristics && !multiInstanceLoopCharacteristics.isSequential) || multiInstanceLoopCharacteristics === '') {
            markers.push(exports.ShapeBpmnMarkerKind.MULTI_INSTANCE_PARALLEL);
        }
        return markers;
    }
    buildShapeBpmnEvent(bpmnElement, elementKind, processId) {
        const eventDefinitions = this.getEventDefinitions(bpmnElement);
        const numberOfEventDefinitions = eventDefinitions.map(eventDefinition => eventDefinition.counter).reduce((counter, it) => counter + it, 0);
        // do we have a None Event?
        if (numberOfEventDefinitions == 0 && ShapeUtil.canHaveNoneEvent(elementKind)) {
            return new ShapeBpmnEvent(bpmnElement.id, bpmnElement.name, elementKind, exports.ShapeBpmnEventKind.NONE, processId);
        }
        if (numberOfEventDefinitions == 1) {
            const eventKind = eventDefinitions[0].kind;
            if (supportedBpmnEventKinds.includes(eventKind)) {
                if (ShapeUtil.isBoundaryEvent(elementKind)) {
                    return this.buildShapeBpmnBoundaryEvent(bpmnElement, eventKind);
                }
                if (ShapeUtil.isStartEvent(elementKind)) {
                    return new ShapeBpmnStartEvent(bpmnElement.id, bpmnElement.name, eventKind, processId, bpmnElement.isInterrupting);
                }
                return new ShapeBpmnEvent(bpmnElement.id, bpmnElement.name, elementKind, eventKind, processId);
            }
        }
    }
    buildShapeBpmnBoundaryEvent(bpmnElement, eventKind) {
        const parent = this.convertedElements.findFlowNode(bpmnElement.attachedToRef);
        if (ShapeUtil.isActivity(parent === null || parent === void 0 ? void 0 : parent.kind)) {
            return new ShapeBpmnBoundaryEvent(bpmnElement.id, bpmnElement.name, eventKind, bpmnElement.attachedToRef, bpmnElement.cancelActivity);
        }
        else {
            // TODO decide how to manage elements not found during parsing as part of #35
            console.warn('The boundary event %s must be attach to an activity, and not to %s', bpmnElement.id, parent === null || parent === void 0 ? void 0 : parent.kind);
        }
    }
    /**
     * Get the list of eventDefinitions hold by the Event bpmElement
     *
     * @param bpmnElement The BPMN element from the XML data which represents a BPMN Event
     */
    getEventDefinitions(bpmnElement) {
        const eventDefinitions = new Map();
        bpmnEventKinds.forEach(eventKind => {
            // sometimes eventDefinition is simple and therefore it is parsed as empty string "", in that case eventDefinition will be converted to an empty object
            const eventDefinition = bpmnElement[eventKind + 'EventDefinition'];
            const counter = ensureIsArray(eventDefinition, true).length;
            eventDefinitions.set(eventKind, counter);
        });
        ensureIsArray(bpmnElement.eventDefinitionRef).forEach(eventDefinitionRef => {
            const kind = this.convertedElements.findEventDefinitionOfDefinitions(eventDefinitionRef);
            eventDefinitions.set(kind, eventDefinitions.get(kind) + 1);
        });
        return Array.from(eventDefinitions.keys())
            .map(kind => {
            return { kind, counter: eventDefinitions.get(kind) };
        })
            .filter(eventDefinition => {
            return eventDefinition.counter > 0;
        });
    }
    buildShapeBpmnSubProcess(bpmnElement, processId, markers) {
        this.buildSubProcessInnerElements(bpmnElement);
        if (!bpmnElement.triggeredByEvent) {
            return new ShapeBpmnSubProcess(bpmnElement.id, bpmnElement.name, exports.ShapeBpmnSubProcessKind.EMBEDDED, processId, markers);
        }
        return new ShapeBpmnSubProcess(bpmnElement.id, bpmnElement.name, exports.ShapeBpmnSubProcessKind.EVENT, processId, markers);
    }
    buildSubProcessInnerElements(subProcess) {
        this.buildProcessInnerElements(subProcess);
    }
    buildLaneSetBpmnElements(processId, laneSets) {
        ensureIsArray(laneSets).forEach(laneSet => {
            this.buildLaneBpmnElements(processId, laneSet.lane);
        });
    }
    buildLaneBpmnElements(processId, lanes) {
        ensureIsArray(lanes).forEach(lane => {
            var _a;
            this.convertedElements.registerLane(new ShapeBpmnElement(lane.id, lane.name, exports.ShapeBpmnElementKind.LANE, processId));
            this.assignParentOfLaneFlowNodes(lane);
            if ((_a = lane.childLaneSet) === null || _a === void 0 ? void 0 : _a.lane) {
                this.buildLaneBpmnElements(lane.id, lane.childLaneSet.lane);
            }
        });
    }
    assignParentOfLaneFlowNodes(lane) {
        ensureIsArray(lane.flowNodeRef).forEach(flowNodeRef => {
            const shapeBpmnElement = this.convertedElements.findFlowNode(flowNodeRef);
            const laneId = lane.id;
            if (shapeBpmnElement) {
                if (!ShapeUtil.isBoundaryEvent(shapeBpmnElement.kind)) {
                    shapeBpmnElement.parentId = laneId;
                }
            }
            else {
                // TODO decide how to manage elements not found during parsing as part of #35
                console.warn('Unable to assign lane %s as parent: flow node %s is not found', laneId, flowNodeRef);
            }
        });
    }
    buildSequenceFlows(bpmnElements) {
        ensureIsArray(bpmnElements).forEach(sequenceFlow => {
            const kind = this.getSequenceFlowKind(sequenceFlow);
            this.convertedElements.registerSequenceFlow(new SequenceFlow(sequenceFlow.id, sequenceFlow.name, sequenceFlow.sourceRef, sequenceFlow.targetRef, kind));
        });
    }
    buildAssociationFlows(bpmnElements) {
        ensureIsArray(bpmnElements).forEach(association => {
            // TODO Remove associationDirection conversion type when we merge/simplify internal model with BPMN json model
            const direction = association.associationDirection;
            this.convertedElements.registerAssociationFlow(new AssociationFlow(association.id, undefined, association.sourceRef, association.targetRef, direction));
        });
    }
    getSequenceFlowKind(sequenceFlow) {
        if (this.defaultSequenceFlowIds.includes(sequenceFlow.id)) {
            return SequenceFlowKind.DEFAULT;
        }
        else {
            const sourceShapeBpmnElement = this.convertedElements.findFlowNode(sequenceFlow.sourceRef);
            if (sourceShapeBpmnElement && ShapeUtil.isWithDefaultSequenceFlow(sourceShapeBpmnElement.kind) && sequenceFlow.conditionExpression) {
                if (ShapeUtil.isActivity(sourceShapeBpmnElement.kind)) {
                    return SequenceFlowKind.CONDITIONAL_FROM_ACTIVITY;
                }
                else {
                    return SequenceFlowKind.CONDITIONAL_FROM_GATEWAY;
                }
            }
        }
        return SequenceFlowKind.NORMAL;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class Bounds {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class Edge {
    constructor(id, bpmnElement, waypoints, label, messageVisibleKind = MessageVisibleKind.NONE) {
        this.id = id;
        this.bpmnElement = bpmnElement;
        this.waypoints = waypoints;
        this.label = label;
        this.messageVisibleKind = messageVisibleKind;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class Waypoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class Label {
    constructor(font, bounds) {
        this.font = font;
        this.bounds = bounds;
    }
}
/**
 * @internal
 */
class Font {
    constructor(name, size, isBold, isItalic, isUnderline, isStrikeThrough) {
        this.name = name;
        this.size = size;
        this.isBold = isBold;
        this.isItalic = isItalic;
        this.isUnderline = isUnderline;
        this.isStrikeThrough = isStrikeThrough;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class DiagramConverter {
    constructor(convertedElements) {
        this.convertedElements = convertedElements;
        this.convertedFonts = new Map();
    }
    deserialize(bpmnDiagrams) {
        const flowNodes = [];
        const lanes = [];
        const pools = [];
        const edges = [];
        const bpmnDiagram = ensureIsArray(bpmnDiagrams)[0];
        if (bpmnDiagram) {
            // Need to be done before deserialization of Shape and Edge, to link the converted fonts to them
            this.deserializeFonts(bpmnDiagram.BPMNLabelStyle);
            const plane = bpmnDiagram.BPMNPlane;
            const convertedEdges = this.deserializeEdges(plane.BPMNEdge);
            const convertedShapes = this.deserializeShapes(plane.BPMNShape);
            flowNodes.push(...convertedShapes.flowNodes);
            lanes.push(...convertedShapes.lanes);
            pools.push(...convertedShapes.pools);
            edges.push(...convertedEdges);
        }
        return { flowNodes, lanes, pools, edges };
    }
    deserializeFonts(bpmnLabelStyle) {
        this.convertedFonts = new Map();
        ensureIsArray(bpmnLabelStyle).forEach(labelStyle => {
            ensureIsArray(labelStyle.Font).forEach(font => {
                this.convertedFonts.set(labelStyle.id, new Font(font.name, font.size, font.isBold, font.isItalic, font.isUnderline, font.isStrikeThrough));
            });
        });
    }
    deserializeShapes(shapes) {
        // TODO find a way to avoid shape management duplication
        // common pattern:
        //    deserialize  shape base on custom function to find a bpmn element
        //    if found push in an array and process next element
        const convertedShapes = { flowNodes: [], lanes: [], pools: [] };
        ensureIsArray(shapes).forEach(shape => {
            const flowNode = this.deserializeShape(shape, (bpmnElement) => this.convertedElements.findFlowNode(bpmnElement));
            if (flowNode) {
                convertedShapes.flowNodes.push(flowNode);
                return;
            }
            const lane = this.deserializeShape(shape, (bpmnElement) => this.convertedElements.findLane(bpmnElement));
            if (lane) {
                convertedShapes.lanes.push(lane);
                return;
            }
            const pool = this.deserializeShape(shape, (bpmnElement) => this.convertedElements.findProcess(bpmnElement));
            if (pool) {
                convertedShapes.pools.push(pool);
                return;
            }
            // TODO decide how to manage elements not found during parsing as part of #35
            console.warn('Shape json deserialization: unable to find bpmn element with id %s', shape.bpmnElement);
        });
        return convertedShapes;
    }
    deserializeShape(shape, findShapeElement) {
        const bpmnElement = findShapeElement(shape.bpmnElement);
        if (bpmnElement) {
            const bounds = this.deserializeBounds(shape);
            if (bpmnElement.parentId) {
                const participant = this.convertedElements.findParticipantByProcessRef(bpmnElement.parentId);
                if (participant) {
                    bpmnElement.parentId = participant.id;
                }
            }
            if ((bpmnElement instanceof ShapeBpmnSubProcess || bpmnElement instanceof ShapeBpmnCallActivity) && !shape.isExpanded) {
                bpmnElement.markers.push(exports.ShapeBpmnMarkerKind.EXPAND);
            }
            let isHorizontal;
            if (ShapeUtil.isPoolOrLane(bpmnElement.kind)) {
                isHorizontal = shape.isHorizontal !== undefined ? shape.isHorizontal : true;
            }
            const label = this.deserializeLabel(shape.BPMNLabel, shape.id);
            return new Shape(shape.id, bpmnElement, bounds, label, isHorizontal);
        }
    }
    deserializeBounds(boundedElement) {
        const bounds = boundedElement.Bounds;
        if (bounds) {
            return new Bounds(bounds.x, bounds.y, bounds.width, bounds.height);
        }
    }
    deserializeEdges(edges) {
        return ensureIsArray(edges)
            .map(edge => {
            const flow = this.convertedElements.findSequenceFlow(edge.bpmnElement) ||
                this.convertedElements.findMessageFlow(edge.bpmnElement) ||
                this.convertedElements.findAssociationFlow(edge.bpmnElement);
            if (!flow) {
                // TODO decide how to manage elements not found during parsing as part of #35
                console.warn('Edge json deserialization: unable to find bpmn element with id %s', edge.bpmnElement);
                return;
            }
            const waypoints = this.deserializeWaypoints(edge.waypoint);
            const label = this.deserializeLabel(edge.BPMNLabel, edge.id);
            // TODO Remove messageVisibleKind conversion type when we merge/simplify internal model with BPMN json model
            const messageVisibleKind = edge.messageVisibleKind ? edge.messageVisibleKind : MessageVisibleKind.NONE;
            return new Edge(edge.id, flow, waypoints, label, messageVisibleKind);
        })
            .filter(edge => edge);
    }
    deserializeWaypoints(waypoints) {
        return ensureIsArray(waypoints).map(waypoint => new Waypoint(waypoint.x, waypoint.y));
    }
    deserializeLabel(bpmnLabel, id) {
        if (bpmnLabel && typeof bpmnLabel === 'object') {
            const font = this.findFont(bpmnLabel.labelStyle, id);
            const bounds = this.deserializeBounds(bpmnLabel);
            if (font || bounds) {
                return new Label(font, bounds);
            }
        }
    }
    findFont(labelStyle, id) {
        let font;
        if (labelStyle) {
            font = this.convertedFonts.get(labelStyle);
            if (!font) {
                // TODO decide how to manage elements not found during parsing as part of #35
                console.warn('Unable to assign font from style %s to shape/edge %s', labelStyle, id);
            }
        }
        return font;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class EventDefinitionConverter {
    constructor(convertedElements) {
        this.convertedElements = convertedElements;
    }
    deserialize(definitions) {
        bpmnEventKinds.forEach(eventKind => {
            // sometimes eventDefinition is simple and therefore it is parsed as empty string "", in that case eventDefinition will be converted to an empty object
            const eventDefinitions = definitions[eventKind + 'EventDefinition'];
            ensureIsArray(eventDefinitions, true).forEach(eventDefinition => {
                this.convertedElements.registerEventDefinitionsOfDefinitions(eventDefinition.id, eventKind);
            });
        });
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class GlobalTaskConverter {
    constructor(convertedElements) {
        this.convertedElements = convertedElements;
    }
    deserialize(definitions) {
        this.parseGlobalTasks(definitions.globalTask);
        this.parseGlobalTasks(definitions.globalBusinessRuleTask);
        this.parseGlobalTasks(definitions.globalManualTask);
        this.parseGlobalTasks(definitions.globalScriptTask);
        this.parseGlobalTasks(definitions.globalUserTask);
    }
    parseGlobalTasks(globalTasks) {
        ensureIsArray(globalTasks).forEach(globalTask => {
            this.convertedElements.registerGlobalTask(globalTask.id);
        });
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class ConvertedElements {
    constructor() {
        this.participantsById = new Map();
        this.participantsByProcessRef = new Map();
        this.processes = new Map();
        this.messageFlows = new Map();
        this.flowNodes = new Map();
        this.lanes = new Map();
        this.sequenceFlows = new Map();
        this.associationFlows = new Map();
        this.eventDefinitionsOfDefinitions = new Map();
        this.globalTaskIds = [];
    }
    findParticipantById(id) {
        return this.participantsById.get(id);
    }
    findParticipantByProcessRef(processRef) {
        return this.participantsByProcessRef.get(processRef);
    }
    registerParticipant(participant) {
        this.participantsById.set(participant.id, participant);
        if (participant.processRef) {
            this.participantsByProcessRef.set(participant.processRef, participant);
        }
    }
    _findProcess(id) {
        return this.processes.get(id);
    }
    registerProcess(process) {
        this.processes.set(process.id, process);
    }
    findProcess(participantId) {
        const participant = this.findParticipantById(participantId);
        if (participant) {
            const process = this._findProcess(participant.processRef);
            if (process) {
                const name = participant.name || process.name;
                return new ShapeBpmnElement(participant.id, name, process.kind, process.parentId);
            }
            // black box pool
            return new ShapeBpmnElement(participant.id, participant.name, exports.ShapeBpmnElementKind.POOL);
        }
    }
    findMessageFlow(id) {
        return this.messageFlows.get(id);
    }
    registerMessageFlow(messageFlow) {
        this.messageFlows.set(messageFlow.id, messageFlow);
    }
    findFlowNode(id) {
        return this.flowNodes.get(id);
    }
    registerFlowNode(flowNode) {
        this.flowNodes.set(flowNode.id, flowNode);
    }
    findLane(id) {
        return this.lanes.get(id);
    }
    registerLane(lane) {
        this.lanes.set(lane.id, lane);
    }
    findSequenceFlow(id) {
        return this.sequenceFlows.get(id);
    }
    registerSequenceFlow(sequenceFlow) {
        this.sequenceFlows.set(sequenceFlow.id, sequenceFlow);
    }
    findAssociationFlow(id) {
        return this.associationFlows.get(id);
    }
    registerAssociationFlow(associationFlow) {
        this.associationFlows.set(associationFlow.id, associationFlow);
    }
    findEventDefinitionOfDefinitions(id) {
        return this.eventDefinitionsOfDefinitions.get(id);
    }
    registerEventDefinitionsOfDefinitions(id, eventDefinition) {
        this.eventDefinitionsOfDefinitions.set(id, eventDefinition);
    }
    isGlobalTask(id) {
        return this.globalTaskIds.includes(id);
    }
    registerGlobalTask(id) {
        this.globalTaskIds.push(id);
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class BpmnJsonParser {
    constructor(collaborationConverter, eventDefinitionConverter, globalTaskConverter, processConverter, diagramConverter) {
        this.collaborationConverter = collaborationConverter;
        this.eventDefinitionConverter = eventDefinitionConverter;
        this.globalTaskConverter = globalTaskConverter;
        this.processConverter = processConverter;
        this.diagramConverter = diagramConverter;
    }
    parse(json) {
        const definitions = json.definitions;
        this.collaborationConverter.deserialize(definitions.collaboration);
        this.eventDefinitionConverter.deserialize(definitions);
        this.globalTaskConverter.deserialize(definitions);
        this.processConverter.deserialize(definitions.process);
        return this.diagramConverter.deserialize(definitions.BPMNDiagram);
    }
}
/**
 * @internal
 */
function newBpmnJsonParser() {
    const convertedElements = new ConvertedElements();
    return new BpmnJsonParser(new CollaborationConverter(convertedElements), new EventDefinitionConverter(convertedElements), new GlobalTaskConverter(convertedElements), new ProcessConverter(convertedElements), new DiagramConverter(convertedElements));
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class BpmnParser {
    constructor(jsonParser, xmlParser) {
        this.jsonParser = jsonParser;
        this.xmlParser = xmlParser;
    }
    parse(bpmnAsXml) {
        // TODO decide how to manage parsing errors as part of #35
        const json = this.xmlParser.parse(bpmnAsXml);
        return this.jsonParser.parse(json);
    }
}
// TODO review usage when introducing dependency injection, see #110
/**
 * @internal
 */
function newBpmnParser() {
    return new BpmnParser(newBpmnJsonParser(), new BpmnXmlParser());
}

/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
class CssRegistry {
    constructor() {
        this.classNamesByBPMNId = new Map();
    }
    /**
     * Get the CSS class names for a specific HTML element
     *
     * @param bpmnElementId the BPMN id of the HTML element from the DOM
     * @return the registered CSS class names
     */
    getClassNames(bpmnElementId) {
        return Array.from(this.classNamesByBPMNId.get(bpmnElementId) || []);
    }
    /**
     * Register the CSS class names for a specific HTML element
     *
     * @param bpmnElementId the BPMN id of the HTML element from the DOM
     * @param classNames the CSS class names to register
     * @return true if at least one class name from parameters has been added; false otherwise
     */
    addClassNames(bpmnElementId, classNames) {
        return this.updateClassNames(bpmnElementId, classNames, (element, set) => set.add(element));
    }
    // return `true` if at least one class has been removed
    removeClassNames(bpmnElementId, classNames) {
        return this.updateClassNames(bpmnElementId, classNames, (element, set) => set.delete(element));
    }
    // return true if passed classes array has at least one element - as toggle will always trigger changes in that case
    toggleClassNames(bpmnElementId, classNames) {
        this.updateClassNames(bpmnElementId, classNames, (element, set) => (set.has(element) ? set.delete(element) : set.add(element)));
        return classNames && classNames.length > 0;
    }
    updateClassNames(bpmnElementId, classNames, updateSet) {
        const currentClassNames = this.getOrInitializeClassNames(bpmnElementId);
        const initialClassNamesNumber = currentClassNames.size;
        ensureIsArray(classNames).forEach(className => updateSet(className, currentClassNames));
        return currentClassNames.size != initialClassNamesNumber;
    }
    getOrInitializeClassNames(bpmnElementId) {
        let classNames = this.classNamesByBPMNId.get(bpmnElementId);
        if (classNames == null) {
            classNames = new Set();
            this.classNamesByBPMNId.set(bpmnElementId, classNames);
        }
        return classNames;
    }
}

class OverlayConverter {
    constructor() {
        this.overlayPositions = new Map([
            // Edge
            ['start', { horizontalAlign: 'left', verticalAlign: 'top' }],
            ['middle', { horizontalAlign: 'center', verticalAlign: 'top' }],
            ['end', { horizontalAlign: 'right', verticalAlign: 'top' }],
            // Shape
            ['top-left', { horizontalAlign: 'left', verticalAlign: 'top' }],
            ['top-right', { horizontalAlign: 'right', verticalAlign: 'top' }],
            ['top-center', { horizontalAlign: 'center', verticalAlign: 'top' }],
            ['bottom-left', { horizontalAlign: 'left', verticalAlign: 'bottom' }],
            ['bottom-right', { horizontalAlign: 'right', verticalAlign: 'bottom' }],
            ['bottom-center', { horizontalAlign: 'center', verticalAlign: 'bottom' }],
            ['middle-left', { horizontalAlign: 'left', verticalAlign: 'middle' }],
            ['middle-right', { horizontalAlign: 'right', verticalAlign: 'middle' }],
        ]);
    }
    convert(overlay) {
        const position = this.convertPosition(overlay);
        const style = OverlayConverter.convertStyle(overlay);
        return { position, style };
    }
    convertPosition(overlay) {
        return this.overlayPositions.get(overlay.position);
    }
    static convertStyle(overlay) {
        // recompute the style at each call to ensure we consider default changes that could occur after lib initialization
        const defaultStyle = {
            fill: { color: exports.StyleDefault.DEFAULT_OVERLAY_FILL_COLOR.valueOf(), opacity: exports.StyleDefault.DEFAULT_OVERLAY_FILL_OPACITY.valueOf() },
            stroke: { color: exports.StyleDefault.DEFAULT_OVERLAY_STROKE_COLOR.valueOf(), width: exports.StyleDefault.DEFAULT_OVERLAY_STROKE_WIDTH.valueOf() },
            font: { color: exports.StyleDefault.DEFAULT_OVERLAY_FONT_COLOR.valueOf(), size: exports.StyleDefault.DEFAULT_OVERLAY_FONT_SIZE.valueOf() },
        };
        const style = overlay.style;
        const convertedStyle = Object.assign({}, defaultStyle);
        if (!style) {
            return convertedStyle;
        }
        this.convertFill(convertedStyle, style.fill);
        this.convertStroke(convertedStyle, style.stroke);
        this.convertFont(convertedStyle, style.font);
        return convertedStyle;
    }
    static convertFill(convertedStyle, apiFill) {
        var _a, _b;
        if (apiFill) {
            convertedStyle.fill.color = (_a = apiFill.color) !== null && _a !== void 0 ? _a : convertedStyle.fill.color;
            convertedStyle.fill.opacity = (_b = apiFill.opacity) !== null && _b !== void 0 ? _b : convertedStyle.fill.opacity;
        }
    }
    static convertStroke(convertedStyle, apiStroke) {
        var _a, _b;
        if (apiStroke) {
            convertedStyle.stroke.color = (_a = apiStroke.color) !== null && _a !== void 0 ? _a : convertedStyle.stroke.color;
            convertedStyle.stroke.width = (_b = apiStroke.width) !== null && _b !== void 0 ? _b : convertedStyle.stroke.width;
        }
    }
    static convertFont(convertedStyle, apiFont) {
        var _a, _b;
        if (apiFont) {
            convertedStyle.font.color = (_a = apiFont.color) !== null && _a !== void 0 ? _a : convertedStyle.font.color;
            convertedStyle.font.size = (_b = apiFont.size) !== null && _b !== void 0 ? _b : convertedStyle.font.size;
        }
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function newMxGraphCellUpdater(graph) {
    return new MxGraphCellUpdater(graph, new OverlayConverter());
}
/**
 * @internal
 */
class MxGraphCellUpdater {
    constructor(graph, overlayConverter) {
        this.graph = graph;
        this.overlayConverter = overlayConverter;
    }
    updateAndRefreshCssClassesOfCell(bpmnElementId, cssClasses) {
        const mxCell = this.graph.getModel().getCell(bpmnElementId);
        if (!mxCell) {
            return;
        }
        const view = this.graph.getView();
        const state = view.getState(mxCell);
        state.style[exports.StyleIdentifier.BPMN_STYLE_EXTRA_CSS_CLASSES] = cssClasses;
        state.shape.apply(state);
        state.shape.redraw();
    }
    addOverlays(bpmnElementId, overlays) {
        const mxCell = this.graph.getModel().getCell(bpmnElementId);
        if (!mxCell) {
            return;
        }
        ensureIsArray(overlays).forEach(overlay => {
            const bpmnOverlay = new MxGraphCustomOverlay(overlay.label, this.overlayConverter.convert(overlay));
            this.graph.addCellOverlay(mxCell, bpmnOverlay);
        });
    }
    removeAllOverlays(bpmnElementId) {
        const mxCell = this.graph.getModel().getCell(bpmnElementId);
        if (!mxCell) {
            return;
        }
        this.graph.removeCellOverlays(mxCell);
    }
}

/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Once mxGraph is initialized at BpmnVisualization construction, prior loading a BPMN diagram, the DOM looks like:
 * ```html
 * <div id="bpmn-container" style="touch-action: none;">
 *   <svg style="left: 0px; top: 0px; width: 100%; height: 100%; display: block; min-width: 1px; min-height: 1px;">
 *     <g>
 *       <g></g>
 *       <g></g>
 *       <g></g>
 *       <g></g>
 *     </g>
 *   </svg>
 * </div>
 * ```
 * mxGraph generates the following SVG groups
 *   - 2nd: elements of the graph (shapes and edges)
 *   - 3rd: overlays
 *
 * After loading, the DOM looks like:
 * ```html
 * <div id="bpmn-container" style="touch-action: none;">
 *   <svg style="left: 0px; top: 0px; width: 100%; height: 100%; display: block; min-width: 900px; min-height: 181px;">
 *     <g>
 *       <g></g>
 *       <g>
 *         <g style="" class="bpmn-pool" data-bpmn-id="Participant_1">....</g>
 *       </g>
 *       <g>
 *         <g style="" class="overlay-badge" data-bpmn-id="Participant_1">...</g>
 *       </g>
 *       <g></g>
 *     </g>
 *   </svg>
 * </div>
 * ```
 * In the 2nd 'g' node, children 'g' nodes with the 'data-bpmn-id' attribute (extra attribute generated by the lib) are only available when the rendering is done
 * @internal
 */
class BpmnQuerySelectors {
    constructor(containerId) {
        this.containerId = containerId;
    }
    element(bpmnElementId) {
        return `#${this.containerId} > svg > g > g > g[data-bpmn-id="${bpmnElementId}"]`;
    }
    elementsOfKind(bpmnKindCssClassname) {
        return `#${this.containerId} > svg > g > g > g.${bpmnKindCssClassname}:not(.bpmn-label)`;
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function newBpmnElementsRegistry(bpmnModelRegistry, graph) {
    var _a;
    return new BpmnElementsRegistry(bpmnModelRegistry, new HtmlElementRegistry(new BpmnQuerySelectors((_a = graph.container) === null || _a === void 0 ? void 0 : _a.id)), new CssRegistry(), newMxGraphCellUpdater(graph));
}
/**
 * @category Custom Behavior
 * @experimental subject to change, feedback welcome.
 *
 * > BpmnElementRegistry is a public API that permits to find the BpmnElements present in the diagram.
 * > How to access it:
 *
 * ```javascript
 * // 1. Initialize the BpmnVisualization.
 * const bpmnVisualization = new bpmnvisu.BpmnVisualization(document.getElementById('bpmn-container'));
 * // 2. Get diagram and load it.
 * const bpmn = 'BPMN diagram string - whether coming from bpmn.xml file or some API call';
 * bpmnVisualization.load(bpmn);
 * // 3. Access registry directly from bpmnVisualization.
 * bpmnVisualization.bpmnElementsRegistry
 * ```
 */
class BpmnElementsRegistry {
    /**
     * @internal
     */
    constructor(bpmnModelRegistry, htmlElementRegistry, cssRegistry, mxGraphCellUpdater) {
        this.bpmnModelRegistry = bpmnModelRegistry;
        this.htmlElementRegistry = htmlElementRegistry;
        this.cssRegistry = cssRegistry;
        this.mxGraphCellUpdater = mxGraphCellUpdater;
    }
    // TODO doc, not found elements are not present in the return array
    /**
     * Get all elements by ids.
     *
     * ```javascript
     * ...
     * // Find all elements by specified id or ids
     * const bpmnElementsSet1 = bpmnVisualization.bpmnElementsRegistry.getElementsByIds('userTask_1');
     * const bpmnElementsSet2 = bpmnVisualization.bpmnElementsRegistry.getElementsByIds(['startEvent_3', 'userTask_2']);
     * // now you can do whatever you want with the elements
     * ...
     * ```
     */
    getElementsByIds(bpmnElementIds) {
        return ensureIsArray(bpmnElementIds)
            .map(id => this.bpmnModelRegistry.getBpmnSemantic(id))
            .filter(e => e)
            .map(bpmnSemantic => ({ bpmnSemantic: bpmnSemantic, htmlElement: this.htmlElementRegistry.getBpmnHtmlElement(bpmnSemantic.id) }));
    }
    /**
     * Get all elements by kinds.
     *
     * ```javascript
     * ...
     * // Find all elements by desired type or types
     * const bpmnTaskElements = bpmnVisualization.bpmnElementsRegistry.getElementsByKinds(bpmnvisu.ShapeBpmnElementKind.TASK);
     * const bpmnEndEventAndPoolElements = bpmnVisualization.bpmnElementsRegistry.getElementsByKinds([bpmnvisu.ShapeBpmnElementKind.EVENT_END, bpmnvisu.ShapeBpmnElementKind.POOL]);
     * // now you can do whatever you want with the elements
     * ...
     * ```
     */
    getElementsByKinds(bpmnKinds) {
        const bpmnElements = [];
        ensureIsArray(bpmnKinds)
            .map(kind => 
        // TODO when implementing #953, use the model to search for Bpmn elements matching kinds instead of css selectors
        this.htmlElementRegistry.getBpmnHtmlElements(kind).map(htmlElement => ({
            htmlElement: htmlElement,
            bpmnSemantic: this.bpmnModelRegistry.getBpmnSemantic(htmlElement.getAttribute('data-bpmn-id')),
        })))
            // We will be able to use flatmap instead when targeting es2019+
            .forEach(innerBpmnElements => bpmnElements.push(...innerBpmnElements));
        return bpmnElements;
    }
    /**
     * Add one/several CSS class(es) to one/several BPMN element(s).
     *
     * Notice that if you pass ids that are not related to existing BPMN elements, their reference will be kept within the registry but nothing happens on the rendering side.
     *
     * @example
     * ```javascript
     * // Add 'success-path' to BPMN elements with id: flow_1 and flow_5
     * bpmnVisualization.bpmnElementsRegistry.addCssClasses(['flow_1', 'flow_5'], 'success-path');
     *
     * // Add 'suspicious-path' and 'additional-info' to BPMN element with id: task_3
     * bpmnVisualization.bpmnElementsRegistry.addCssClasses('task_3', ['suspicious-path', 'additional-info']);
     * ```
     *
     * @param bpmnElementIds The BPMN id of the element(s) where to add the CSS classes
     * @param classNames The name of the class(es) to add to the BPMN element(s)
     */
    addCssClasses(bpmnElementIds, classNames) {
        this.updateCssClasses(bpmnElementIds, classNames, this.cssRegistry.addClassNames.bind(this.cssRegistry));
    }
    /**
     * Remove one/several CSS class(es) from one/several BPMN element(s).
     *
     * @example
     * ```javascript
     * // Remove 'highlight' from BPMN elements with id: activity_1 and activity_2
     * bpmnVisualization.bpmnElementsRegistry.removeCssClasses(['activity_1', 'activity_2'], 'highlight');
     *
     * // Remove 'running' and 'additional-info' from BPMN element with id: task_3
     * bpmnVisualization.bpmnElementsRegistry.removeCssClasses('task_3', ['running', 'additional-info']);
     * ```
     *
     * @param bpmnElementIds The BPMN id of the element(s) where to remove the CSS classes
     * @param classNames The name of the class(es) to remove from the BPMN element(s)
     */
    removeCssClasses(bpmnElementIds, classNames) {
        this.updateCssClasses(bpmnElementIds, classNames, this.cssRegistry.removeClassNames.bind(this.cssRegistry));
    }
    /**
     * Toggle one/several CSS class(es) for one/several BPMN element(s).
     * Notice that if you pass ids that are not related to existing BPMN elements, their reference will be kept within the registry but nothing happens on the rendering side.
     *
     * @example
     * ```javascript
     * // Toggle 'highlight' for BPMN elements with id: activity_1 and activity_2
     * bpmnVisualization.bpmnElementsRegistry.toggleCssClasses(['activity_1', 'activity_2'], 'highlight');
     *
     * // Toggle 'running' and 'additional-info' for BPMN element with id: task_3
     * bpmnVisualization.bpmnElementsRegistry.toggleCssClasses('task_3', ['running', 'additional-info']);
     * ```
     *
     * @param bpmnElementIds The BPMN id of the element(s) where to remove the CSS classes
     * @param classNames The name of the class(es) to remove from the BPMN element(s)
     */
    toggleCssClasses(bpmnElementIds, classNames) {
        this.updateCssClasses(bpmnElementIds, classNames, this.cssRegistry.toggleClassNames.bind(this.cssRegistry));
    }
    updateCssClasses(bpmnElementIds, classNames, updateClassNames) {
        const arrayClassNames = ensureIsArray(classNames);
        ensureIsArray(bpmnElementIds).forEach(bpmnElementId => this.updateCellIfChanged(updateClassNames(bpmnElementId, arrayClassNames), bpmnElementId));
    }
    updateCellIfChanged(updateCell, bpmnElementId) {
        if (updateCell) {
            const allClassNames = this.cssRegistry.getClassNames(bpmnElementId);
            this.mxGraphCellUpdater.updateAndRefreshCssClassesOfCell(bpmnElementId, allClassNames);
        }
    }
    /**
     * Add one/several overlays to a BPMN element.
     *
     * Notice that if you pass an id that is not related to an existing BPMN element, nothing happens on the rendering side.
     *
     * @example
     * ```javascript
     * // Add an overlay to BPMN elements with id 'task_1'
     * bpmnVisualization.bpmnElementsRegistry.addOverlays('task_1', {
     *    position: 'top-left',
     *    label: '40',
     *    style: {
     *      font: { color: 'Chartreuse', size: 8 },
     *      fill: { color: 'Pink', opacity: 50 },
     *      stroke: { color: 'DarkSeaGreen', width: 2 }
     *    }
     * });
     *
     * // Add several overlays to BPMN element with id 'task_3'
     * bpmnVisualization.bpmnElementsRegistry.addOverlays('task_3', [
     *    {
     *      position: 'bottom-right',
     *      label: '110',
     *      style: {
     *        font: { color: '#663399', size: 8 },
     *        fill: { color: '#FFDAB9', opacity: 50 },
     *        stroke: { color: 'DarkSeaGreen', width: 2 }
     *      }
     *    },
     *    {
     *      position: 'top-left',
     *      label: '40',
     *      style: {
     *        font: { color: 'MidnightBlue', size: 30 },
     *        fill: { color: 'Aquamarine', opacity: 70 },
     *        stroke: { color: '#4B0082', width: 1 }
     *      }
     *    }
     * ]);
     * ```
     *
     * @param bpmnElementId The BPMN id of the element where to add the overlays
     * @param overlays The overlays to add to the BPMN element
     */
    addOverlays(bpmnElementId, overlays) {
        this.mxGraphCellUpdater.addOverlays(bpmnElementId, overlays);
    }
    /**
     * Remove all overlays of a BPMN element.
     *
     * <b>WARNING</b>: could be renamed when adding support for removal of one or several specific overlays.
     *
     * @example
     * ```javascript
     * //  all overlays of the BPMN element with id: activity_1
     * bpmnVisualization.bpmnElementsRegistry.removeAllOverlays('activity_1');
     * ```
     *
     * @param bpmnElementId The BPMN id of the element where to remove the overlays
     */
    removeAllOverlays(bpmnElementId) {
        this.mxGraphCellUpdater.removeAllOverlays(bpmnElementId);
    }
}
class HtmlElementRegistry {
    constructor(selectors) {
        this.selectors = selectors;
    }
    /**
     * Returns `null` if no element is found.
     * @param bpmnElementId the id of the BPMN element represented by the searched Html Element.
     */
    getBpmnHtmlElement(bpmnElementId) {
        // TODO error management, for now we return null
        return document.querySelector(this.selectors.element(bpmnElementId));
    }
    getBpmnHtmlElements(bpmnElementKind) {
        const selectors = this.selectors.elementsOfKind(computeBpmnBaseClassName(bpmnElementKind));
        return [...document.querySelectorAll(selectors)];
    }
}

class BpmnModelRegistry {
    computeRenderedModel(bpmnModel) {
        this.searchableModel = new SearchableModel(bpmnModel);
        return toRenderedModel(bpmnModel);
    }
    getBpmnSemantic(bpmnElementId) {
        const element = this.searchableModel.elementById(bpmnElementId);
        if (!element) {
            return undefined;
        }
        const bpmnElement = element.bpmnElement;
        const isShape = bpmnElement instanceof ShapeBpmnElement;
        return { id: bpmnElementId, name: bpmnElement.name, isShape: isShape, kind: bpmnElement.kind };
    }
}
function toRenderedModel(bpmnModel) {
    const collapsedSubProcessIds = bpmnModel.flowNodes
        .filter(shape => {
        const bpmnElement = shape.bpmnElement;
        return ShapeUtil.isSubProcess(bpmnElement.kind) && bpmnElement.markers.includes(exports.ShapeBpmnMarkerKind.EXPAND);
    })
        .map(shape => shape.bpmnElement.id);
    const subprocesses = [];
    const boundaryEvents = [];
    const otherFlowNodes = [];
    bpmnModel.flowNodes.forEach(shape => {
        const kind = shape.bpmnElement.kind;
        if (ShapeUtil.isSubProcess(kind)) {
            subprocesses.push(shape);
        }
        else if (ShapeUtil.isBoundaryEvent(kind)) {
            boundaryEvents.push(shape);
        }
        else if (!collapsedSubProcessIds.includes(shape.bpmnElement.parentId)) {
            otherFlowNodes.push(shape);
        }
    });
    return { boundaryEvents: boundaryEvents, edges: bpmnModel.edges, lanes: bpmnModel.lanes, otherFlowNodes: otherFlowNodes, pools: bpmnModel.pools, subprocesses: subprocesses };
}
class SearchableModel {
    constructor(bpmnModel) {
        this.elements = new Map();
        []
            .concat(bpmnModel.pools, bpmnModel.lanes, bpmnModel.flowNodes, bpmnModel.edges)
            // use the bpmn element id and not the bpmn shape id
            .forEach(e => {
            this.elements.set(e.bpmnElement.id, e);
        });
    }
    elementById(id) {
        return this.elements.get(id);
    }
}

/**
 * Copyright 2021 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
function htmlElement(element) {
    if (element instanceof HTMLElement) {
        return element;
    }
    return document.getElementById(element);
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @category Initialization
 */
class BpmnVisualization {
    constructor(options) {
        // mxgraph configuration
        const configurator = new MxGraphConfigurator(htmlElement(options === null || options === void 0 ? void 0 : options.container));
        this.graph = configurator.configure(options);
        // other configurations
        this.bpmnModelRegistry = new BpmnModelRegistry();
        this.bpmnElementsRegistry = newBpmnElementsRegistry(this.bpmnModelRegistry, this.graph);
    }
    load(xml, options) {
        try {
            const bpmnModel = newBpmnParser().parse(xml);
            const renderedModel = this.bpmnModelRegistry.computeRenderedModel(bpmnModel);
            newMxGraphRenderer(this.graph).render(renderedModel, options);
        }
        catch (e) {
            // TODO error handling
            window.alert(`Cannot load bpmn diagram: ${e.message}`);
            throw e;
        }
    }
    fit(options) {
        this.graph.customFit(options);
    }
}

/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mxConstants = mxgraph.mxConstants;

exports.BpmnElementsRegistry = BpmnElementsRegistry;
exports.BpmnVisualization = BpmnVisualization;
exports.IconPainter = IconPainter;
exports.IconPainterProvider = IconPainterProvider;
exports.ShapeUtil = ShapeUtil;
exports.StyleConfigurator = StyleConfigurator;
exports.bpmnEventKinds = bpmnEventKinds;
exports.buildPaintParameter = buildPaintParameter;
exports.computeScaledIconSize = computeScaledIconSize;
exports.mxConstants = mxConstants;
exports.supportedBpmnEventKinds = supportedBpmnEventKinds;
