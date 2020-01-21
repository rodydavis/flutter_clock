define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const colors = packages__flutter__material.src__material__colors;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const button = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 85,
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
        [_Location_column]: 22,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/button.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 84,
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
        [_Location_column]: 20,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/button.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/button.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/button.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/digital_clock/button.dart"
      });
    }
  });
  const onTap$ = dart.privateName(button, "NeuCircularButton.onTap");
  const radius$ = dart.privateName(button, "NeuCircularButton.radius");
  const child$ = dart.privateName(button, "NeuCircularButton.child");
  button.NeuCircularButton = class NeuCircularButton extends framework.StatefulWidget {
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    createState() {
      return new button._NeuCircularButtonState.new();
    }
  };
  (button.NeuCircularButton.new = function(opts) {
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onTap$] = onTap;
    this[child$] = child;
    this[radius$] = radius;
    button.NeuCircularButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = button.NeuCircularButton.prototype;
  dart.addTypeTests(button.NeuCircularButton);
  dart.setMethodSignature(button.NeuCircularButton, () => ({
    __proto__: dart.getMethods(button.NeuCircularButton.__proto__),
    createState: dart.fnType(button._NeuCircularButtonState, [])
  }));
  dart.setLibraryUri(button.NeuCircularButton, "package:digital_clock/button.dart");
  dart.setFieldSignature(button.NeuCircularButton, () => ({
    __proto__: dart.getFields(button.NeuCircularButton.__proto__),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    radius: dart.finalFieldType(core.double),
    child: dart.finalFieldType(framework.Widget)
  }));
  const _top = dart.privateName(button, "_top");
  const _bottom = dart.privateName(button, "_bottom");
  const _currentFill = dart.privateName(button, "_currentFill");
  const _toggle = dart.privateName(button, "_toggle");
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
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C17;
  let C16;
  button._NeuCircularButtonState = class _NeuCircularButtonState extends framework.State$(button.NeuCircularButton) {
    [_toggle]() {
      core.print("Switching");
      if (dart.equals(this[_top], button._NeuCircularButtonState._lightShadow) && dart.equals(this[_bottom], button._NeuCircularButtonState._darkShadow)) {
        this[_top] = colors.Colors.transparent;
        this[_bottom] = colors.Colors.transparent;
        this[_currentFill] = button._NeuCircularButtonState._inside;
      } else if (dart.equals(this[_top], colors.Colors.transparent) && dart.equals(this[_bottom], colors.Colors.transparent)) {
        this[_top] = button._NeuCircularButtonState._lightShadow;
        this[_bottom] = button._NeuCircularButtonState._darkShadow;
        this[_currentFill] = button._NeuCircularButtonState._fill;
      }
    }
    build(context) {
      return new container.Container.new({color: colors.Colors.grey._get(400), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this[_toggle]();
                }, VoidToNull()));
              }, VoidToNull()), child: new container.Container.new({height: dart.notNull(this.widget.radius) / 2, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.grey._get(400), shape: box_border.BoxShape.circle, gradient: new gradient.LinearGradient.new({begin: alignment.Alignment.topLeft, end: alignment.Alignment.bottomRight, colors: this[_currentFill], stops: JSArrayOfdouble().of([0.2, 0.5, 1.0])}), boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: this[_top], offset: new ui.Offset.new(-10.0, -10.0), blurRadius: 15.0, spreadRadius: 0.1}), new box_shadow.BoxShadow.new({color: this[_bottom], offset: new ui.Offset.new(10.0, 10.0), blurRadius: 15.0, spreadRadius: 0.1})])}), child: new basic.Center.new({child: this.widget.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8})]), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
  };
  (button._NeuCircularButtonState.new = function() {
    this[_top] = button._NeuCircularButtonState._lightShadow;
    this[_bottom] = button._NeuCircularButtonState._darkShadow;
    this[_currentFill] = button._NeuCircularButtonState._fill;
    button._NeuCircularButtonState.__proto__.new.call(this);
    ;
  }).prototype = button._NeuCircularButtonState.prototype;
  dart.addTypeTests(button._NeuCircularButtonState);
  dart.setMethodSignature(button._NeuCircularButtonState, () => ({
    __proto__: dart.getMethods(button._NeuCircularButtonState.__proto__),
    [_toggle]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(button._NeuCircularButtonState, "package:digital_clock/button.dart");
  dart.setFieldSignature(button._NeuCircularButtonState, () => ({
    __proto__: dart.getFields(button._NeuCircularButtonState.__proto__),
    [_top]: dart.fieldType(ui.Color),
    [_bottom]: dart.fieldType(ui.Color),
    [_currentFill]: dart.fieldType(core.List$(ui.Color))
  }));
  dart.defineLazy(button._NeuCircularButtonState, {
    /*button._NeuCircularButtonState._lightShadow*/get _lightShadow() {
      return colors.Colors.grey._get(300);
    },
    set _lightShadow(_) {},
    /*button._NeuCircularButtonState._darkShadow*/get _darkShadow() {
      return colors.Colors.grey;
    },
    set _darkShadow(_) {},
    /*button._NeuCircularButtonState._fill*/get _fill() {
      return JSArrayOfColor().of([colors.Colors.grey._get(400), colors.Colors.grey._get(400), colors.Colors.grey._get(400)]);
    },
    set _fill(_) {},
    /*button._NeuCircularButtonState._inside*/get _inside() {
      return JSArrayOfColor().of([button._NeuCircularButtonState._darkShadow, colors.Colors.grey._get(400), button._NeuCircularButtonState._lightShadow]);
    },
    set _inside(_) {}
  });
  dart.trackLibraries("packages/digital_clock/button", {
    "package:digital_clock/button.dart": button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIqB;;;;;;IACN;;;;;;IACA;;;;;;;AAG4B;IAAyB;;;QANhC;QAAsB;QAAY;;IAAlC;IAAsB;IAAY;AAApE;;EAA4E;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BxD,MAAlB,WAAM;AACN,UAAS,YAAL,YAAQ,gDAAwB,YAAR,eAAW;AAEZ,QAAzB,aAAc;AACc,QAA5B,gBAAiB;AACK,QAAtB,qBAAe;YACV,KAAS,YAAL,YAAe,8BAAuB,YAAR,eAAkB;AAEtC,QAAnB,aAAO;AACc,QAArB,gBAAU;AACU,QAApB,qBAAe;;IAEnB;UAG0B;AACxB,YAAO,qCACS,AAAI,wBAAC,aACZ,yCACgC,yCACnB,sBAChB,iDACS;AAGH,gBAFF,cAAS;AACE,kBAAT;;uCAGG,qCACiB,aAAd,AAAO,sBAAS,eACZ,6CACM,AAAI,wBAAC,aACH,sCACN,wCACW,kCACF,yCACP,2BACD,sBAAC,KAAK,KAAK,oBACX,yBACT,qCACW,oBACC,kBAAO,OAAK,oBACR,oBACE,OAClB,qCACW,uBACC,kBAAO,MAAI,mBACP,oBACE,kBAEjB,6BACE,AAAO;IAO5B;;;IA/DM,aAAO;IACP,gBAAU;IAEJ,qBAAe;;;EA6D7B;;;;;;;;;;;;;;;MA/Ee,2CAAY;YAAU,AAAI,yBAAC;;;MAC3B,0CAAW;YAAU;;;MAEf,oCAAK;YAAU,sBACzB,AAAI,wBAAC,MACL,AAAI,wBAAC,MACL,AAAI,wBAAC;;;MAGK,sCAAO;YAAU,sBAClC,4CACO,AAAI,wBAAC,MACZ","file":"button.ddc.js"}');
  // Exports:
  return {
    button: button
  };
});

//# sourceMappingURL=button.ddc.js.map
