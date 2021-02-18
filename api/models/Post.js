/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: {
      type: "string",
      required: true,
    },
    postContent: {
      type: "string",
      columnType: "text",
      required: true,
    },
    featureImage: {
      type: "string",
      columnType: "text",
    },
    tags: {
      type: "string",
    },
    isPublished: {
      type: "boolean",
      defaultsTo: false,
    },
    publishedAt: {
      type: "ref",
      columnType:"timestamp"
    },
    categories: {
      collection: "category",
      via: "posts",
    },
    slug: {
      type: "string",
      required: true,
      unique: true
    }
  },
};

