export interface Transfer {
    id?: number;
    playerFirstName: string;
    playerLastName: string;
    fromClubName: string;
    toClubName: string;
    transferDate: Date | string;
    price?: number; 
}
