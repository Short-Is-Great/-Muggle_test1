const Query = {
  async all_links(parent, args, { db }, info) {
    const all_links = await db.LinkModel.find({});
    return all_links;
  },//all_links

  async return_long_url(parent, {url}, { db }, info) {
        
    const url_pair = db.LinkModel.find({short : url})
    return url_pair;
  },//return_long_url



  
};

export default Query;
