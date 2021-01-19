addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
const urlPath = new URL(request.url).pathname

const urlQuery = new URL(request.url).searchParams.get('var')

if(urlPath == "/" && urlQuery == null){

 let ip_address = { ip : request.headers.get("cf-connecting-ip"),} 
 return new Response(JSON.stringify(ip_address), {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json;charset=UTF-8",
                "dev": "https://github.com/prabha-coder",
                "deployed-at": "cloudflare"
            },
        })
}

else if(urlPath=="/ip" && urlQuery == null){

    let ip_address = request.headers.get("cf-connecting-ip")
    return new Response('document.write("' + ip_address + '");', {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json;charset=UTF-8",
                "dev": "https://github.com/prabha-coder",
                "deployed-at": "cloudflare"
            },
        })
}

else if(urlQuery){
    
    let ip_address = request.headers.get("cf-connecting-ip")
    return new Response(urlQuery + ' = "'  + ip_address + '";', {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "text/html;charset=UTF-8",
                "dev": "https://github.com/prabha-coder",
                "deployed-at": "cloudflare"
            },
        })
}
else{
    return new Response("Bad Request",{
        status: 400,
         headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "text/html;charset=UTF-8",
                "dev": "https://github.com/prabha-coder",
                "deployed-at": "cloudflare"
            },
    })
}

}