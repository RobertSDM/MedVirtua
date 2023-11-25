const saveRegister = async (email: string, pass: string) => {
    const res = await fetch("http://localhost:8080/registro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: email,
            senha: pass,
        }),
    });

    console.log(res.status);
    if (res.status === 201) {
        return { fetchSuccess: true };
    }
    return { fetchSuccess: false };
};

export default saveRegister;
