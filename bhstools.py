from flask import Flask, render_template, redirect, request
import os
import urllib.parse
import requests
import xmltodict
service = urllib.parse.quote_plus("https://bhstools.herokuapp.com/ticket")
loginurl = "https://sso.bethelsd.org/login?service={}".format(service)
validateurl = "https://sso.bethelsd.org/serviceValidate?service={}&ticket={}".format(service,"{}")
app = Flask(__name__)
@app.route("/")
def homepage():
    return render_template("index.html")
@app.route("/login")
def login():
    return redirect(loginurl)
@app.route("/ticket")
def ticketlogin():
    ticket = request.args.get("ticket",None)
    if ticket is None:
        return 403
    nformat = validateurl.format(ticket)
    data = requests.get(nformat)
    data = xmltodict.parse(data.text)
    print(data)
    return redirect("/")
if __name__ == "__main__":
    app.run(port=os.environ.get("PORT",8080))
