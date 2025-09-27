'use server';

import { neon } from "@neondatabase/serverless";

export default async function postData(nisn: number, nama: string, pilihan: number) {
    const sql = neon(process.env.DATABASE_URL!);
    const data = await sql`INSERT INTO voters (nisn, nama, pilihan) VALUES (${nisn}, ${nama}, ${pilihan});`;
    console.log(data);
    return data;
}
