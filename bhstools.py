import json
import os
import urllib.parse

import requests
import xmltodict
from flask import abort
from flask import Flask
from flask import redirect
from flask import render_template
from flask import request

if os.environ.get("GITPOD_WORKSPACE_URL", None) is not None:
    hostname = os.environ.get("GITPOD_WORKSPACE_URL").replace(
        "https://", "5000-")
else:
    hostname = "bhstools.herokuapp.com"
service = urllib.parse.quote_plus("https://{}/ticket".format(hostname))
loginurl = "https://sso.bethelsd.org/login?service={}".format(service)
validateurl = "https://sso.bethelsd.org/serviceValidate?service={}&ticket={}".format(
    service, "{}")
app = Flask(__name__)


@app.route("/")
def homepage():
    return render_template("index.html")


@app.route("/login")
def login():
    return redirect(loginurl)


@app.route("/ticket")
def ticketlogin():
    ticket = request.args.get("ticket", None)
    if ticket is None:
        abort(400)
    nformat = validateurl.format(ticket)
    data = requests.get(nformat, verify="cert.pem")
    data = xmltodict.parse(data.text)
    resp = data["cas:serviceResponse"]
    if "cas:authenticationFailure" in resp:
        abort(401)
    userdata = resp["cas:authenticationSuccess"]
    studentid = userdata["cas:user"]
    print(studentid)
    return redirect("https://{}/".format(hostname))  # why


@app.route("/brewCoffee")
def brewCoffee():
    abort(418)


if __name__ == "__main__":
    app.run(port=os.environ.get("PORT", 8080))
