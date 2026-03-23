module.exports = function (eleventyConfig) {
  // No need to do anything with CSS since we're using Bootstrap
  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};