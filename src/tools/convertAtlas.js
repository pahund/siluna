/**
 * convertAtlas.js
 *
 * Converts an atlas file created by the texture packer bundled with Spine (by Esoteric software)
 * to a JSON file that can be loaded with Phaser (by Photon Storm).
 *
 * Run from the command line like so: node convertAtlas.js /path/to/my/stuff.atlas
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Dec 2016
 */
'use strict';

const fs = require('fs');
const readline = require('readline');

const input = process.argv[2];

if (!input) {
    error('please specify the path to the atlas file you want to convert');
}

if (!input.endsWith('.atlas')) {
    error(`the specified file name ${input} does not end with .atlas`);
}

if (!fs.existsSync(input)) {
    error(`the specified file ${input} does not exist`);
}

const output = input.replace(/atlas$/, 'json');
let lineNumber = 0;
let currentFrame = null;
const frames = [];

readline.createInterface({
    input: fs.createReadStream(input),
    terminal: false
}).on('line', line => {
    lineNumber++;
    if (!checkLine(line, lineNumber)) {
        return;
    }
    if (!line.startsWith('  ')) {
        if (currentFrame) {
            frames.push(currentFrame);
        }
        currentFrame = {
            filename: line,
            frame: {},
            spriteSourceSize: {}
        };
        return;
    }
    let [ label, value ] = line.split(':');
    label = label.trim();
    value = value.trim();
    switch (label) {
        case 'xy':
            setXY(currentFrame, value);
            break;
        case 'size':
            setSize(currentFrame, value);
            break;
        case 'orig':
            setOrig(currentFrame, value);
            break;
        case 'offset':
            setOffset(currentFrame, value);
            break;
        default:
    }
}).on('close', () => {
    frames.push(currentFrame);
    const data = {
        frames
    }
    fs.writeFileSync(output, JSON.stringify(data, null, 2));
    console.log(`Success! File ${output} was created`);
});

function error(message) {
    console.error(`Error – ${message}`);
    process.exit(1);
}

// eslint-disable-next-line complexity
function checkLine(line, lineNumber) {
    switch (lineNumber) {
        case 1:
            if (line.length > 0) {
                error(`expected line number ${lineNumber} to be empty`);
            }
            return false;
        case 2:
            return false;
        case 3:
            if (!line.startsWith('size:')) {
                error(`expected line number ${lineNumber} to contain the file size`);
            }
            return false;
        case 4:
            if (!line.startsWith('format:')) {
                error(`expected line number ${lineNumber} to contain the file format`);
            }
            return false;
        case 5:
            if (!line.startsWith('filter:')) {
                error(`expected line number ${lineNumber} to contain filter information`);
            }
            return false;
        case 6:
            if (!line.startsWith('repeat:')) {
                error(`expected line number ${lineNumber} to contain repeat information`);
            }
            return false;
        default:
    }
    return true;
}

function setXY(currentFrame, str) {
    let [ x, y ] = str.split(', ');
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    currentFrame.frame.x = x;
    currentFrame.frame.y = y;
}

function setSize(currentFrame, str) {
    let [ w, h ] = str.split(', ');
    w = parseInt(w, 10);
    h = parseInt(h, 10);
    currentFrame.frame.w = w;
    currentFrame.frame.h = h;
}

function setOrig(currentFrame, str) {
    let [ x, y ] = str.split(', ');
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    currentFrame.spriteSourceSize.x = x;
    currentFrame.spriteSourceSize.y = y;
}

function setOffset(currentFrame, str) {
    let [ w, h ] = str.split(', ');
    w = parseInt(w, 10);
    h = parseInt(h, 10);
    currentFrame.spriteSourceSize.w = w;
    currentFrame.spriteSourceSize.h = h;
}
