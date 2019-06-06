"use strict";

class SiteController {
  constructor() {}

  actionIndex() {
    return async ctx => {
      ctx.body = await ctx.render('site/pages/index');
    };
  }

}

module.exports = SiteController;