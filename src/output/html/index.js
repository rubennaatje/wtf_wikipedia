const parse = require('../../parse');
const doSentence = require('./sentence');

const defaults = {
  infoboxes: true,
  tables: true,
  lists: true,
  title: true,
  images: true,
  links: true,
  formatting: true,
  sentences: true,
};

const makeImage = (image) => {
  let alt = image.file.replace(/^(file|image):/i, '');
  alt = alt.replace(/\.(jpg|jpeg|png|gif|svg)/i, '');
  return '  <img src="' + image.thumb + '" alt="' + alt + '"/>';
};

const doSection = (section, options) => {
  let html = '';
  //make the header
  if (options.title === true && section.title) {
    let num = 1 + section.depth;
    html += '  <h' + num + '>' + section.title + '</h' + num + '>';
    html += '\n';
  }
  //put any images under the header
  if (section.images && options.images === true) {
    html += section.images.map((image) => makeImage(image)).join('\n');
    html += '\n';
  }
  //make a html table
  // if (section.tables && options.tables === true) {
  // }
  // //make a html bullet-list
  // if (section.lists && options.lists === true) {
  // }
  //finally, write the sentence text.
  if (section.sentences && options.sentences === true) {
    html += '  <p>' + section.sentences.map((s) => doSentence(s, options)).join(' ') + '</p>';
    html += '\n';
  }
  return '<div class="section">\n' + html + '</div>\n';
};
//
const toHtml = function(str, options) {
  options = Object.assign(defaults, options);
  let data = parse(str, options);
  let html = '';
  //add the title on the top
  // if (options.title === true && data.title) {
  //   html += '<h1>' + data.title + '</h1>\n';
  // }
  //render infoboxes (up at the top)
  // if (options.infoboxes === true && data.infoboxes) {
  //   md += data.infoboxes.map(o => doInfobox(o, options)).join('\n');
  // }
  //render each section
  html += data.sections.map(s => doSection(s, options)).join('\n');
  return html;
};
module.exports = toHtml;
