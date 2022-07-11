const request = require('request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYmFsYW11cnVnYW41IiwiYSI6ImNsNWQ3eWlmbTA4OHMzZm1wZ2VscGMxcGkifQ.iHBfoRAkPlZtZ0zqn168fQ'
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Not Able to access Weather Service ',undefined)
        }else if(response.body.features.length === 0){
            callback('Location Not Found Try Another ',undefined)
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location : response.body.features[0].place_name            
            })
        }

    })
}

module.exports = geocode