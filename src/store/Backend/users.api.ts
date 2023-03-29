import axios from 'axios';

export type UserDto = {
  id?: number;
  username: string;
  password?: string;
  joinDate?: string;
};

const BASE_URL = 'http://192.168.1.4:5087/api';

export async function PostUser(NewUser: UserDto) {
  try {
    const response = await axios.post<UserDto>(`${BASE_URL}/Users`, NewUser);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
