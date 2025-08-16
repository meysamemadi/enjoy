
export const getConnection = async (lang: string,type:string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}connection/index?lang=${lang}&type=${type}`,
            {
                cache: 'no-cache',
            }
        );

        const response = await res.json();
        return response;
    } catch (error) {
        console.log("[getConnection]", error);
        throw new Error("get getConnection error");
    }
};