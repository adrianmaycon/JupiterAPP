import React from 'react'

import firebase from 'react-native-firebase'

export class BookService {

    getBooks = callback => {
        firebase.firestore().collection('Livros').onSnapshot(snapshot => {
            snapshot.forEach(cap => callback({id: cap.id, ...cap.data()}))
        }) 
    }

    // numberCaps = callback => {
    //     firebase.firestore().collection('caps').onSnapshot(snapshot => callback(snapshot.size));
    // }
}

export default new BookService()