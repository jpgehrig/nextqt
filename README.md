Qt WASM and Next.js
===================

This repository contains a simple Qt/WASM project we want to run as a React Component in a Next.js application.

Contents
--------

###  `qtsrc`

The source code of the Qt Application. We modify the .pro to compile the WASM app as an ES6 module with:

```
QMAKE_LFLAGS += '-s USE_ES6_IMPORT_META=0 -s EXPORT_ES6=1 -s MODULARIZE=1 -s ENVIRONMENT="web"'
```

### `simplehtml`

The "simple HTML" deployment using `qtloader.js`, as recommended by Qt. (built **without** the additionnal `QMAKE_LFLAGS`)

Run it:

    $ cd simplehtml
    $ http-server

And open a browser at the specified URL.

![simplehtml](doc/simplehtml.png)

### `nextjs`

The "Next.js" application with the `QtApp` component loading the WASM code. (built **with** the additionnal `QMAKE_LFLAGS`)


Run it:

    $ cd nextjs
    $ yarn install
    $ yarn run dev

And open a browser at the specified URL. The app crashed.

![nextjs-error](doc/nextjs-error.png)
