import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

const auth = getAuth();

export const signInUser = async (email, password) => {
  try {
    const userCredental = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredental.user
    localStorage.setItem("token", user.accessToken)
    return {user}
  }
  catch (error) {
    console.log(error);
    return {error}
  }
}


export const registerUser = async (username, email, password) => {
  try {
    const userCredental = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
    })
    const user = userCredental.user
    localStorage.setItem("token", user.accessToken)
    return {user}
  }
  catch (error) {
    console.log(error);
    return {error}
  }
}

export const signOutUser = async () => {
  await signOut(auth)
  localStorage.removeItem("token")
}
