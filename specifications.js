import fs from 'fs';
import fetch from 'node-fetch';

const url = 'https://www.gotprint.com/service/rest/v1/settings/product/specifications?requestValues=true&productType='



    
    const productList = fs.readFileSync('products.json', 'utf8');
    console.log(productList);
    for(let product of JSON.parse(productList)){
        console.log(product.id, product.name);
        const productUrl = `${url}${product.id}`;
        const options = {
            headers: {
                cookie: 'UUID=fe07234e-6b81-4ad8-8a91-9e26507ddaa7; org.jboss.seam.core.Locale=en_US; _gcl_au=1.1.1263891235.1659516206; LPVID=djZDI5N2M3YWZiMmQzYzI1; JSESSIONID=5301DA7B9D24AA4100EC5031C29FC915.pca02-w1; crdc-zHxulPSUEUEtgfypmySSbdQp6BMf83UqYiGv0KOXkiRKtL5oVOckzWKNjksYQ0WWKTlcqNu=v1o-Lmgw__++x; _gid=GA1.2.2099831439.1659878840; _ga=GA1.2.1486263290.1659516206; _clck=ewt0es|1|f3t|0; LPSID-74823894=HfWV46qoRUqpfjflxoG3GQ; _uetsid=accd0720165411edb2f9b72aac8e3d5a; _uetvid=b3a3c8d0117911ed8311a3e134da6b69; _ga_VYV2JPK2M6=GS1.1.1659878840.5.1.1659878849.0; _clsk=1urexsk|1659878850483|2|1|l.clarity.ms/collect'
            }
        };
        const response = await fetch(productUrl, options)
        const data = await response.json();
        fs.writeFileSync(`specifications/products_${product.id}.json`, JSON.stringify(data));
    }


