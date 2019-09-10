#!/bin/bash

rm -f build/*

npx cleancss --output build/app.css -- stylesheets/app.css

npx terser --ecma 5 --enclose --compress --mangle --lint --output build/app.js -- \
	javascript/reverbgen.js javascript/audio.js javascript/oborona.js \
	javascript/setup.js javascript/font.js javascript/cleartype.js javascript/canvas.js \
	javascript/dwarfs.js javascript/gold.js javascript/zones.js javascript/mainloop.js \
	javascript/app.js javascript/actions.js

npx html-minifier --collapse-whitespace --remove-attribute-quotes \
	--output build/index.html -- index_build.html

npx terser --parse expression --output build/manifest.json -- manifest.json
