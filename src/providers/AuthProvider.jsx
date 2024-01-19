import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 1. sign up
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // 2. login
    const signIn = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }
    // 3. sign in with google
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // 4. sign in with github
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    // 5. reset Password
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }

    // 6. logOut
    const logOut = () => {
        setLoading(true);
       return signOut(auth)
    }
    // 7. Observe auth state change
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);

            if( currentUser && currentUser.email){
                const loggedUser = {
                    email: currentUser.email 
                };
                console.log(loggedUser);
                // jwt
                fetch('http://localhost:5000/jwt', {
                    method:'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('jwt response', data)
                    // warning: local storage is not the best place to store access token
                    localStorage.setItem('car-doctor-accessToken', data.token);
                })
            }
            else{
                localStorage.removeItem('car-doctor-accessToken')
            }
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        resetPassword,
        signInWithGoogle,
        signInWithGithub,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;