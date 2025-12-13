export interface User {
  id: number;
  name: string;
  age: number;
  role: string;
  joinDate: string;
  isFullTime: boolean;
}

const roles = ['Market', 'Finance', 'Development', 'HR'];

export function generateUsers(count = 50): User[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: Math.floor(Math.random() * 20) + 20,
    role: roles[Math.floor(Math.random() * roles.length)],
    joinDate: new Date(
      Date.now() - Math.random() * 1e11,
    ).toISOString().split('T')[0],
    isFullTime: Math.random() > 0.5,
  }));
}
