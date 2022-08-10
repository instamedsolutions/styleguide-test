const path = require('path');

module.exports = {
  process(ui, filename) {
    return `module.exports = '${path.basename(filename)}';`;
  }
};
