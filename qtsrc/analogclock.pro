include(../rasterwindow/rasterwindow.pri)

# work-around for QTBUG-13496
CONFIG += no_batch

SOURCES += \
    main.cpp

target.path = $$[QT_INSTALL_EXAMPLES]/gui/analogclock
INSTALLS += target

wasm {
    QMAKE_LFLAGS += '-s USE_ES6_IMPORT_META=0 -s EXPORT_ES6=1 -s MODULARIZE=1 -s ENVIRONMENT="web"'
}
