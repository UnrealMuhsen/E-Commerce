import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersKey = 'users';
  private currentUserKey = 'currentUser';

  constructor() {
    this.initializeUsers();
  }

private initializeUsers() {
  const existingUsers = localStorage.getItem(this.usersKey);

  if (!existingUsers) {

    const defaultUsers = [
      {
        username: 'Admin',
        email: 'admin@yahoo.com',
        password: 'admin',
        role: 'admin'
      }
    ];

    localStorage.setItem(this.usersKey, JSON.stringify(defaultUsers));
  }
}


  register(username: string, email: string, password: string): boolean {
    const users = this.getUsers();

    const userExists = users.find(u => u.email === email);
    if (userExists) return false;

    const newUser = {
      username,
      email,
      password,
      role: 'user'
    };

    users.push(newUser);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return true;
  }

 
  login(email: string, password: string): boolean {
    const users = this.getUsers();

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) return false;

    const currentUser = {
      username: user.username,
      role: user.role,
      isLoggedIn: true
    };

    localStorage.setItem(this.currentUserKey, JSON.stringify(currentUser));
    return true;
  }


  logout() {

    localStorage.removeItem(this.currentUserKey);
  }

 
  getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(this.currentUserKey) || 'null');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.currentUserKey);
  }
}