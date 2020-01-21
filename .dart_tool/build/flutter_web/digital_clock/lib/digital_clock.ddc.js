define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_clock_helper/model', 'packages/intl/intl', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_clock_helper__model, packages__intl__intl, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const model = packages__flutter_clock_helper__model.model;
  const intl = packages__intl__intl.intl;
  const colors = packages__flutter__material.src__material__colors;
  const digital_clock = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 58,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/digital_clock.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 24,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 38,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 46,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/digital_clock.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 62,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/digital_clock.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 24,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 39,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 55,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/digital_clock.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/digital_clock.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/digital_clock.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/digital_clock.dart"
      });
    }
  });
  const model$ = dart.privateName(digital_clock, "DigitalClock.model");
  digital_clock.DigitalClock = class DigitalClock extends framework.StatefulWidget {
    get model() {
      return this[model$];
    }
    set model(value) {
      super.model = value;
    }
    createState() {
      return new digital_clock._DigitalClockState.new();
    }
  };
  (digital_clock.DigitalClock.new = function(model, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model$] = model;
    digital_clock.DigitalClock.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = digital_clock.DigitalClock.prototype;
  dart.addTypeTests(digital_clock.DigitalClock);
  dart.setMethodSignature(digital_clock.DigitalClock, () => ({
    __proto__: dart.getMethods(digital_clock.DigitalClock.__proto__),
    createState: dart.fnType(digital_clock._DigitalClockState, [])
  }));
  dart.setLibraryUri(digital_clock.DigitalClock, "package:digital_clock/digital_clock.dart");
  dart.setFieldSignature(digital_clock.DigitalClock, () => ({
    __proto__: dart.getFields(digital_clock.DigitalClock.__proto__),
    model: dart.finalFieldType(model.ClockModel)
  }));
  const _dateTime = dart.privateName(digital_clock, "_dateTime");
  const _timer = dart.privateName(digital_clock, "_timer");
  const _updateModel = dart.privateName(digital_clock, "_updateModel");
  const _updateTime = dart.privateName(digital_clock, "_updateTime");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  let C10;
  let C9;
  let C8;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  let C18;
  let C17;
  let C16;
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C23;
  let C22;
  digital_clock._DigitalClockState = class _DigitalClockState extends framework.State$(digital_clock.DigitalClock) {
    initState() {
      super.initState();
      this.widget.model.addListener(dart.bind(this, _updateModel));
      this[_updateTime]();
      this[_updateModel]();
    }
    didUpdateWidget(oldWidget) {
      digital_clock.DigitalClock._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.model, oldWidget.model)) {
        oldWidget.model.removeListener(dart.bind(this, _updateModel));
        this.widget.model.addListener(dart.bind(this, _updateModel));
      }
    }
    dispose() {
      let t0;
      t0 = this[_timer];
      t0 == null ? null : t0.cancel();
      this.widget.model.removeListener(dart.bind(this, _updateModel));
      this.widget.model.dispose();
      super.dispose();
    }
    [_updateModel]() {
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    [_updateTime]() {
      this.setState(dart.fn(() => {
        this[_dateTime] = new core.DateTime.now();
        this[_timer] = async.Timer.new(new core.Duration.new({minutes: 1})['-'](new core.Duration.new({seconds: this[_dateTime].second}))['-'](new core.Duration.new({milliseconds: this[_dateTime].millisecond})), dart.bind(this, _updateTime));
      }, VoidToNull()));
    }
    build(context) {
      let hour = new intl.DateFormat.new(dart.dtest(this.widget.model.is24HourFormat) ? "HH" : "hh").format(this[_dateTime]);
      let minute = new intl.DateFormat.new("mm").format(this[_dateTime]);
      let fontSize = dart.notNull(media_query.MediaQuery.of(context).size.width) / 3.5;
      let offset = -fontSize / 7;
      return new container.Container.new({color: colors.Colors.black, child: new basic.Center.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({left: offset, top: 0.0, child: new text.Text.new(hour, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new basic.Positioned.new({right: offset, bottom: offset, child: new text.Text.new(minute, {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11})]), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
  };
  (digital_clock._DigitalClockState.new = function() {
    this[_dateTime] = new core.DateTime.now();
    this[_timer] = null;
    digital_clock._DigitalClockState.__proto__.new.call(this);
    ;
  }).prototype = digital_clock._DigitalClockState.prototype;
  dart.addTypeTests(digital_clock._DigitalClockState);
  dart.setMethodSignature(digital_clock._DigitalClockState, () => ({
    __proto__: dart.getMethods(digital_clock._DigitalClockState.__proto__),
    [_updateModel]: dart.fnType(dart.void, []),
    [_updateTime]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(digital_clock._DigitalClockState, "package:digital_clock/digital_clock.dart");
  dart.setFieldSignature(digital_clock._DigitalClockState, () => ({
    __proto__: dart.getFields(digital_clock._DigitalClockState.__proto__),
    [_dateTime]: dart.fieldType(core.DateTime),
    [_timer]: dart.fieldType(async.Timer)
  }));
  dart.trackLibraries("packages/digital_clock/digital_clock", {
    "package:digital_clock/digital_clock.dart": digital_clock
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["digital_clock.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkCmB;;;;;;;AAGmB;IAAoB;;6CALhC;;;AAAlB;;EAAwB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcX,MAAX;AACgC,MAAtC,AAAO,AAAM,wCAAY;AACZ,MAAb;AACc,MAAd;IACF;;wCAGkC;AACA,MAA1B,sBAAgB,SAAS;AAC/B,uBAAI,AAAO,mBAAS,AAAU,SAAD;AACiB,QAA5C,AAAU,AAAM,SAAP,gCAAsB;AACO,QAAtC,AAAO,AAAM,wCAAY;;IAE7B;;;AAIkB,WAAhB;0BAAQ;AACiC,MAAzC,AAAO,AAAM,2CAAe;AACN,MAAtB,AAAO,AAAM;AACE,MAAT;IACR;;AAKI,MAFF,cAAS;;IAGX;;AAmBI,MAhBF,cAAS;AACmB,QAA1B,kBAAqB;AAQpB,QALD,eAAS,gBACP,AAAqB,AACmB,gCADtB,SACd,gCAAkB,AAAU,+BAC5B,qCAAuB,AAAU,0CACrC;;IASN;UAG0B;AAElB,iBACF,AAAsD,mCAA3C,AAAO,AAAM,oCAAiB,OAAO,aAAa;AAC3D,mBAAS,AAAiB,wBAAN,aAAa;AACjC,qBAA6C,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe;AAC/C,mBAAS,AAAU,CAAT,QAAQ,GAAG;AAc3B,YAAO,qCACS,4BACP,6BACE,+BACa,sBAChB,gCAAiB,MAAM,OAAO,YAAU,kBAAK,IAAI,iHACjD,iCAAkB,MAAM,UAAU,MAAM,SAAS,kBAAK,MAAM;IAKtE;;;IAtFS,kBAAqB;IACxB;;;EAsFR","file":"digital_clock.ddc.js"}');
  // Exports:
  return {
    digital_clock: digital_clock
  };
});

//# sourceMappingURL=digital_clock.ddc.js.map
