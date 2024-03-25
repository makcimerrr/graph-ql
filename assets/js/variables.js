const DOMAIN = "zone01normandie.org"
let token

const query = `
  query {
    transaction {
      type
      amount
      path
      createdAt
    }
  }
`;

const query2 = `
  query {
    user {
      id
      attrs
    }
  }
`;

const skillTypes = [
    "algo",
    "prog",
    "game",
    "ai",
    "stats",
    "tcp",
    "unix",
    "go",
    "js",
    "rust",
    "c",
    "python",
    "php",
    "ruby",
    "sql",
    "html",
    "css",
    "docker",
    "back-end",
    "front-end",
    "sys-admin"
];