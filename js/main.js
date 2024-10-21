document.querySelector('#button').addEventListener('click', getGeoData)

function getGeoData() {
    const zip = document.querySelector('#zip').value

    const url1 = `http://api.zippopotam.us/us/${zip}`

    console.log('This is the entered zip code:', zip)

    fetch(url1)
        .then(res => res.json())
        .then(data => {

            console.log(data.places[0])
            console.log(data.places[0]['place name'])
            console.log(data.places[0].state)
            
            document.querySelector('#location').innerText = `City: ${data.places[0]['place name']}. State:${data.places[0].state}`

            // -------Begin API Numero Dos second fetch command! ---
           const  newlatitude = data.places[0].latitude
            const newlongitude = data.places[0].longitude
            console.log(newlatitude)
            console.log(newlongitude)
           const url2 = `https://currentuvindex.com/api/v1/uvi?latitude=${newlatitude}&longitude=${newlongitude}`
       
           fetch(url2)
               .then(res => res.json())
               .then(data => {
                   
                   console.log(data.now)
       document.querySelector('#uvResult').innerText = `Current UV Index: ${data.now.uvi}`
               })

            }) .catch(err => {
            console.error(`error: ${err}`)
        });

}