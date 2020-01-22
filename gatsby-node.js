/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const axios = require("axios");
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await axios.get("https://api.myjson.com/bins/cw686");
  console.log(result);
  const IndexPage = path.resolve(`src/pages/index.js`);
  console.log({ IndexPage });
  //   const result = await graphql(`
  //     query MyQuery {
  //       allSitePlugin {
  //         edges {
  //           node {
  //             id
  //           }
  //         }
  //       }
  //     }
  //   `);
  //   console.dir(result);
  // result.data.allSitePlugin.edges.forEach(edge => {
  //   console.log(edge);
  createPage({
    path: `/`,
    component: IndexPage,
    context: {
      data: "result"
    }
  });
  // });
};
