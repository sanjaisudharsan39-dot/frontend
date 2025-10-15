import React from 'react'
import cookie from "js.cookie"
import Swal from "sweetalert2" ///npm i sweetalert2

const Storage = () => {
    let [cAccepted,setCAccepted] = usestate(false)
    let [cookieName,setCookieName] = usestate('')

    localStoreage.setItem("name","sanjai")
    sessionStoreage.setItem("name","Alpha")
function acceptCookies(){
    cookie.set("accepted","true",{expires : 10})
    Swal.fire({
        title: "GOOD JOB !!!",
        text: "YOU CLICKED THE BUTTON !!",
        icon: "success"  
    });
}
function savecookie(){
    cookie.set('name','beta',{expires:5})
    setCookieName(cookie.get('name'))
}
function removeCookies(){
    cookie.remove('name')
    cookie.remove('accepted')
}
function displayCookieMessage(){
    Swal.fire({
        title:"ADD COOKIE?",
        showDenyButton:true,
        showCancelButton:true,
        confirmButtonText:"save",
        denyButtonText:`don't save`
    })
    .then((result) => {
        if(result.isConfirmed){
            Swal.fire("saved!"," ","success");
            savecookie()
            setCAccepted(true)
        }
        else if (result.isDenied){
            Swal.fire("changed are not saved"," ","info");
            setCAccepted(false)
            notAccept()
        }
    });
}   
    function notAccept(){
    setTimeout(displayCookieMessage,2000)
    console.log(cAccepted);    
}
if(!cAccepted){
    notAccept()
}
return (
    <div> STOREAGE
        <div>{localStoreage.getItem("name")}</div>
        <div><button onClick={() => localStoreage.removeItem("name")}>removeItem -localStoreage</button></div>
        <div><button onClick={() => SessionStoreage.removeItem("name")}>removeItem -SessionStoreage</button></div>
        <div><button onClick={acceptCookies}>acceptCookies</button></div>
        <div><button onClick={removeCookies}>removeCookies</button></div>
        {cookieName.length && <p>{cookieName}</p>}
    </div>
  )
}

export default Storage
