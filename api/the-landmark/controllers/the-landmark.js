'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */



module.exports = { 
    

Test:async ctx=>{
        const { id } = ctx.params;
        return id;
      }
};
