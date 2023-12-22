import { createContext, useEffect } from "react";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider,createUserWithEmailAndPassword,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext(null)

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider= new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,curretnUser=>{
             setUser(curretnUser)
             console.log(curretnUser);
             setLoading(false)
         })
         return()=>{
             return unsubscribe();
         }
     },[])
    //  Login with Facebook
    const facebookSignin=()=>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider)
    }

//Log in with Google
const googleSignin=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}

 // user created
const createUser=(email,password)=>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password)
}
//    user Signing in
const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
// user update profile
const updateUserProfile=(name,photo)=>{
  return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo
    });
}

// User Signing out
const logOut=()=>{
    setLoading(false);
    return signOut(auth);
}
    const authinfo={
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        googleSignin,
        facebookSignin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;