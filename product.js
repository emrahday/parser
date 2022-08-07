const fs = require('fs')
const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://www.gotprint.com/products/info.html';


( async () => {
    const products = [];
    await rp(url)
      .then(function(html){
            const $ = cheerio.load(html);
            const columns = $('.col-6');
            for(let col of columns){
                const head = $(col).find('.head5')
                const product = {
                    id: col.attribs.id.replace('productInfo-',''),
                    name: head.text()
                }
                products.push(product);
            }
      })
      .catch(function(err){
        //handle error
        console.log(err);
      });
      console.log(products);
      fs.writeFileSync('products.json', JSON.stringify(products));
})()

