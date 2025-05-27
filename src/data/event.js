const BASE_URL ='http://localhost:3001/api/events';

const getEvents = async () =>{
    const res =await fetch(BASE_URL);
    if(!res.ok) throw new Error(`${res.status}. Something went wrong`);

    const data = await res.json();
    console.log(data.results);
    return data.results;
};

const getEventByID = async (id) =>{
    const res =await fetch(`${BASE_URL}/${id}`);
    if(!res.ok) throw new Error(`${res.status}.Something went wrong `);

    const data = await res.json();

    return data;
};

export {getEvents,getEventByID};