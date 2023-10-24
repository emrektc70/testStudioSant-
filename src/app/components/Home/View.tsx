import { getUsers } from "@/app/api/getUser";
import { GetServerSideProps } from "next";

type Props = {};

type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    birthDate: string;
    phone: string;
    image: string;
    username: string
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const apiUrl = "https://dummyjson.com/users";

    const response = await fetch(apiUrl);
    const users: User[] = await response.json();
    console.log(users, 'ICI')
    return {
        props: {
            users,
        },
    };
};
