define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_clock_helper/model', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_clock_helper__model, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const model = packages__flutter_clock_helper__model.model;
  const app = packages__flutter__material.src__material__app;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const $switch = packages__flutter__material.src__material__switch;
  const text_field = packages__flutter__material.src__material__text_field;
  const drawer = packages__flutter__material.src__material__drawer;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const theme = packages__flutter__material.src__material__theme;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const customizer = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $toString = dartx.toString;
  const $remove = dartx.remove;
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let ThemeModeToNull = () => (ThemeModeToNull = dart.constFn(dart.fnType(core.Null, [app.ThemeMode])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let WeatherConditionToNull = () => (WeatherConditionToNull = dart.constFn(dart.fnType(core.Null, [model.WeatherCondition])))();
  let TemperatureUnitToNull = () => (TemperatureUnitToNull = dart.constFn(dart.fnType(core.Null, [model.TemperatureUnit])))();
  let BuildContextToIconButton = () => (BuildContextToIconButton = dart.constFn(dart.fnType(icon_button.IconButton, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 74,
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
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isDense",
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 66,
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
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 18,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 11,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 11,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 11,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 9,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 23,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 21,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "right",
        [_Location_column]: 21,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 13,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomPadding",
        [_Location_column]: 9,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "endDrawer",
        [_Location_column]: 9,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 196,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "darkTheme",
        [_Location_column]: 7,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "themeMode",
        [_Location_column]: 7,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104, C105 || CT.C105, C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/flutter_clock_helper/customizer.dart"
      });
    }
  });
  const _clock = dart.privateName(customizer, "_clock");
  const _clock$ = dart.privateName(customizer, "ClockCustomizer._clock");
  customizer.ClockCustomizer = class ClockCustomizer extends framework.StatefulWidget {
    get [_clock]() {
      return this[_clock$];
    }
    set [_clock](value) {
      super[_clock] = value;
    }
    createState() {
      return new customizer._ClockCustomizerState.new();
    }
  };
  (customizer.ClockCustomizer.new = function(_clock, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_clock$] = _clock;
    customizer.ClockCustomizer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = customizer.ClockCustomizer.prototype;
  dart.addTypeTests(customizer.ClockCustomizer);
  dart.setMethodSignature(customizer.ClockCustomizer, () => ({
    __proto__: dart.getMethods(customizer.ClockCustomizer.__proto__),
    createState: dart.fnType(customizer._ClockCustomizerState, [])
  }));
  dart.setLibraryUri(customizer.ClockCustomizer, "package:flutter_clock_helper/customizer.dart");
  dart.setFieldSignature(customizer.ClockCustomizer, () => ({
    __proto__: dart.getFields(customizer.ClockCustomizer.__proto__),
    [_clock]: dart.finalFieldType(dart.fnType(framework.Widget, [model.ClockModel]))
  }));
  const _model = dart.privateName(customizer, "_model");
  const _themeMode = dart.privateName(customizer, "_themeMode");
  const _configButtonShown = dart.privateName(customizer, "_configButtonShown");
  const _handleModelChange = dart.privateName(customizer, "_handleModelChange");
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
  let C4;
  let C3;
  let C9;
  let C10;
  let C11;
  let C12;
  let C8;
  let C7;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C17;
  let C16;
  const _enumMenu = dart.privateName(customizer, "_enumMenu");
  let C22;
  let C21;
  let C20;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C31;
  let C30;
  const _switch = dart.privateName(customizer, "_switch");
  let C35;
  let C36;
  let C34;
  let C33;
  const _textField = dart.privateName(customizer, "_textField");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C37;
  let C40;
  let C39;
  let C38;
  let C43;
  let C42;
  let C41;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C49;
  let C48;
  let C53;
  let C52;
  let C51;
  const _configDrawer = dart.privateName(customizer, "_configDrawer");
  let C56;
  let C55;
  let C54;
  let C59;
  let C60;
  let C61;
  let C58;
  let C57;
  let C64;
  let C63;
  let C62;
  const _configButton = dart.privateName(customizer, "_configButton");
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C74;
  let C73;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C84;
  let C81;
  let C80;
  let C87;
  let C86;
  let C85;
  let C90;
  let C91;
  let C92;
  let C89;
  let C88;
  let C95;
  let C94;
  let C93;
  let C98;
  let C99;
  let C100;
  let C97;
  let C96;
  let C103;
  let C104;
  let C105;
  let C106;
  let C107;
  let C102;
  let C101;
  customizer._ClockCustomizerState = class _ClockCustomizerState extends framework.State$(customizer.ClockCustomizer) {
    initState() {
      super.initState();
      this[_model].addListener(dart.bind(this, _handleModelChange));
    }
    dispose() {
      this[_model].removeListener(dart.bind(this, _handleModelChange));
      this[_model].dispose();
      super.dispose();
    }
    [_handleModelChange]() {
      return this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    [_enumMenu](T, label, value, items, onChanged) {
      return new input_decorator.InputDecorator.new({decoration: new input_decorator.InputDecoration.new({labelText: label}), child: new dropdown.DropdownButtonHideUnderline.new({child: new (dropdown.DropdownButton$(T)).new({value: value, isDense: true, onChanged: onChanged, items: items[$map](dropdown.DropdownMenuItem$(T), dart.fn(item => new (dropdown.DropdownMenuItem$(T)).new({value: item, child: new text.Text.new(model.enumToString(item), {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), dart.fnType(dropdown.DropdownMenuItem$(T), [T])))[$toList](), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
    [_switch](label, value, onChanged) {
      return new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new text.Text.new(label, {$creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new $switch.Switch.new({value: value, onChanged: onChanged, $creationLocationd_0dea112b090073317d4: C26 || CT.C26})]), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
    [_textField](currentValue, label, onChanged) {
      return new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({hintText: currentValue, helperText: label}), onChanged: StringTovoid()._check(onChanged), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
    [_configDrawer](context) {
      let t0;
      return new safe_area.SafeArea.new({child: new drawer.Drawer.new({child: new basic.Padding.new({padding: C37 || CT.C37, child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([this[_textField](core.String._check(this[_model].location), "Location", dart.fn(location => {
                    this.setState(dart.fn(() => {
                      this[_model].location = location;
                    }, VoidToNull()));
                  }, StringToNull())), this[_textField](dart.toString(this[_model].temperature), "Temperature", dart.fn(temperature => {
                    this.setState(dart.fn(() => {
                      this[_model].temperature = core.double.parse(temperature);
                    }, VoidToNull()));
                  }, StringToNull())), this[_enumMenu](app.ThemeMode, "Theme", this[_themeMode], (t0 = app.ThemeMode.values[$toList](), t0[$remove](app.ThemeMode.system), t0), dart.fn(mode => {
                    this.setState(dart.fn(() => {
                      this[_themeMode] = mode;
                    }, VoidToNull()));
                  }, ThemeModeToNull())), this[_switch]("24-hour format", core.bool._check(this[_model].is24HourFormat), dart.fn(value => {
                    this.setState(dart.fn(() => {
                      this[_model].is24HourFormat = value;
                    }, VoidToNull()));
                  }, boolToNull())), this[_enumMenu](model.WeatherCondition, "Weather", this[_model].weatherCondition, model.WeatherCondition.values, dart.fn(condition => {
                    this.setState(dart.fn(() => {
                      this[_model].weatherCondition = condition;
                    }, VoidToNull()));
                  }, WeatherConditionToNull())), this[_enumMenu](model.TemperatureUnit, "Units", this[_model].unit, model.TemperatureUnit.values, dart.fn(unit => {
                    this.setState(dart.fn(() => {
                      this[_model].unit = unit;
                    }, VoidToNull()));
                  }, TemperatureUnitToNull()))]), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51});
    }
    [_configButton]() {
      return new basic.Builder.new({builder: dart.fn(context => new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.settings, {$creationLocationd_0dea112b090073317d4: C54 || CT.C54}), tooltip: "Configure clock", onPressed: dart.fn(() => {
            scaffold.Scaffold.of(context).openEndDrawer();
            this.setState(dart.fn(() => {
              this[_configButtonShown] = false;
            }, VoidToNull()));
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), BuildContextToIconButton()), $creationLocationd_0dea112b090073317d4: C62 || CT.C62});
    }
    build(context) {
      let clock = new basic.Center.new({child: new basic.AspectRatio.new({aspectRatio: 5 / 3, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({width: 2.0, color: theme.Theme.of(context).unselectedWidgetColor})}), child: this.widget[_clock](this[_model]), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73});
      return new app.MaterialApp.new({theme: theme_data.ThemeData.light(), darkTheme: theme_data.ThemeData.dark(), themeMode: this[_themeMode], debugShowCheckedModeBanner: false, home: new scaffold.Scaffold.new({resizeToAvoidBottomPadding: false, endDrawer: this[_configDrawer](context), body: new safe_area.SafeArea.new({child: new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTap: dart.fn(() => {
                this.setState(dart.fn(() => {
                  this[_configButtonShown] = !dart.test(this[_configButtonShown]);
                }, VoidToNull()));
              }, VoidToNull()), child: new basic.Stack.new({children: (() => {
                  let t0 = JSArrayOfWidget().of([]);
                  t0[$add](clock);
                  if (dart.test(this[_configButtonShown])) t0[$add](new basic.Positioned.new({top: 0.0, right: 0.0, child: new basic.Opacity.new({opacity: 0.7, child: this[_configButton](), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}));
                  return t0;
                })(), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), $creationLocationd_0dea112b090073317d4: C101 || CT.C101});
    }
  };
  (customizer._ClockCustomizerState.new = function() {
    this[_model] = new model.ClockModel.new();
    this[_themeMode] = app.ThemeMode.light;
    this[_configButtonShown] = false;
    customizer._ClockCustomizerState.__proto__.new.call(this);
    ;
  }).prototype = customizer._ClockCustomizerState.prototype;
  dart.addTypeTests(customizer._ClockCustomizerState);
  dart.setMethodSignature(customizer._ClockCustomizerState, () => ({
    __proto__: dart.getMethods(customizer._ClockCustomizerState.__proto__),
    [_handleModelChange]: dart.fnType(dart.void, []),
    [_enumMenu]: dart.gFnType(T => [framework.Widget, [core.String, T, core.List$(T), dart.fnType(dart.void, [T])]]),
    [_switch]: dart.fnType(framework.Widget, [core.String, core.bool, dart.fnType(dart.void, [core.bool])]),
    [_textField]: dart.fnType(framework.Widget, [core.String, core.String, dart.fnType(dart.void, [core.Null])]),
    [_configDrawer]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_configButton]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(customizer._ClockCustomizerState, "package:flutter_clock_helper/customizer.dart");
  dart.setFieldSignature(customizer._ClockCustomizerState, () => ({
    __proto__: dart.getFields(customizer._ClockCustomizerState.__proto__),
    [_model]: dart.finalFieldType(model.ClockModel),
    [_themeMode]: dart.fieldType(app.ThemeMode),
    [_configButtonShown]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter_clock_helper/customizer", {
    "package:flutter_clock_helper/customizer.dart": customizer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["customizer.dart"],"names":[],"mappings":"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","file":"customizer.ddc.js"}');
  // Exports:
  return {
    customizer: customizer
  };
});

//# sourceMappingURL=customizer.ddc.js.map
