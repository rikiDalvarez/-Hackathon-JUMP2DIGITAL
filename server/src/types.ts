export interface User {
  id?: number;
  email: string;
  created_at?: Date;
}

export interface UserSkin {
  id?: number;
  user_id: number;
  skin_id: number;
  color: string;
  created_at?: Date;
}

export interface Skin {
  id?: number;
  name: string;
  price: number;
  created_at?: Date;
}
