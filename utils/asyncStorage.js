import { AsyncStorage } from 'react-native'


let object = {}
object.isUserRegistered =async  () => {
    let val = await AsyncStorage.getItem('isUserRegistered')
    console.log('in get user regaisterd value', val)
    if(val === 'true'){
        return true
    }
    else{
        return false
    }
}
object.isLoggedIn = async () => {
    let val = await AsyncStorage.getItem('isLoggedIn')
    if(val === 'true'){
        return true
    }
    else{
        return false
    }
}


export default {...object}