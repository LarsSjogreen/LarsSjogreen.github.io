/* Based on tag_generator.py by Long Qian
 * https://github.com/qian256/qian256.github.io/blob/master/tag_generator.py
 */

const fs = require('fs');
const async = require('async');

const postdir = '_posts/';
const tagdir = 'tag/';
var filenames = [];
var tags = new Set([]);
var tagArr = [];

fs.readdir(postdir, (err, files) => {
    files.forEach(filename => {
        filenames.push(postdir + filename);
    });

    async.map((filenames), fs.readFile, function(err, data) {
        let rows = data.toString().split("\n");
        rows.forEach(row => {
            if (row.startsWith('- ')) { tags.add(row.replace('- ','').trim()); tagArr.push(row); }
        });
        createFiles(tags);
    });
});

function createFiles(tagNames) {
    if (! fs.existsSync(tagdir)) { fs.mkdirSync(tagdir); }
    tagNames.forEach(tag => {
        let writestring = '---\nlayout: tagpage\ntitle: \"Tag: ' + tag + '\"\ntag: ' + tag + '\nrobots: noindex\n---\n';
        fs.writeFileSync(tagdir+tag+'.md', writestring);
    });
}