const getData = async  ()  => {
    
    let url = process.env.url; 
    
    const fetchData = {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json; charset=UTF-8",
            "x-hasura-admin-secret": process.env.secret
        }),
    };
     
    try {
        let data = await fetch(url, fetchData);
        data = await data.json();
        return data;
    }
    catch(error) {
        console.log("Error fetching data " + error)
    }
}

module.exports = getData;