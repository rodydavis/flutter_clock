define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const model = Object.create(dart.library);
  const $last = dartx.last;
  const $toString = dartx.toString;
  const $split = dartx.split;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: model.TemperatureUnit.prototype,
        [_name$]: "TemperatureUnit.fahrenheit",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: model.TemperatureUnit.prototype,
        [_name$]: "TemperatureUnit.celsius",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: model.WeatherCondition.prototype,
        [_name$]: "WeatherCondition.cloudy",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: model.WeatherCondition.prototype,
        [_name$]: "WeatherCondition.foggy",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: model.WeatherCondition.prototype,
        [_name$]: "WeatherCondition.rainy",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: model.WeatherCondition.prototype,
        [_name$]: "WeatherCondition.snowy",
        index: 3
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: model.WeatherCondition.prototype,
        [_name$]: "WeatherCondition.sunny",
        index: 4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: model.WeatherCondition.prototype,
        [_name$]: "WeatherCondition.thunderstorm",
        index: 5
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: model.WeatherCondition.prototype,
        [_name$]: "WeatherCondition.windy",
        index: 6
      });
    },
    get C9() {
      return C9 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], model.WeatherCondition);
    },
    get C10() {
      return C10 = dart.constList([C1 || CT.C1, C0 || CT.C0], model.TemperatureUnit);
    }
  });
  const _is24HourFormat = dart.privateName(model, "_is24HourFormat");
  const _location = dart.privateName(model, "_location");
  const _temperature = dart.privateName(model, "_temperature");
  const _high = dart.privateName(model, "_high");
  const _low = dart.privateName(model, "_low");
  const _weatherCondition = dart.privateName(model, "_weatherCondition");
  const _unit = dart.privateName(model, "_unit");
  const _convertFromCelsius = dart.privateName(model, "_convertFromCelsius");
  const _convertToCelsius = dart.privateName(model, "_convertToCelsius");
  const _name$ = dart.privateName(model, "_name");
  let C0;
  let C1;
  model.ClockModel = class ClockModel extends change_notifier.ChangeNotifier {
    get is24HourFormat() {
      return this[_is24HourFormat];
    }
    set is24HourFormat(is24HourFormat) {
      if (!dart.equals(this[_is24HourFormat], is24HourFormat)) {
        this[_is24HourFormat] = is24HourFormat;
        this.notifyListeners();
      }
    }
    get location() {
      return this[_location];
    }
    set location(location) {
      if (location != this[_location]) {
        this[_location] = location;
        this.notifyListeners();
      }
    }
    get temperature() {
      return this[_convertFromCelsius](this[_temperature]);
    }
    set temperature(temperature) {
      temperature = this[_convertToCelsius](temperature);
      if (temperature != this[_temperature]) {
        this[_temperature] = temperature;
        this[_low] = dart.notNull(this[_temperature]) - 3.0;
        this[_high] = dart.notNull(this[_temperature]) + 4.0;
        this.notifyListeners();
      }
    }
    get high() {
      return this[_convertFromCelsius](this[_high]);
    }
    set high(high) {
      high = this[_convertToCelsius](high);
      if (high != this[_high]) {
        this[_high] = high;
        this.notifyListeners();
      }
    }
    get low() {
      return this[_convertFromCelsius](this[_low]);
    }
    set low(low) {
      low = this[_convertToCelsius](low);
      if (low != this[_low]) {
        this[_low] = low;
        this.notifyListeners();
      }
    }
    get weatherCondition() {
      return this[_weatherCondition];
    }
    set weatherCondition(weatherCondition) {
      if (!dart.equals(weatherCondition, this[_weatherCondition])) {
        this[_weatherCondition] = weatherCondition;
        this.notifyListeners();
      }
    }
    get weatherString() {
      return model.enumToString(this.weatherCondition);
    }
    get unit() {
      return this[_unit];
    }
    set unit(unit) {
      if (!dart.equals(unit, this[_unit])) {
        this[_unit] = unit;
        this.notifyListeners();
      }
    }
    get temperatureString() {
      return dart.str(dart.dsend(this.temperature, 'toStringAsFixed', [1])) + dart.str(this.unitString);
    }
    get highString() {
      return dart.str(dart.dsend(this.high, 'toStringAsFixed', [1])) + dart.str(this.unitString);
    }
    get lowString() {
      return dart.str(dart.dsend(this.low, 'toStringAsFixed', [1])) + dart.str(this.unitString);
    }
    get unitString() {
      switch (this.unit) {
        case C0 || CT.C0:
        {
          return "°F";
        }
        case C1 || CT.C1:
        default:
        {
          return "°C";
        }
      }
    }
    [_convertFromCelsius](degreesCelsius) {
      switch (this.unit) {
        case C0 || CT.C0:
        {
          return 32.0 + dart.notNull(degreesCelsius) * 9.0 / 5.0;
        }
        case C1 || CT.C1:
        default:
        {
          return degreesCelsius;
          break;
        }
      }
    }
    [_convertToCelsius](degrees) {
      switch (this.unit) {
        case C0 || CT.C0:
        {
          return (dart.notNull(degrees) - 32.0) * 5.0 / 9.0;
        }
        case C1 || CT.C1:
        default:
        {
          return degrees;
          break;
        }
      }
    }
  };
  (model.ClockModel.new = function() {
    this[_is24HourFormat] = true;
    this[_location] = "Mountain View, CA";
    this[_temperature] = 22.0;
    this[_high] = 26.0;
    this[_low] = 19.0;
    this[_weatherCondition] = model.WeatherCondition.sunny;
    this[_unit] = model.TemperatureUnit.celsius;
    model.ClockModel.__proto__.new.call(this);
    ;
  }).prototype = model.ClockModel.prototype;
  dart.addTypeTests(model.ClockModel);
  dart.setMethodSignature(model.ClockModel, () => ({
    __proto__: dart.getMethods(model.ClockModel.__proto__),
    [_convertFromCelsius]: dart.fnType(core.num, [core.num]),
    [_convertToCelsius]: dart.fnType(core.num, [core.num])
  }));
  dart.setGetterSignature(model.ClockModel, () => ({
    __proto__: dart.getGetters(model.ClockModel.__proto__),
    is24HourFormat: dart.dynamic,
    location: dart.dynamic,
    temperature: dart.dynamic,
    high: dart.dynamic,
    low: dart.dynamic,
    weatherCondition: model.WeatherCondition,
    weatherString: core.String,
    unit: model.TemperatureUnit,
    temperatureString: core.String,
    highString: core.String,
    lowString: core.String,
    unitString: core.String
  }));
  dart.setSetterSignature(model.ClockModel, () => ({
    __proto__: dart.getSetters(model.ClockModel.__proto__),
    is24HourFormat: core.bool,
    location: core.String,
    temperature: core.num,
    high: core.num,
    low: core.num,
    weatherCondition: model.WeatherCondition,
    unit: model.TemperatureUnit
  }));
  dart.setLibraryUri(model.ClockModel, "package:flutter_clock_helper/model.dart");
  dart.setFieldSignature(model.ClockModel, () => ({
    __proto__: dart.getFields(model.ClockModel.__proto__),
    [_is24HourFormat]: dart.fieldType(core.bool),
    [_location]: dart.fieldType(core.String),
    [_temperature]: dart.fieldType(core.num),
    [_high]: dart.fieldType(core.num),
    [_low]: dart.fieldType(core.num),
    [_weatherCondition]: dart.fieldType(model.WeatherCondition),
    [_unit]: dart.fieldType(model.TemperatureUnit)
  }));
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  model.WeatherCondition = class WeatherCondition extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (model.WeatherCondition.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = model.WeatherCondition.prototype;
  dart.addTypeTests(model.WeatherCondition);
  dart.setLibraryUri(model.WeatherCondition, "package:flutter_clock_helper/model.dart");
  dart.setFieldSignature(model.WeatherCondition, () => ({
    __proto__: dart.getFields(model.WeatherCondition.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(model.WeatherCondition, ['toString']);
  model.WeatherCondition.cloudy = C2 || CT.C2;
  model.WeatherCondition.foggy = C3 || CT.C3;
  model.WeatherCondition.rainy = C4 || CT.C4;
  model.WeatherCondition.snowy = C5 || CT.C5;
  model.WeatherCondition.sunny = C6 || CT.C6;
  model.WeatherCondition.thunderstorm = C7 || CT.C7;
  model.WeatherCondition.windy = C8 || CT.C8;
  model.WeatherCondition.values = C9 || CT.C9;
  let C10;
  model.TemperatureUnit = class TemperatureUnit extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (model.TemperatureUnit.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = model.TemperatureUnit.prototype;
  dart.addTypeTests(model.TemperatureUnit);
  dart.setLibraryUri(model.TemperatureUnit, "package:flutter_clock_helper/model.dart");
  dart.setFieldSignature(model.TemperatureUnit, () => ({
    __proto__: dart.getFields(model.TemperatureUnit.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(model.TemperatureUnit, ['toString']);
  model.TemperatureUnit.celsius = C1 || CT.C1;
  model.TemperatureUnit.fahrenheit = C0 || CT.C0;
  model.TemperatureUnit.values = C10 || CT.C10;
  model.enumToString = function enumToString(e) {
    return dart.toString(e)[$split](".")[$last];
  };
  dart.trackLibraries("packages/flutter_clock_helper/model", {
    "package:flutter_clock_helper/model.dart": model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAewB;IAAe;uBAEb;AACtB,uBAAI,uBAAmB,cAAc;AACH,QAAhC,wBAAkB,cAAc;AACf,QAAjB;;IAEJ;;AAGgB;IAAS;iBAEL;AAClB,UAAI,QAAQ,IAAI;AACM,QAApB,kBAAY,QAAQ;AACH,QAAjB;;IAEJ;;AAGmB,uCAAoB;IAAa;oBAGhC;AAC0B,MAA5C,cAAc,wBAAkB,WAAW;AAC3C,UAAI,WAAW,IAAI;AACS,QAA1B,qBAAe,WAAW;AACD,QAAzB,aAAoB,aAAb,sBAAe;AACI,QAA1B,cAAqB,aAAb,sBAAe;AACN,QAAjB;;IAEJ;;AAGY,uCAAoB;IAAM;aAGzB;AACmB,MAA9B,OAAO,wBAAkB,IAAI;AAC7B,UAAI,IAAI,IAAI;AACE,QAAZ,cAAQ,IAAI;AACK,QAAjB;;IAEJ;;AAGW,uCAAoB;IAAK;YAExB;AACkB,MAA5B,MAAM,wBAAkB,GAAG;AAC3B,UAAI,GAAG,IAAI;AACC,QAAV,aAAO,GAAG;AACO,QAAjB;;IAEJ;;AAGyC;IAAiB;yBAEpB;AACpC,uBAAI,gBAAgB,EAAI;AACc,QAApC,0BAAoB,gBAAgB;AACnB,QAAjB;;IAEJ;;AAG4B,gCAAa;IAAiB;;AAG9B;IAAK;aAER;AACvB,uBAAI,IAAI,EAAI;AACE,QAAZ,cAAQ,IAAI;AACK,QAAjB;;IAEJ;;AAIE,YAAqD,UAA/B,WAAZ,sCAA4B,gBAAI;IAC5C;;AAIE,YAA8C,UAA/B,WAAL,+BAAqB,gBAAI;IACrC;;AAIE,YAA6C,UAA/B,WAAJ,8BAAoB,gBAAI;IACpC;;AAIE,cAAQ;;;AAEJ,gBAAO;;;;;AAGP,gBAAO;;;IAEb;0BAE4B;AAC1B,cAAQ;;;AAEJ,gBAAO,AAAK,QAAiB,AAAM,aAArB,cAAc,IAAG,MAAM;;;;;AAGrC,gBAAO,eAAc;AACrB;;;IAEN;wBAE0B;AACxB,cAAQ;;;AAEJ,gBAAwB,AAAM,EAAd,aAAR,OAAO,IAAG,QAAQ,MAAM;;;;;AAGhC,gBAAO,QAAO;AACd;;;IAEN;;;IA5HK,wBAAkB;IAUhB,kBAAY;IAWf,qBAAe;IAcf,cAAQ;IAWR,aAAO;IAWM,0BAAqC;IAatC,cAAwB;;;EAuD1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWA;;gDARK;;;;EAQL;;;;;;;;;;;;;;;;;;;;;IAMA;;+CAHK;;;;EAGL;;;;;;;;;;;;6CAG2B;AAAM,UAAE,AAAW,AAAW,eAAxB,CAAC,UAAkB;EAAS","file":"model.ddc.js"}');
  // Exports:
  return {
    model: model
  };
});

//# sourceMappingURL=model.ddc.js.map
