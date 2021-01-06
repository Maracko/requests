/**
* Requests
* Simple HTTP requests helper library
* @version 0.1
* @author Mario Petričko
* @license MIT
**/

class Requests {

  async get(url) {
    const req = await fetch(url, {
      method: "GET",
      //mode: "no-cors",
      headers: {
        "Accept": "*"
      }
    });
    return await req.text();
  }

  async post(url, data) {
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await req.text();
  }

  async patch(url, data) {
    const req = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await req.text();
  }

  async put(url, data) {
    const req = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await req.text();
  }

  async delete(url, data = null) {
    const req = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await req.text();
  }
}
