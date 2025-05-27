const BASE_URL = "http://localhost:3001/api";

const signIn = async (formData) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

    const data = await res.json();
    // console.log(data);

    return data;
};

// Variable for sending POST request to the register API endpoint upon signup submission

const signUp = async (formData) => {
    const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

    const data = await res.json();
    // console.log(data);

    return data;
};

const me = async () => {
    const token = localStorage.getItem("token");

    if (!token) throw new Error(`Failed to sign in. Please try again.`);

    const res = await fetch(`${BASE_URL}/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

    const data = await res.json();
    //console.log(data);

    return data;
};

export { signIn, signUp, me };
