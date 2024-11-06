import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  // Method to sign in with Google
  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      console.log('User signed in:', result.user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }

  // Method to sign out
  async signOut() {
    try {
      await this.auth.signOut();
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
}
