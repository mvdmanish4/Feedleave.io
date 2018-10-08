from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort
import os
import mysql.connector

feedleaveDB = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="admin12345",
  database="feedleave"
)

dbCursor = feedleaveDB.cursor()
 
app = Flask(__name__)
 
@app.route('/')
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return "Hello Genius!  <a href='/logout'>Logout</a>"
 
@app.route('/login', methods=['GET','POST'])
def do_admin_login():	
	sql = "SELECT * FROM users WHERE userName=%s and userPwd=%s"
	adr = (request.form['username'],request.form['password'])
	dbCursor.execute(sql, adr)
	dbResult = dbCursor.fetchone()
	print dbResult
	#if request.form['password'] == 'password' and request.form['username'] == 'admin':
	print str(dbCursor.rowcount)+request.form['username']+request.form['password']
	if dbResult is None:
		flash('wrong password!')		
	else:
		session['logged_in'] = True		
	return home()
 
#http://127.0.0.1:4000/logout
@app.route("/logout")
def logout():
    session['logged_in'] = False
    return home()

#http://127.0.0.1:4000/signUp?name=Man&pwd=val123
@app.route("/signUp")
def signUpUser():
	name = request.args.get('name')
	pwd = request.args.get('pwd')
	sql = "INSERT INTO users (userName, userPwd) VALUES (%s, %s)"
	val = (name, pwd)
	dbCursor.execute(sql, val)
	feedleaveDB.commit()
	res = str(dbCursor.rowcount)+"record inserted."
	print res
	return "User created"    
 
if __name__ == "__main__":
    app.secret_key = os.urandom(12)
    app.run(debug=True,host='0.0.0.0', port=4000)