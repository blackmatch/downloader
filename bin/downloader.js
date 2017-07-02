#! /usr/bin/env node

const Downloader = require('../lib/downloader');

const main = function(url, outDir) {
  const download = new Downloader();
  download.get(url, outDir);
};

const url = process.argv[1];
const outDir = process.argv[2];
main(url, outDir);