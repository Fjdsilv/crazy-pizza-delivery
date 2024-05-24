const API_URL = "https://react-fast-pizza-api.onrender.com/api";


export const getMenu = async () => {
    const res = await fetch(`${API_URL}/menu`);
    // fetch doesn't treat client error(4xx) and server error(5xx) like error.
    // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. 
    if (!res.ok) throw new Error("Failed getting menu");

    const { data } = await res.json();
    return data;
} 

export const getOrder = async (id) => {
    const res = await fetch(`${API_URL}/order/${id}`);
    
    if (!res.ok) throw new Error(`Couldn't find order #${id}`);
    
    const { data } = await res.json();
    return data;
}

export const createOrder = async (newOrder) => {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed getting order");
    const { data } = await res.json();
    return data;
  } catch {
    throw new Error("Failed creating your order");
  }
}

export const updateOrder = async (id, updateObj) => {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error();
    // We don't need the data, so we don't return anything
  } catch {
    throw new Error("Failed updating your order");
  }
}