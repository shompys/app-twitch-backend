import fetch from 'node-fetch';
import twitchTokenModel from './twitch.Token.models';
//token of the api
export const getToken = async () => {
    try{
        const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials&scope=viewing_activity_read`,{
            method: 'post'
        })
        return await res.json();
        
    }catch(e){
        console.log(`Error en method getToken: ${e}`)
    }
}

// save database
export const saveToken = async (props) => {
    //primera entrada si no existe el id es porque no existe un token
    try{
        
        if(props.id) return await twitchTokenModel.findByIdAndUpdate(props.id, props.token, {new: true})
        
        const newToken = new twitchTokenModel(props.token);
        return await newToken.save();
        

    }catch(e){
        console.log(`Error en method saveToken: ${e}`)
    }

}





