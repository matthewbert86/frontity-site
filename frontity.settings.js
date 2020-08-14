const settings = {
  name: "my-app",
  state: {
    frontity: {
      url: "http://mental-geek.local/",
      title: "Mental Geek",
      description: "A Mental Health Community"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Blog", "/blog/"],
            ["Resources", "/resources/"],
            ["Connect", "/connect/"]
          ],
          category: [
            ["General", "/category/general/"],
            ["News", "/category/news/"]
          ],
          featured: {
            showOnList: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            "https://mentalgeek-60854f.ingress-comporellon.easywp.com/wp-json",
          homepage: "/home/",
          postsPage: "/blog/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ]
};

export default settings;
