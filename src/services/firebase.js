import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'



const config ={
    apiKey: "AIzaSyBmqnozIr5Hl-zSKGmxtrR-nXfswHjiBMc",
    authDomain: "youtubetutorial-a5e25.firebaseapp.com",
    databaseURL: "https://youtubetutorial-a5e25.firebaseio.com",
    projectId: "youtubetutorial-a5e25",
    storageBucket: "youtubetutorial-a5e25.appspot.com",
    messagingSenderId: "506275237288"
};
firebase.initializeApp(config);

//references
const firestore = firebase.firestore()
const coktelesRef = firestore.collection('cokteles')

export function getCokteles(){
    return coktelesRef.get()
        .then(snap=>{
            const cokteles = []
            snap.forEach(c=>{                    
                cokteles.push(c.data())
            })
            return cokteles
        }).catch(e=>console.log(e))
}

export function getCoktel(id){
    return coktelesRef.doc(id).get()
        .then(doc=>{
            return doc.data()
        }).catch(e=>console.log(e))
}



export function saveCoktel(item){
    let id = item.id
    if(!id){
        id = coktelesRef.doc().id
        item['id'] = id
    }    
    return coktelesRef.doc(id).set(item)
}