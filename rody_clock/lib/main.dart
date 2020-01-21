import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter_clock_helper/customizer.dart';
import 'package:flutter_clock_helper/model.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart' hide TextDirection;

void main() => runApp(MaterialApp(
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      debugShowCheckedModeBanner: false,
      home: ClockCustomizer((model) => ClockView(model: model)),
    ));

class ClockView extends StatefulWidget {
  const ClockView({
    Key key,
    this.model,
  }) : super(key: key);

  final ClockModel model;

  @override
  _ClockViewState createState() => _ClockViewState();
}

class _ClockViewState extends State<ClockView> with TickerProviderStateMixin {
  DateTime _dateTime = DateTime.now();
  Timer _timer;
  AnimationController _flasherController;
  final _hour1Controller = ValueNotifier<int>(0);
  final _hour2Controller = ValueNotifier<int>(0);
  final _min1Controller = ValueNotifier<int>(0);
  final _min2Controller = ValueNotifier<int>(0);

  @override
  void initState() {
    super.initState();
    _flasherController = AnimationController(
      vsync: this,
      duration: Duration(milliseconds: 999),
    );
    widget.model.addListener(_updateModel);
    _updateTime();
    _updateModel();
  }

  @override
  void didUpdateWidget(ClockView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.model != oldWidget.model) {
      oldWidget.model.removeListener(_updateModel);
      widget.model.addListener(_updateModel);
      if (mounted) setState(() {});
    }
  }

  @override
  void dispose() {
    _flasherController?.dispose();
    _timer?.cancel();
    widget.model.removeListener(_updateModel);
    widget.model.dispose();
    super.dispose();
  }

  void _updateModel() {
    if (mounted)
      setState(() {
        _updateDisplay();
      });
  }

  void _updateDisplay() {
    final hour =
        DateFormat(widget.model.is24HourFormat ? 'HH' : 'hh').format(_dateTime);
    final minute = DateFormat('mm').format(_dateTime);
    final second = DateFormat('ss').format(_dateTime);
    _hour1Controller.value = int.tryParse(hour.substring(0, 1));
    _hour2Controller.value = int.tryParse(hour.substring(1, 2));
    _min1Controller.value = int.tryParse(minute.substring(0, 1));
    _min2Controller.value = int.tryParse(minute.substring(1, 2));
  }

  void _updateTime() {
    setState(() {
      _dateTime = DateTime.now();
      _updateDisplay();
      _timer = Timer(
        Duration(seconds: 1) - Duration(milliseconds: _dateTime.millisecond),
        _updateTime,
      );
      if (_dateTime.second.isEven) {
        _flasherController.forward();
      } else {
        _flasherController.reverse();
      }
      if (mounted) setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    final _isDark = Theme.of(context).brightness == Brightness.dark;
    final _bgColor = _isDark ? Colors.grey[850] : Colors.grey[300];
    return Material(
        color: _bgColor,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: LayoutBuilder(
            builder: (_, dimens) {
              return Container(
                child: Row(
                  // mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    _buildNum(
                        context,
                        _hour1Controller,
                        _hour1Controller.value == 0 &&
                            !widget.model.is24HourFormat),
                    // _buildSpacer(dimens),
                    _buildNum(context, _hour2Controller),
                    // _buildSpacer(dimens),
                    _buildFlashers(context),
                    _buildNum(context, _min1Controller),
                    // _buildSpacer(dimens),
                    // _buildSpacer(dimens),
                    _buildNum(context, _min2Controller),
                  ],
                ),
              );
            },
          ),
        ));
  }

  Widget _buildFlashers(BuildContext context) {
    return Flexible(
      flex: 1,
      child: LayoutBuilder(
        builder: (_, dimens) => SizedBox.fromSize(
          size: Size(dimens.maxWidth, dimens.maxHeight),
          child: Padding(
            padding: const EdgeInsets.all(4.0),
            child: CustomPaint(
              painter: FlasherPainter(
                elevation: _flasherController,
                isDark: Theme.of(context).brightness == Brightness.dark,
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildNum(BuildContext context, ValueListenable<int> numberVal,
      [bool hide = false]) {
    return Flexible(
      flex: 4,
      child: Container(
        padding: const EdgeInsets.all(10.0),
        child: LayoutBuilder(
          builder: (_, dimens) => SizedBox.fromSize(
            size: Size(dimens.maxWidth, dimens.maxHeight),
            child: Container(
              padding: const EdgeInsets.all(8.0),
              child: hide
                  ? null
                  : CustomPaint(
                      painter: NumberPainter(
                        isDark: Theme.of(context).brightness == Brightness.dark,
                        numberVal: numberVal,
                      ),
                    ),
            ),
          ),
        ),
      ),
    );
  }
}

class RectUtils {
  final Rect rect, tlShadow, brShadow;
  final double radius, elevation;
  final Color bgColor, tlShadowColor, brShadowColor;

  RectUtils({
    @required this.rect,
    @required this.bgColor,
    @required this.tlShadowColor,
    @required this.brShadowColor,
    @required this.radius,
    @required this.elevation,
    this.tlShadow,
    this.brShadow,
  });

  void drawBRShadow(Canvas canvas, double padding) {
    final _path = Path()
      ..addRRect(RRect.fromRectAndCorners(
        brShadow ??
            Rect.fromLTRB(
              rect.left + padding,
              rect.top + padding,
              rect.right + padding,
              rect.bottom + padding,
            ),
        topLeft: Radius.circular(radius),
        bottomLeft: Radius.circular(radius),
        bottomRight: Radius.circular(radius),
        topRight: Radius.circular(radius),
      ))
      ..fillType = PathFillType.evenOdd;
    final _paint = Paint()
      ..color = Color.lerp(brShadowColor, bgColor, elevation)
      ..maskFilter = MaskFilter.blur(
        BlurStyle.normal,
        convertRadiusToSigma(radius),
      );
    canvas.drawPath(_path, _paint);
  }

  void drawTLShadow(Canvas canvas, double padding) {
    final _path = Path()
      ..addRRect(RRect.fromRectAndCorners(
        tlShadow ??
            Rect.fromLTRB(
              rect.left - padding,
              rect.top - padding,
              rect.right,
              rect.bottom,
            ),
        topLeft: Radius.circular(radius),
        bottomLeft: Radius.circular(radius),
        bottomRight: Radius.circular(radius),
        topRight: Radius.circular(radius),
      ))
      ..fillType = PathFillType.evenOdd;
    final _paint = Paint()
      ..color = Color.lerp(tlShadowColor, bgColor, elevation)
      ..maskFilter = MaskFilter.blur(
        BlurStyle.normal,
        convertRadiusToSigma(radius),
      );
    canvas.drawPath(_path, _paint);
  }

  void drawCenter(Canvas canvas) {
    final _path = Path()
      ..addRRect(RRect.fromRectAndCorners(
        rect,
        topLeft: Radius.circular(radius),
        bottomLeft: Radius.circular(radius),
        bottomRight: Radius.circular(radius),
        topRight: Radius.circular(radius),
      ))
      ..fillType = PathFillType.evenOdd;
    final _paint = Paint()..color = bgColor;
    canvas.drawPath(_path, _paint);
  }

  void draw(Canvas canvas, double padding) {
    drawTLShadow(canvas, padding);
    drawBRShadow(canvas, padding);
    drawCenter(canvas);
  }

  static double convertRadiusToSigma(double radius) {
    return radius * 0.57735 + 0.5;
  }

  static void drawRect(Rect _rect, Canvas canvas, double kPadding, bool isDark,
          double elevation) =>
      RectUtils(
        rect: _rect,
        bgColor: isDark ? Colors.grey[850] : Colors.grey[300],
        tlShadowColor: isDark ? Colors.grey[900] : Colors.grey,
        brShadowColor: isDark ? Colors.grey[800] : Colors.white,
        radius: 4.0,
        elevation: elevation,
      )
        ..drawTLShadow(canvas, kPadding)
        ..drawBRShadow(canvas, kPadding)
        ..drawCenter(canvas);
}

class NumberPainter extends CustomPainter {
  final ValueListenable<int> numberVal;
  final bool isDark;

  NumberPainter({
    @required this.numberVal,
    @required this.isDark,
  }) : super(repaint: numberVal);

  @override
  void paint(Canvas canvas, Size size) {
    final number = numberVal.value;
    final elevation = 4.0;
    const kPadding = 2.5;
    const kSpacing = 4.0;
    const kSize = 20.0;
    // Top
    if (number == 0 ||
        number == 2 ||
        number == 3 ||
        number == 5 ||
        number == 6 ||
        number == 7 ||
        number == 8 ||
        number == 9)
      RectUtils.drawRect(
          Rect.fromPoints(
            Offset(kSize, 0),
            Offset(size.width - kSize, kSize),
          ),
          canvas,
          kPadding,
          isDark,
          elevation);
    // Left Top
    if (number == 0 ||
        number == 4 ||
        number == 5 ||
        number == 6 ||
        number == 8 ||
        number == 9)
      RectUtils.drawRect(
          Rect.fromPoints(
            Offset(0, kSize + kSpacing),
            Offset(kSize, (size.height / 2) - (kSize / 2) - kSpacing),
          ),
          canvas,
          kPadding,
          isDark,
          elevation);
    // Right Top
    if (number == 0 ||
        number == 1 ||
        number == 2 ||
        number == 3 ||
        number == 4 ||
        number == 7 ||
        number == 8 ||
        number == 9)
      RectUtils.drawRect(
          Rect.fromPoints(
            Offset(size.width - kSize, kSize + kSpacing),
            Offset(size.width, (size.height / 2) - (kSize / 2) - kSpacing),
          ),
          canvas,
          kPadding,
          isDark,
          elevation);
    // Middle
    if (number == 2 ||
        number == 3 ||
        number == 4 ||
        number == 5 ||
        number == 6 ||
        number == 8 ||
        number == 9)
      RectUtils.drawRect(
          Rect.fromPoints(
            Offset(kSize + kSpacing, (size.height / 2) - (kSize / 2)),
            Offset(
                size.width - kSize - kSpacing, (size.height / 2) + (kSize / 2)),
          ),
          canvas,
          kPadding,
          isDark,
          elevation);
    // Left Bottom
    if (number == 0 || number == 2 || number == 6 || number == 8)
      RectUtils.drawRect(
          Rect.fromPoints(
            Offset(0, (size.height / 2) + (kSize / 2) + kSpacing),
            Offset(kSize, size.height - kSize - kSpacing),
          ),
          canvas,
          kPadding,
          isDark,
          elevation);
    // Right Bottom
    if (number == 0 ||
        number == 1 ||
        number == 3 ||
        number == 4 ||
        number == 5 ||
        number == 6 ||
        number == 7 ||
        number == 8 ||
        number == 9)
      RectUtils.drawRect(
          Rect.fromPoints(
            Offset(
                size.width - kSize, (size.height / 2) + (kSize / 2) + kSpacing),
            Offset(size.width, size.height - kSize - kSpacing),
          ),
          canvas,
          kPadding,
          isDark,
          elevation);
    // Bottom
    if (number == 0 ||
        number == 2 ||
        number == 3 ||
        number == 5 ||
        number == 6 ||
        number == 8 ||
        number == 9)
      RectUtils.drawRect(
          Rect.fromPoints(
            Offset(kSize, size.height - kSize),
            Offset(size.width - kSize, size.height),
          ),
          canvas,
          kPadding,
          isDark,
          elevation);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}

class FlasherPainter extends CustomPainter {
  final ValueListenable<double> elevation;
  final bool isDark;

  FlasherPainter({
    @required this.elevation,
    @required this.isDark,
  }) : super(repaint: elevation);

  @override
  void paint(Canvas canvas, Size size) {
    const kPadding = 3.0;
    const kSpacing = 10.0;
    const kSize = 20.0;
    final _elevation = elevation.value * 3.0 + 1;

    RectUtils.drawRect(
        Rect.fromLTWH(0, size.height / 2 - kSize - kSpacing, size.width, kSize),
        canvas,
        kPadding,
        isDark,
        _elevation);
    RectUtils.drawRect(
        Rect.fromLTWH(0, size.height / 2 + kSize + kSpacing, size.width, kSize),
        canvas,
        kPadding,
        isDark,
        _elevation);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}
