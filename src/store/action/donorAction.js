import actionTypes from "./actionTypes";
import * as firebase from 'firebase'

export function donorDetailAction(donorDetail){
    return dispatch => {
        dispatch(upComingUserAction);
        console.log("Action runing")
        var currUser = firebase.auth().currentUser.uid;        
        firebase.database().ref().child('donorDetails/' + donorDetail.bloodType + '/').push(donorDetail)
        .then((v)=>{
            console.log(v, "fb response")
            // dispatch({
            //       type: actionTypes.DONOR,
            //       payload: {...donorDetail}
                        
            // })
        })
        .catch((e)=>{
            console.log("fb error: ",e)
        })

        console.log('Donor Details', donorDetail)
    }
}

//  <<<< !!!!!!!------- Require Blood Details Parts Starting Here -------!!!!! >>>>>>


export function requireBloodAction(requireBloodDetails){
    return dispatch => {
        const dataArr = [];
        const NeedBlood = [];

        switch(requireBloodDetails){
            case "A+": 
            NeedBlood.push(['A+','O+','A-','O-']);
            break;
            case "B+": 
            NeedBlood.push(['B+','O+','B-','O-']);
            break;
            case "O+": 
            NeedBlood.push(['O+','O-']);
            break;
            case "A-": 
            NeedBlood.push(['A-','O-']);
            break;
            case "B-": 
            NeedBlood.push(['B-','O-']);
            break;
            case "O-": 
            NeedBlood.push(['O-']);
            break;
            case "AB+": 
            NeedBlood.push(['AB+','O+','B+','A-','O-']);
            break;
            case "AB-": 
            NeedBlood.push(['AB-','O-','B-']);
            break;

        default : 
        console.log("Please Select A valid value")
        }
        
        NeedBlood.map((value,i)=>{
            return value.map((v,index)=>{
                return (
                    firebase.database().ref().child('donorDetails/' + v + '/').on('value', (snapshot)=>{
                        var retrieveData = snapshot.val() //from firebase
                        for (var i in retrieveData){
                            dataArr.push(retrieveData[i])
                        }                        
                    })
                )
            })
        })
        
        dispatch(donorActionType(dataArr))
        console.log(donorActionType(dataArr),"donor Details From Action Creator")
    }

}

function upComingUserAction(){
    return {
        type: actionTypes.DONOR,
        // payload: payload
    }
}


function donorActionType(payload){
    return { 
        type: actionTypes.REQUIREBLOOD,
        payload:payload
    }
}