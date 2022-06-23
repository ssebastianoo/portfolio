import requests, os
from flask import Flask, jsonify 

key = os.environ.get('KEY')
username = os.environ.get('USERNAME')

headers = {
    "Authorization": "Client-ID " + key
}

app = Flask(__name__)

@app.get("/")
def index():
    r = requests.get(f"https://api.unsplash.com/users/{username}/photos", headers=headers)
    data = r.json()
    urls = [pic['urls']['full'] for pic in data]

    response = jsonify(pics=urls)
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response

if __name__ == "__main__":
        app.run(host="0.0.0.0", port=3434)