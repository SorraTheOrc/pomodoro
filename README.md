Pomodoro
========

A simple HTML + Javascript application for assisting with the implementation of the Pomodoro Technique of time management - http://en.wikipedia.org/wiki/Pomodoro_Technique

It is built using the Apache Wookie widget templating system and as such can be packaged as a W3C Widget that will either run standalone or within any client capable of hosting widgets.

Setup
-----

  * Checkout code from https://github.com/rgardler/pomodoro
    * It is recommended to check this code out into a seprate widgets directory within your workspace. We use '''projects/widgtets'''
  * Checkout Apache Wookie from http://wookie.apache.org
    * For convenience it is best to place this in the same directory as your widgets directory. We use '''projects/wookie'''

Building and Testing
--------------------

If you want to test the widget as deployed by Wookie you must first ensure Wookie is running:

'''
cd project/widgets
ant run
'''

Build and deploy the Pomodoro widget:

'''
cd projects/widgets
ant generate-all-widgets -Dwidget.include=Pomodoro
'''

Visit Pomodoro in your browser using either the flat file distribution or the Wookie distribution. For Wookie visit '''http://localhost:8080/wookie''' and find your widget in the test page. For the raw distribution point your file at '''projects\widgets\build\Pomdoro/index.html'''