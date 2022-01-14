const Mutation = {

  // async createLink(parent, { url }, { db, pubsub }, info) {
  //   if (!url)
  //     throw new Error("Url must not be empty!");
    
  //   if (!(await checkUrlExisted(db, url))) {
  //     console.log("This link hasn't been constructed yet." + url);
  //     let link = await newLink(db, url);
  //   }

  //   return link;
  // },


  async createLink(parent, { origin,short }, { db, pubsub }, info) {

    const random_x_words = (x)=>{     //回傳隨機字母x個
        var words = "" //存字串
        for(var i=0;i<x;i++){
            const random_en_world = Math.floor(Math.random()*25)+65 // A從65 到 Z 65+25  
            words.push(String.fromCharCode(random_en_world)) //存入字串
        }
        return words
    };//random_x_words

    return  new db.LinkModel({      
        origin : origin , short : short   
      }).save();
    
}//createLink
  
};// Mutation 

export default Mutation;